<!DOCTYPE html>
<html lang="id" data-theme="myTheme">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Mentorku | Register</title>

		<link rel="stylesheet" href="{{ asset("dist/user/css/tailwind.css") }}">

	</head>

	<body>
		<div class="mx-auto">
			<div class="card w-96 shadow-lg mx-auto mt-16">
				<div class="card-body border-3">
					<h2 class="card-title">Daftar</h2>
					<form method="POST" action="{{ url("/register") }}">
						@csrf
						<div class="form-control">
							<label for="email" class="label">
								<span class="label-text">{{ __("Email kamu") }}</span>
							</label>
							<input type="email" id="email" name="email" placeholder="e.g mymail@mail.com"
								class="input input-bordered @error("email") input-error @enderror"
								value="{{ old("email") }}">
							@error("email")
								<label class="label">
									<span class="label-text-alt text-danger">{{ $message }}</span>
								</label>
							@enderror
						</div>
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<div class="form-control">
								<label for="password" class="label">
									<span class="label-text">{{ __("Password kamu") }}</span>
								</label>
								<input type="password" id="password" name="password" placeholder="********"
									class="input input-bordered @error("password") input-error @enderror">
								@error("password")
									<label class="label">
										<span class="label-text-alt text-danger">{{ $message }}</span>
									</label>
								@enderror
							</div>
							<div class="form-control">
								<label for="password" class="label">
									<span class="label-text">{{ __("Konfirmasi password") }}</span>
								</label>
								<input type="password" id="password_confirmation" name="password_confirmation" placeholder="********"
									class="input input-bordered @error("password") input-error @enderror">
								@error("password")
									<label class="label">
										<span class="label-text-alt text-danger">{{ $message }}</span>
									</label>
								@enderror
							</div>
						</div>

						<select class="select select-bordered w-full @error("role") select-error @enderror max-w-xs mt-3" name="role">
							<option disabled="disabled" selected="selected">Pilih tipe akun</option>
							<option value="mentee">Mentee</option>
							<option value="mentor">Mentor</option>
						</select>
						@error("role")
							<label class="label">
								<span class="label-text-alt text-danger">{{ $message }}</span>
							</label>
						@enderror

						<div class="d-grid gap-2 mt-4 mx-auto">
							<button type="submit" class="btn btn-primary btn-block text-white py-2">Daftar</button>
						</div>

						<p class="mt-4 text-center">
							sudah mempunyai akun ?
							<a class="link link-primary" href="{{ url("/login") }}">Masuk</a>
						</p>
					</form>
				</div>
			</div>
		</div>
		{{-- <script src="{{ asset("dist/user/js/bootstrap.js") }}"></script>
		--}}
	</body>

</html>
