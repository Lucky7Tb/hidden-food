<!DOCTYPE html>
<html lang="id" data-theme="myTheme">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Mentorku | Login</title>

		<link rel="stylesheet" href="{{ asset("dist/user/css/tailwind.css") }}">
	</head>

	<body>
		<div class="mx-auto">
			<div class="card w-96 shadow-lg mx-auto mt-16">
				<div class="card-body border-3">
					<h2 class="card-title">Masuk</h2>
					<form method="POST" action="{{ url("/login") }}">
						@csrf
						<div class="form-control">
							<label for="email" class="label">
								<span class="label-text">{{ __("Email kamu") }}</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="e.g mymail@mail.com"
								class="input input-bordered @error("email") input-error @enderror"
								value="{{ old("email") }}"
							>
							@error("email")
								<label class="label">
									<span class="label-text-alt text-red-500">{{ $message }}</span>
								</label>
							@enderror
						</div>
						<div class="form-control">
							<label for="password" class="label">
								<span class="label-text">{{ __("Password kamu") }}</span>
							</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="********"
								class="input input-bordered @error("password") input-error @enderror"
							>
							@error("password")
								<label class="label">
									<span class="label-text-alt text-red-500">{{ $message }}</span>
								</label>
							@enderror
						</div>

						<!-- Remember Me -->
						<div class="form-control">
							<label class="cursor-pointer label">
								<span class="label-text">{{ __("Ingat saya") }}</span>
								<input class="checkbox" type="checkbox" value="true" id="remember_me" name="remember" checked>
							</label>
						</div>

						<div class="d-grid gap-2 mt-4 mx-auto">
							<button type="submit" class="btn btn-primary btn-block text-white py-2">Login</button>
						</div>

						<p class="mt-4 text-center">
							Belum mempunyai akun ?
							<a class="link link-primary" href="{{ url("/register") }}">Buat akun</a>
						</p>
					</form>
				</div>
			</div>
		</div>

		{{-- <script src="{{ asset("dist/user/js/bootstrap.js") }}"></script> --}}
	</body>

</html>
