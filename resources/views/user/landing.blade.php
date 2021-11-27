@extends('user.layouts.app')

@push('css')
	<link rel="stylesheet" href="{{ asset('dist/library/leaflet/leaflet.css') }}" />
	<script src="{{ asset('dist/library/leaflet/leaflet.js') }}"></script>
@endpush

@section('content')
	<div id="map" class="h-screen">
		<div class="absolute w-full grid place-items-center" style="z-index: 401">
			<button type="buttons" class="btn btn-success left-1/2 right-1/2" id="btn-search-hidden-food">Cari sekitar sini</button>
		</div>
	</div>
@endsection

@push('js')
	<script src="{{ asset('dist/library/leaflet/leaflet-geo-plugin.js') }}"></script>
	<script src="{{ asset('dist/user/js/app.js') }}"></script>
@endpush
