<!DOCTYPE html>
<html lang="id">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>{{ env('APP_NAME') }}</title>

		<!-- Fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="{{ asset('dist/user/css/bootstrap.css') }}">
	</head>

	<body class="antialiased">
		<nav class="navbar navbar-expand-lg navbar-light bg-primary">
			<div class="container">
				<a class="navbar-brand" href="#">Mentorku</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="{{ url('/login') }}">Login</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<h1 class="text-center">Hallo selamat datang</h1>
	</body>

</html>
