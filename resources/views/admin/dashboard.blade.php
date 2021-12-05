@extends('admin.layouts.app', [
'title' => 'Dashboard | Home'
])

@push("css")
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs5/dt-1.11.3/datatables.min.css" />
@endpush

@section('content')
<div class="container-fluid px-4">
	<h1 class="mt-4">Dashboard</h1>
	<ol class="breadcrumb mb-4">
		<li class="breadcrumb-item active">Dashboard</li>
	</ol>
	<div class="row">
		<div class="col-xl-3 col-md-6">
			<div class="card bg-primary text-white mb-4">
				<div class="card-body">Primary Card</div>
				<div class="card-footer d-flex align-items-center justify-content-between">
					<a class="small text-white stretched-link" href="#">View Details</a>
					<div class="small text-white"><i class="fas fa-angle-right"></i></div>
				</div>
			</div>
		</div>
	</div>

	<div class="card mb-4">
		<div class="card-header">
			<i class="fas fa-table me-1"></i>
			List hidden food
		</div>
		<div class="card-body table-responsive">
			<table id="hidden-food-table" class="table text-center">
				<thead>
					<tr>
						<th rowspan="2">Thumbnail</th>
						<th rowspan="2">Nama</th>
						<th rowspan="2">Alamat</th>
						<th rowspan="2">Status</th>
						<th>Aksi</th>
					</tr>
					<tr>
						<th>Detail</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
	</div>
</div>
@endsection


@push("js")
<script type="text/javascript" src="https://cdn.datatables.net/v/bs5/dt-1.11.3/datatables.min.js"></script>
<script src="{{ asset('dist/admin/js/app.js') }}"></script>
@endpush
