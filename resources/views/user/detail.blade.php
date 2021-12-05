@extends('user.layouts.app')

@push('css')
	<link rel="stylesheet" href="{{ asset('dist/library/leaflet/leaflet.css') }}" />
	<link rel="stylesheet" href="{{ asset('dist/library/toasr/toastr.min.css') }}">
	<script src="{{ asset('dist/library/leaflet/leaflet.js') }}"></script>
@endpush

@section('content')
<div class="px-52">
	<section class="mt-10 hero container mx-auto pb-10">
		<img id="thumbnail" class="block mx-auto">
	</section>
	<div class="overflow-x-auto w-full">
		<table class="table w-full">
			<thead>
				<tr>
					<th></th>
					<th>Detail</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Nama tempat makan</th>
					<td id="name"></td>
				</tr>
				<tr>
					<th>Alamat tempat makan</th>
					<td id="address"></td>
				</tr>
				<tr>
					<th>Patokan tempat makan</th>
					<td id="detail_address"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div id="map" class="mt-10 mb-10" style="height: 250px; width: 100%"></div>
</div>
@endsection

@push('js')
	<script src="{{ asset('dist/library/toasr/toastr.min.js') }}"></script>
	<script src="{{ asset('dist/user/js/detail.js') }}"></script>
@endpush
