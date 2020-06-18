import React from 'react';
import { Link } from 'react-router-dom';
function ThankYou() {
	return (
		<section className="profileWrapper">
			<div className="sectionWrapper">
				<div className="row">
					<div className="col-12">
						<div className="thankuWrapper">
							<img
								src="assets/images/icons/completed.svg"
								className="img-fluid"
								alt=""
							/>
							<p>
								Thank You! For Completing Your Repair
								Appointment With Us
							</p>
							<div className="buttons">
								<Link to="###">Track Status</Link>
								<Link to="/">Go Back to Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ThankYou;
