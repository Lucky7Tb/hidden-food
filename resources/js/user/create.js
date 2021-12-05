const supabase = require("../library/supabase/supabase");
const {
	GeoSearchControl,
	OpenStreetMapProvider,
} = require("../library/leaflet/leaflet-geo-plugin");

let myMap;
let mapSearchMarker;

const provider = new OpenStreetMapProvider();
const searchControl = new GeoSearchControl({
	provider: provider,
	style: "button",
	showMarker: false,
	searchLabel: "Mau cari sekitar daerah mana ?",
});

const position = [-6.919254047160112, 107.61101714037947];

const hiddenFoodCoor = {
	lat: position[0],
	lng: position[1],
};

function initMap() {
	myMap = L.map("map", {
		scrollWheelZoom: false,
	}).setView(position, 13);

	mapSearchMarker = L.marker(position, {
		alt: "Marker",
		draggable: true,
	}).addTo(myMap);

	L.tileLayer(
		"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" +
			process.env.MIX_LEAFTLET_ACCESS_TOKEN,
		{
			attribution:
				'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: "mapbox/streets-v11",
			tileSize: 512,
			zoomOffset: -1,
			accessToken: process.env.MIX_LEAFTLET_ACCESS_TOKEN,
		}
	).addTo(myMap);

	myMap.addControl(searchControl);
	myMap.on("geosearch/showlocation", (e) => {
		const { y: lat, x: lng } = e.location;
		mapSearchMarker.setLatLng([lat, lng]);
	});

	mapSearchMarker.on("dragend", () => {
		const { lat, lng } = mapSearchMarker.getLatLng();
		hiddenFoodCoor.lat = lat;
		hiddenFoodCoor.lng = lng;
	});
}

$(function () {
	initMap();

	$(".dropify").dropify();

	$("#form-recomendation").on("submit", (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.set("name", $("#name").val());
		formData.set("address", $("#address").val());
		formData.set("detail_address", $("#detail_address").val());
		formData.set("thumbnail", $("#thumbnail")[0].files[0]);
		formData.set("lat", hiddenFoodCoor.lat);
		formData.set("long", hiddenFoodCoor.lng);
		createHiddenFood(formData);
	});

	function createHiddenFood(formData) {
		$.ajax({
			type: "POST",
			url: "/api/hidden-food",
			headers: {
				"X-CSRF-TOKEN": $("meta[name=csrf-token").attr("content"),
			},
			data: formData,
			contentType: false,
			processData: false,
			success: async function (result) {
				const linkThumbnail = await uploadThumbnail($("#thumbnail")[0].files[0]);
				if (linkThumbnail !== null) {
					updateHiddenFoodThumbnail(result.data.id, linkThumbnail);
				} else {
					toastr.error("Wah ada error sama server nya nih :(", "Error!");
				}
			},
			error: function (error) {
				switch (error.status) {
					case 422:
						const { errors } = JSON.parse(error.responseText);
						const [firstError] = Object.keys(errors);
						toastr.error(errors[firstError], "Error!");
						break;
					default:
						toastr.error("Wah ada error sama server nya nih :(", "Error!");
						break;
				}
			},
		});
	}

	function updateHiddenFoodThumbnail(id, thumbnail) {
		$.ajax({
			type: "PUT",
			url: `/api/hidden-food/${id}/update-thumbnail/`,
			headers: {
				"X-CSRF-TOKEN": $("meta[name=csrf-token]").attr("content"),
			},
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify({
				thumbnail,
			}),
			success: function () {
				toastr.success("Berhasil menambah rekomendasi nih :)", "Success!");
				setTimeout(() => (window.location.href = "/"), 1500);
			},
			error: function (error) {
				toastr.error("Wah ada error sama server nya nih :(", "Error!");
			},
		});
	}

	async function uploadThumbnail(file) {
		const date = new Date();
		let fileName = `${date.getDate()}${date.getMonth()}${date.getFullYear()}${date.getMilliseconds()}`;

		fileName += `.${file.type.split("/")[1]}`;

		const { data, error } = await supabase.storage
			.from("hidden-food-picture")
			.upload(`thumbnail/${fileName}`, file, {
				cacheControl: "3600",
				upsert: false,
			});

		if (error) {
			return null;
		}

		return data.Key;
	}
});
