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
										<form>
											<div class="form-floating mb-3">
												<input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
												<label for="inputEmail">Email</label>
											</div>
											<div class="form-floating mb-3">
												<input class="form-control" id="inputPassword" type="password" placeholder="Password" />
												<label for="inputPassword">Password</label>
											</div>
											<div class="form-check mb-3">
												<input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
												<label class="form-check-label" for="inputRememberPassword">Remember Password</label>
											</div>
											<div class="d-grid gap-1 mt-4 mb-0">
												<a class="btn btn-primary rounded" href="index.html">Login</a>
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
