@extends('user.layouts.app')

@section('content')
	<x-leaflet></x-leaflet>
@endsection

@push('js')
	<script>
		const mymap = L.map("map").setView([51.505, -0.09], 13);

		L.tileLayer(
			"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=" +
				"{{ env('LEAFTLET_ACCESS_TOKEN') }}",
			{
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: "mapbox/streets-v11",
				tileSize: 512,
				zoomOffset: -1,
				accessToken: "{{ env('LEAFTLET_ACCESS_TOKEN') }}",
			}
		).addTo(mymap);
	</script>
@endpush
