<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
		<title>{{ env('APP_NAME') . ' | ' . $title }}</title>
		<link rel="stylesheet" href="{{ asset('dist/admin/css/styles.css') }}">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous">
			< link href = "https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
			rel = "stylesheet" / >

		</script>
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

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous">
		</script>
		<script src="{{ asset('dist/admin/js/scripts.js') }}"></script>
	</body>

</html>
