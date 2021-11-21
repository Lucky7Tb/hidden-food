<!doctype html>
<html lang="id">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" href="{{ asset('dist/user/css/tailwind.css') }}">

		<title>{{ isset($title) ? $title : env("APP_NAME") }}</title>
		<link rel="stylesheet" href="{{ asset('dist/user/css/tailwind.css') }}">
		<link rel="stylesheet" href="{{ asset('dist/user/css/leaflet.css') }}" />
		<script src="{{ asset('dist/user/js/leaflet.js') }}"></script>
		@stack("css")
	</head>

	<body>

		@include('user.layouts.navbar')

		<main>
			@yield("content")
		</main>

		@stack("js")
	</body>

</html>
