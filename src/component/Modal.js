import React from 'react';

function Modal() {
	return (
		<div
			className="modal fade"
			id="forgotPass"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="forgotPassswordTitle"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
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
	);
}

export default Modal;
