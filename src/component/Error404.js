import React from 'react';
import { Link } from 'react-router-dom';
function Error404() {
	return (
		<section className="profileWrapper">
			<div className="sectionWrapper">
				<div className="row">
					<div className="col-12">
						<div className="errorWrapper">
							<img
								src="/assets/images/icons/not_found.svg"
								className="img-fluid"
								alt=""
							/>
							<p>OOPS! Something went wrong</p>
							<Link to="/" className="siteBtn mx-auto">
								Go Back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Error404;
