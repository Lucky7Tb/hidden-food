<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
		<title>Admin | Login</title>
		<link rel="stylesheet" href="{{ asset('dist/admin/css/styles.css') }}">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous">
		</script>
	</head>

	<body class="bg-primary">
		<div id="layoutAuthentication">
			<div id="layoutAuthentication_content">
				<main>
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-5">
								<div class="card shadow-lg border-0 rounded-lg mt-5">
									<div class="card-header">
										<h3 class="text-center font-weight-light my-4">Login</h3>
									</div>
									<div class="card-body">
										<form method="POST" action="{{ url('/login') }}">
											@csrf
											<div class="form-floating mb-3">
												<input class="form-control @error('email') is-invalid @enderror" id="inputEmail" type="email" placeholder="name@example.com" name="email" value="{{ old('email') }}" required/>
												<label for="inputEmail">Email</label>
												@error('email')
													<small class="text-danger">{{ $message }}</small>
												@enderror
											</div>
											<div class="form-floating mb-3">
												<input class="form-control @error('password') is-invalid @enderror" id="inputPassword" type="password" placeholder="Password" name="password" required/>
												<label for="inputPassword">Password</label>
												@error('password')
													<small class="text-danger">{{ $message }}</small>
												@enderror
											</div>
											<div class="form-check mb-3">
												<input class="form-check-input" id="inputRememberPassword" type="checkbox" value="true" name="remember" checked/>
												<label class="form-check-label" for="inputRememberPassword">Remember Password</label>
											</div>
											<div class="d-grid gap-1 mt-4 mb-0">
												<button type="submit" class="btn btn-primary rounded">Login</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
			<div id="layoutAuthentication_footer">
				<footer class="py-4 bg-light mt-auto">
					<div class="container-fluid px-4">
						<div class="d-flex align-items-center justify-content-between small">
							<div class="text-muted">Copyright &copy; Your Website 2021</div>
							<div>
								<a href="#">Privacy Policy</a>
								&middot;
								<a href="#">Terms &amp; Conditions</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous">
		</script>
		<script src="js/scripts.js"></script>
	</body>

</html>
