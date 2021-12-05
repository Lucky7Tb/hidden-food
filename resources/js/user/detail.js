let myMap;

const position = [-6.919254047160112, 107.61101714037947];

function initMap() {
	myMap = L.map("map", {
		scrollWheelZoom: false,
	}).setView(position, 16);

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

function getDetailHiddenFood() {
	const url = window.location.href.split("/");
	const id = url[url.length - 1];
	$.ajax({
		type: "GET",
		url: `/api/hidden-food/${id}`,
		success: function (response) {
			const data = response.data;
			$("#name").html(data.name);
			$("#address").html(data.address);
			$("#detail_address").html(data.detail_address);
			$("#thumbnail").attr(
				"src",
				"https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/hidden-food-picture/thumbnail/" +
					data.thumbnail
			);

			position[0] = data.lat;
			position[1] = data.long;
			initMap();
		}
	});
}

$(function () {
	getDetailHiddenFood();
});
