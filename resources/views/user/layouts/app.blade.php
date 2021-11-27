<!doctype html>
<html lang="id">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		<title>{{ isset($title) ? $title : env("APP_NAME") }}</title>
		<link rel="stylesheet" href="{{ asset('dist/user/css/tailwind.css') }}">
		@stack("css")
	</head>

	<body>

		@include('user.layouts.navbar')

		<main>
			@yield("content")
		</main>

		<script src="{{ asset('dist/library/jquery/jquery.js') }}"></script>
		@stack("js")
	</body>

</html>
