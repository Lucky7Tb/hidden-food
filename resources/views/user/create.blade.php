@extends('user.layouts.app')

@push('css')
	<link rel="stylesheet" href="{{ asset('dist/library/dropify/css/dropify.css') }}">
	<link rel="stylesheet" href="{{ asset('dist/library/leaflet/leaflet.css') }}" />
	<link rel="stylesheet" href="{{ asset('dist/library/toasr/toastr.min.css') }}">
	<script src="{{ asset('dist/library/leaflet/leaflet.js') }}"></script>
@endpush

@section('content')
<div class="px-10 sm:px-52">
	<form method="POST" id="form-recomendation">
		<div class="flex flex-col w-full space-y-1.5">
			<div class="flex form-control w-full">
				<label class="label" for="name">
					<span class="label-text">Nama tempat makan</span>
				</label>
				<input type="text" name="name" id="name" placeholder="warung nasi sejahtera" class="input input-bordered">
			</div>
			<div class="flex-auto form-control">
				<label class="label" for="address">
					<span class="label-text">Alamat tempat makan</span>
				</label>
				<textarea name="address" id="address" class="input input-bordered" placeholder="Jl. Peta no 1"></textarea>
			</div>
			<div class="flex-auto form-control">
				<label class="label" for="detail_address">
					<span class="label-text">Patokan tempat makan</span>
				</label>
				<textarea name="detail_address" id="detail_address" class="input input-bordered"
					placeholder="Di depan patokan"></textarea>
			</div>
			<div class="flex-auto form-control">
				<label class="label" for="thumbnail">
					<span class="label-text">Foto tempat makan</span>
				</label>
				<input type="file" id="thumbnail" name="thumbnail" class="dropify" data-max-file-size="1M" data-allowed-file-extensions="png jpg jpeg" />
			</div>
			<div class="h-52 mt-5">
				<label>Dimana lokasi tempat makannya</label>
				<div id="map" class="h-full mt-5"></div>
			</div>
			<div>
				<button type="submit" class="btn btn-primary w-full rounded-full mt-20 mb-20">Submit</button>
			</div>
		</div>
	</form>
</div>
@endsection

@push('js')
	<script src="{{ asset('dist/library/leaflet/leaflet-geo-plugin.js') }}"></script>
	<script src="{{ asset('dist/library/dropify/js/dropify.js') }}"></script>
	<script src="{{ asset('dist/library/toasr/toastr.min.js') }}"></script>
	<script src="{{ asset('dist/user/js/create.js') }}"></script>
@endpush
