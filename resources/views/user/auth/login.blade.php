<!DOCTYPE html>
<html lang="id">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Mentorku | Login</title>

		<link rel="stylesheet" href="{{ asset('dist/user/css/bootstrap.css') }}">
		<style>
			body {
				background-color: #F8F9FA
			}

		</style>
	</head>

	<body>
		<div class="container">
			<div class="card mt-5 w-25 mx-auto">
				<h5 class="card-header bg-primary text-center">Mentorku</h5>
				<div class="card-body">
					<form method="POST" action="{{ url('/login') }}">
						@csrf
						<div class="form-group mb-3">
							<label for="email" class="mb-2">{{ __('Email kamu') }}</label>
							<input type="text" class="form-control @error('email') is-invalid @enderror" id="email" name="email"
								placeholder="e.g name@example.com">
							@error('email')
								<small class="text-danger">{{ $message }}</small>
							@enderror
						</div>
						<div class="form-group">
							<label for="password" class="mb-2">{{ __('Password kamu') }}</label>
							<input type="password" class="form-control @error('password') is-invalid @enderror" id="password"
								name="password" placeholder="********">
							@error('password')
								<small class="text-danger">{{ $message }}</small>
							@enderror
						</div>

						<!-- Remember Me -->
						<div class="form-check mt-2">
							<input class="form-check-input" type="checkbox" value="true" id="remember_me" name="remember" checked>
							<label class="form-check-label" for="remember_me">
								{{ __('Ingat saya') }}
							</label>
						</div>

						<div class="d-grid gap-2 mt-4 mx-auto">
							<button type="submit" class="btn btn-primary btn-lg text-white py-2">Login</button>
						</div>

						<p class="mt-4 text-center">
							Belum mempunyai akun ?
							<a href="{{ url('/register') }}">Buat akun</a>
						</p>
					</form>
				</div>
			</div>
		</div>

		<script src="{{ asset('dist/user/js/bootstrap.js') }}"></script>
	</body>

</html>
