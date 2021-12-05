@extends('admin.layouts.app', [
'title' => 'Dashboard | Edit'
])

@push('css')
	<link rel="stylesheet" href="{{ asset('dist/library/leaflet/leaflet.css') }}" />
	<link rel="stylesheet" href="{{ asset('dist/library/toasr/toastr.min.css') }}">
	<script src="{{ asset('dist/library/leaflet/leaflet.js') }}"></script>
@endpush

@section('content')
<div class="container-fluid px-4">
	<h1 class="mt-4">Edit</h1>
	<ol class="breadcrumb mb-4">
	  <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Dashboard</a></li>
    <li class="breadcrumb-item active" aria-current="page">Edit</li>
	</ol>

	<div class="d-flex justify-content-between">
		<div></div>
		<div>
			<button type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" class="btn btn-outline-danger rounded-circle">
				<i class="fas fa-trash"></i>
			</button>
		</div>
	</div>

	<div class="container">
		<form id="hidden-food-form">
			<div class="row">
				<div class="col-12">
					<img id="thumbnail" class="img-fluid d-block mx-auto" alt="Hidden-Food">
				</div>
				<div class="col-12 mb-2">
					<div class="form-group">
						<label for="name">Nama tempat makan</label>
						<input type="text" name="name" id="name" class="form-control">
					</div>
				</div>
				<div class="col-12 mb-2">
					<div class="row">
						<div class="col-6">
							<div class="form-group">
								<label for="address">Alamat tempat makan</label>
								<textarea name="address" id="address" class="form-control" placeholder="Jl. Peta no 1"></textarea>
							</div>
						</div>
						<div class="col-6">
							<div class="form-group">
								<label for="detail_address">Detail alamat tempat makan</label>
								<textarea name="detail_address" id="detail_address" class="form-control" placeholder="Jl. Peta no 1"></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 mb-2">
					<div class="form-group">
						<label for="name">Status tempat makan</label>
						<select name="status" id="status" class="form-select">
							<option value="NOT_ACTIVE">Tidak aktif</option>
							<option value="ACTIVE">Aktif</option>
						</select>
					</div>
				</div>
				<div class="col-12 mb-3">
					<label>Lokasi tempat makannya</label>
					<div id="map" style="height: 250px; width: 100%"></div>
				</div>
				<div class="col-12 mb-5">
					<div class="d-grid gap-2">
						<button type="submit" class="btn btn-lg btn-primary">Simpan</button>
					</div>
				</div>
			</div>
		</form>
	</div>

	<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="deleteModalLabel">Peringatan !</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p class="lead">Yakin ingin menghapus tempat makan ini?</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
					<button type="button" id="btn-delete" class="btn btn-danger">Hapus</button>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection


@push("js")
	<script src="{{ asset('dist/library/toasr/toastr.min.js') }}"></script>
	<script src="{{ asset("dist/admin/js/edit.js") }}"></script>
@endpush
