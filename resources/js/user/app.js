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

const hiddenFoodCoorData = [
	[-6.921256431043179, 107.5632118733507],
	[-6.889741001220134, 107.68474484094975],
];

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

	mapSearchMarker.on("dragend", () => {
		const { lat, lng } = mapSearchMarker.getLatLng();
	});

	hiddenFoodCoorData.forEach((coor) => {
		const marker = L.marker(coor, {
			alt: "Marker",
			icon: L.icon({
				iconUrl:
					"https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/hidden-food-picture/assets/icons8-fork-64.png",
				iconSize: [48, 48],
			}),
		});

		hiddenFoodMarkers.push(marker);
		myMap.addLayer(marker);
	});
}

$(function () {
	initMap();

	$("#btn-search-hidden-food").on("click", () => {
		hiddenFoodMarkers.forEach((marker) => {
			myMap.removeLayer(marker);
		});
	});
});
