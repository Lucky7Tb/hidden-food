<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Mentorku | Login</title>
	<link rel="stylesheet" href="{{ asset('dist/user/css/bootstrap.min.css') }}">
</head>
<body>

	<div class="container">
		<div class="card">
			<div class="card-header">
				Login
			</div>
			<div class="card-body">
				<form method="POST">
					@csrf
					@method('post')
					<h1 class="h3 mb-3 fw-normal">Please Login</h1>
					@error('error-login')
						<div class="alert alert-danger" role="alert">
							{{ $message }}
						</div>
					@enderror
					<div class="form-group form mb-2">
						<label for="email">Your email</label>
						<input type="email" name="email" class="form-control @error('email') is-invalid @enderror" id="email" placeholder="name@example.com">
						@error('email')
							<small class="text-danger">{{ $message }}</small>
						@enderror
					</div>
					<div class="form-group mb-2">
						<label for="password">Your password</label>
						<input type="password" name="password" class="form-control @error('password') is-invalid @enderror" id="password" placeholder="Password">
						@error('password')
							<small class="text-danger">{{ $message }}</small>
						@enderror
					</div>
					<button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
				</form>
			</div>
		</div>
	</div>


	<script src="{{ asset('dist/user/js/bootstrap.min.css') }}"></script>
</body>
</html>
