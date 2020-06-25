import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function TopBar() {
	useEffect(() => {
		(function () {
			var words = [
					'contact us today for repairing your phone',
					"apply coupon <span>'newuser'</span> for getting special discount",
				],
				i = 0;
			setInterval(function () {
				window.$('#changingword').fadeOut(function () {
					window
						.$(this)
						.html(words[(i = (i + 1) % words.length)])
						.fadeIn();
				});
			}, 4000);
		})();
	}, []);
	return (
		<div className="topBarWrapper">
			<div className="sectionWrapper">
				<div className="row no-gutters justify-content-center align-items-center">
					<div className="col-4 mr-auto d-none d-lg-block text-left">
						<div className="topBarMenu">
							<div className="menuItem">
								<Link to="/profile">mail@mdds.com</Link>
							</div>
							<div className="menuItem">
								<Link to="/profile">7980538443</Link>
							</div>
						</div>
					</div>
					<h2 className="text-uppercase" id="changingword">
						Get your phone picked up from your home for repair
					</h2>
					<div className="col-4 ml-auto d-none d-lg-block text-right">
						<div className="topBarMenu">
							<div className="menuItem">
								<Link to="/collaborate">Collaborate</Link>
							</div>
							<div className="menuItem">
								<Link to="/blog">Blog</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
