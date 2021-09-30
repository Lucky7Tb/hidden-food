<!DOCTYPE html>
<html lang="id">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Mentorku | Register</title>

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
					<form method="POST" action="{{ url('/register') }}">
						@csrf
						<div class="form-group mb-2">
							<label for="email" class="mb-2">{{ __('Email kamu') }}</label>
							<input
								type="text"
								class="form-control @error('email') is-invalid @enderror"
								id="email"
								name="email"
								placeholder="e.g name@example.com"
								value="{{ old('email') }}"
							>
							@error('email')
								<small class="text-danger">{{ $message }}</small>
							@enderror
						</div>
						<div class="form-group mb-2">
							<label for="password" class="mb-2">{{ __('Password kamu') }}</label>
							<input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" placeholder="********">
							@error('password')
								<small class="text-danger">{{ $message }}</small>
							@enderror
						</div>
						<div class="form-group mb-2">
							<label for="password_confirmation" class="mb-2">{{ __('Konfirmasi password kmu') }}</label>
							<input type="password" class="form-control @error('password') is-invalid @enderror" id="password_confirmation" name="password_confirmation" placeholder="********">
							@error('password')
								<small class="text-danger">{{ $message }}</small>
							@enderror
						</div>
						<div class="form-group mb-2">
							<label for="role mb-2">Mau jadi apa?</label>
							<select
								class="form-select @error('role') is-invalid @enderror"
								size="2"
								name="role"
								value={{ old('role') }}
							>
								<option value="mentor">Mentor</option>
								<option value="mentee">Mentee</option>
							</select>
							@error('role')
								<small class="text-danger">{{ $message }}</small>
							@enderror
						</div>
						<div class="d-grid gap-2 mx-auto">
							<button type="submit" class="btn btn-primary btn-lg text-white py-2">
								Login
							</button>
						</div>

						<p class="mt-4 text-center">
							Sudah punya akun ?
							<a href="{{ url('/login') }}">Login disini</a>
						</p>
					</form>
				</div>
			</div>
		</div>

		<script src="{{ asset('dist/user/js/bootstrap.js') }}"></script>
	</body>

</html>
