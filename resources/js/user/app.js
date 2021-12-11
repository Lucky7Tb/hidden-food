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

const hiddenFoodMarkers = [];

const position = [-6.919254047160112, 107.61101714037947];

// function getCurrentPosition() {
// 	navigator.permissions.query({ name: "geolocation" }).then(function (result) {
// 		console.log(result);
// 		if (result.state == "granted") {
// 			window.navigator.geolocation.getCurrentPosition(
// 				({ coords }) => {
// 					const  { latitude, longitude } = coords;
// 					position[0] = latitude;
// 					position[1] = longitude;
// 				},
// 				(error) => {
// 					console.log(error);
// 				}
// 			);
// 		}
// 	});
// }

function initMap() {
	// getCurrentPosition();

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
}

function getAllHiddenFood(coor = position) {
	$.ajax({
		type: "GET",
		url: `/api/hidden-food?coor=${coor[0]},${coor[1]}`,
		beforeSend: function () {
			$("#btn-search-hidden-food").addClass("loading");
		},
		success: function (response) {
			const data = response.data;
			data.forEach((hiddenFoodCoor) => {
				const marker = L.marker([hiddenFoodCoor.lat, hiddenFoodCoor.long], {
					alt: "Marker",
					icon: L.icon({
						iconUrl:
							"https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/hidden-food-picture/assets/icons8-fork-64.png",
						iconSize: [48, 48],
					}),
				});

				marker.bindPopup(`
					<div class="flex flex-col space-y-3">
						<span><b>Nama: </b>${hiddenFoodCoor.name}</span>
						<span class="truncate">
							<b>Alamat: </b>${hiddenFoodCoor.address}
						</span>
						<span class="text-center"><a href="/detail/${hiddenFoodCoor.id}" class="btn btn-xs btn-link">Detail</a></span>
					</div>
				`);

				hiddenFoodMarkers.push(marker);
				myMap.addLayer(marker);
			});
		},
		error: function () {
			toastr.error("Wah ada error sama server nya nih :(", "Error!");
		},
		complete: function () {
			$("#btn-search-hidden-food").removeClass("loading");
		}
	});
}

$(function () {
	initMap();
	getAllHiddenFood();

	$("#btn-search-hidden-food").on("click", () => {
		const { lat, lng } = mapSearchMarker.getLatLng();
		hiddenFoodMarkers.forEach((marker) => {
			myMap.removeLayer(marker);
		});
		getAllHiddenFood([lat, lng]);
	});
});
