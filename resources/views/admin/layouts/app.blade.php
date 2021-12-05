<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>{{ env('APP_NAME') . ' | ' . $title }}</title>
	<link rel="stylesheet" href="{{ asset('dist/admin/css/styles.css') }}">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous">
	</script>
	@stack("css")
</head>

<body class="sb-nav-fixed">
	<div id="app">
		<div class="main-wrapper">
			@include('admin.layouts.navbar')

			@include('admin.layouts.sidebar')
			<!-- Main Content -->
			<div id="layoutSidenav_content">
				<main>
					@yield('content')
				</main>
				@include('admin.layouts.footer')
			</div>
		</div>
	</div>

	<script src="{{ asset('dist/admin/js/bootstrap.js') }}"></script>
	<script src="{{ asset('dist/library/jquery/jquery.js') }}"></script>
	<script src="{{ asset('dist/admin/js/scripts.js') }}"></script>
	@stack("js")
</body>

</html>
