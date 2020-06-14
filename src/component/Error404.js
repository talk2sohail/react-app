import React from 'react';
import { Link } from 'react-router-dom';
function Error404() {
	return (
		<section class="profileWrapper">
			<div class="sectionWrapper">
				<div class="row">
					<div class="col-12">
						<div class="errorWrapper">
							<img
								src="assets/images/icons/not_found.svg"
								class="img-fluid"
								alt=""
							/>
							<p>OOPS! Something went wrong</p>
							<Link to="/" class="siteBtn mx-auto">
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
