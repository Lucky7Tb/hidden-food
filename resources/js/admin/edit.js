const { JsonProvider } = require("leaflet-geosearch");
const supabase = require("../library/supabase/supabase");
const url = window.location.href.split("/");
const id = url[url.length - 1];

let myMap;
let mapSearchMarker;

const position = [-6.919254047160112, 107.61101714037947];

function initMap() {
	myMap = L.map("map", {
		scrollWheelZoom: false,
	}).setView(position, 15);

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
}

function getHiddenFoodData() {
	$.ajax({
		type: "GET",
		url: `/api/hidden-food/${id}`,
		success: function (response) {
			const { data } = response;
			$("#thumbnail").attr(
				"src",
				"https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/hidden-food-picture/thumbnail/" +
					data.thumbnail
			);
			$("#name").val(data.name);
			$("#status").val(data.status).change();
			$("#address").val(data.address);
			$("#detail_address").val(data.detail_address);
			position[0] = data.lat;
			position[1] = data.long;
			initMap();
		},
		error: function () {
			toastr.error("Wah ada error sama server nya nih :(", "Error!");
		},
	});
}

async function deleteThumbnail(thumbnail) {
	const { error } = await supabase.storage
		.from("hidden-food-picture")
		.remove([`thumbnail/${thumbnail}`]);

	return error == null;
}

$(function () {
	getHiddenFoodData();

	$("#btn-delete").on("click", (event) => {
		event.preventDefault();
		$.ajax({
			type: "DELETE",
			url: `/api/hidden-food/${id}`,
			success: async function (response) {
				const isSuccess = await deleteThumbnail(response.data);
				if (isSuccess) {
					toastr.success("Berhasil menghapus tempat makan", "Success!");
					setTimeout(() => {
						window.location.href = "/admin";
					}, 1500);
				} else {
					toastr.error("Gagal menghapus thumbnail tempat makan", "Error!");
					setTimeout(() => {
						window.location.href = "/admin";
					}, 1500);
				}
			},
			error: function (error) {
				toastr.error("Wah ada error sama server nya nih :(", "Error!");
			},
		});
	});

	$("#hidden-food-form").on("submit", (event) => {
		event.preventDefault();
		const { lat, lng } = mapSearchMarker.getLatLng();
		$.ajax({
			type: "PUT",
			url: `/api/hidden-food/${id}`,
			headers: {
				"X-CSRF-TOKEN": $("meta[name=csrf-token").attr("content"),
			},
			data: JSON.stringify({
				name: $("#name").val(),
				address: $("#address").val(),
				detail_address: $("#detail_address").val(),
				status: $("#status").val(),
				lat: lat,
				long: lng,
			}),
			dataType: "json",
			contentType: "application/json",
			processData: false,
			success: function (response) {
				toastr.success("Berhasil update tempat makan", "Success!");
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
	});
});
