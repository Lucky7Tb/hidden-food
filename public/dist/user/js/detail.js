/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./resources/js/user/detail.js ***!
  \*************************************/
var myMap;
var position = [-6.919254047160112, 107.61101714037947];

function initMap() {
  myMap = L.map("map", {
    scrollWheelZoom: false
  }).setView(position, 16);
  mapSearchMarker = L.marker(position, {
    alt: "Marker"
  }).addTo(myMap);
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" + "pk.eyJ1IjoibHVja3k3dGIiLCJhIjoiY2t3Nm9ndm9iMnk2djJ2bXF1cHp2ZzNjZSJ9.-aUNxpC8cNi67yA53K0V8g", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoibHVja3k3dGIiLCJhIjoiY2t3Nm9ndm9iMnk2djJ2bXF1cHp2ZzNjZSJ9.-aUNxpC8cNi67yA53K0V8g"
  }).addTo(myMap);
}

function getDetailHiddenFood() {
  var url = window.location.href.split("/");
  var id = url[url.length - 1];
  $.ajax({
    type: "GET",
    url: "/api/hidden-food/".concat(id),
    success: function success(response) {
      var data = response.data;
      $("#name").html(data.name);
      $("#address").html(data.address);
      $("#detail_address").html(data.detail_address);
      $("#thumbnail").attr("src", "https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/hidden-food-picture/thumbnail/" + data.thumbnail);
      position[0] = data.lat;
      position[1] = data["long"];
      initMap();
    }
  });
}

$(function () {
  getDetailHiddenFood();
});
/******/ })()
;