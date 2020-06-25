import React, { useEffect } from 'react';

function Modal() {
	useEffect(() => {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add('right-panel-active');
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove('right-panel-active');
		});
	}, []);
	return (
		<>
			<div
				className="modal fade"
				id="forgotPass"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="forgotPassswordTitle"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-centered"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-body">
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span
									aria-hidden="true"
									className="font-weight-light"
								>
									&times;
								</span>
							</button>
							<h3>Forgot Password ?</h3>
							<form action="#">
								<p className="mb-3">
									We will email you a link to reset it.
								</p>
								<input type="email" placeholder="Email" />
								<input
									type="text"
									value=""
									pattern="[0-9]{1}[0-9]{9}"
									placeholder="Enter OTP"
									maxLength="4"
									className="d-none"
									onChange={() => console.log('A')}
								/>
								<a
									className="gradientText resendOTP font-weight-light d-none"
									href="javascript:void(0)"
								>
									Resend OTP
								</a>
								<input
									type="submit"
									value="submit"
									className="gradientBtn"
								/>
							</form>
							<form action="#" className="d-none">
								<p className="mb-3">Enter Your New Password</p>
								<input
									type="password"
									placeholder="Enter New Password"
								/>
								<input
									type="password"
									placeholder="Confirm New Password"
								/>
								<input
									type="submit"
									value="submit"
									className="gradientBtn"
								/>
							</form>
							<p className="font-weight-light">
								Just remembered ?
								<a
									className="gradientText"
									href="javascript:void(0)"
									data-target="#loginModalCenter"
									data-toggle="modal"
									data-dismiss="modal"
								>
									Log in
								</a>
								Instead
							</p>
							<p className="mb-0 font-weight-light">
								Don’t have an account ? Please
								<a
									className="gradientText"
									href="javascript:void(0)"
									data-target="#loginModalCenter"
									data-toggle="modal"
									data-dismiss="modal"
								>
									Sign up
								</a>
								for exciting offers
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="loginModalCenter"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="loginModalCenterTitle"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-centered"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-body" id="container">
							<div className="form-container sign-up-container">
								<form action="#">
									<h3>Create Account</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
									<input type="text" placeholder="Name" />
									<input type="email" placeholder="Email" />
									<input
										type="password"
										placeholder="Password"
									/>
									<input
										type="text"
										placeholder="Phone Number"
										pattern="[1-9]{1}[0-9]{9}"
										maxLength="10"
									/>

									<input
										type="submit"
										value="sign up"
										className="gradientBtn"
									/>
									<p className="login-info-text">- OR -</p>
									<a
										href="javascript:void(0)"
										className="gLogin"
									>
										<img
											src="/assets/images/icons/google.png"
											alt=""
										/>
										sign in using gmail
									</a>
								</form>
							</div>
							<div className="form-container sign-in-container">
								<form action="#">
									<h3>Sign in</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit.
									</p>
									<input type="email" placeholder="Email" />
									<input
										type="password"
										placeholder="Password"
									/>
									<a
										href="javascript:void(0)"
										data-target="#forgotPass"
										className="fogotPassword"
										data-toggle="modal"
										data-dismiss="modal"
									>
										Forgot your password?
									</a>

									<input
										type="submit"
										value="sign in"
										className="gradientBtn"
									/>
									<p className="login-info-text">- OR -</p>
									<a
										href="javascript:void(0)"
										className="gLogin"
									>
										<img
											src="/assets/images/icons/google.png"
											alt=""
										/>
										sign in using gmail
									</a>
								</form>
							</div>
							<div className="overlay-container">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
								<div className="overlay">
									<div className="overlay-panel overlay-left">
										<h3>Welcome Back!</h3>
										<p>
											To keep connected with us please
											login with your personal info
										</p>
										<a
											href="javascript:void(0)"
											className="ghost gradientBtn"
											id="signIn"
										>
											Sign In
										</a>
									</div>
									<div className="overlay-panel overlay-right">
										<h3>Hello, Friend!</h3>
										<p>
											Enter your personal details and
											start journey with us
										</p>
										<a
											href="javascript:void(0)"
											className="ghost gradientBtn"
											id="signUp"
										>
											Sign Up
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
