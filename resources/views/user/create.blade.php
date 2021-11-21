@extends('user.layouts.app')

@section('content')
	<div class="container">
		<form action="{{ url('/create') }}" method="POST" enctype="multipart/form-data" id="formUpload">
			@csrf
			<input class="mt-10"  type="file" name="image" id="image">
			<button type="submit" class="btn btn-primary">primary</button>
		</form>
	</div>
@endsection

@push('js')
	<script src="{{ asset('dist/user/js/app.js') }}"></script>
@endpush
