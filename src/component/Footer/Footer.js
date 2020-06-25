import React from 'react';
import { footerData } from '../../data/HomeData';
import { Link } from 'react-router-dom';
function Footer() {
	return (
		<footer>
			<div className="sectionWrapper">
				<div className="footerWrapper d-flex flex-wrap justify-content-center">
					<div className="footerComponent about">
						<Link to="/" className="logo">
							<img
								src="/assets/images/logo.png"
								width="100"
								alt=""
							/>
						</Link>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Dolorum voluptatem soluta asperiores, modi
							unde, voluptatum cupiditate reiciendis illum minima
							soluta asperiores, modi
						</p>
					</div>
					<div className="footerComponent">
						<h3>Company</h3>
						<ul>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li>
								<a href="javascript:void(0)">Blog</a>
							</li>
							<li>
								<a href="javascript:void(0)">Collaborate</a>
							</li>
						</ul>
					</div>
					<div className="footerComponent">
						<h3>Help & Support</h3>
						<ul>
							<li>
								<a href="javascript:void(0)">Feedback</a>
							</li>
							<li>
								<Link to="/faq">FAQ</Link>
							</li>
							<li>
								<a href="javascript:void(0)">Sitemap</a>
							</li>
						</ul>
					</div>
					<div className="footerComponent">
						<h3>Policies</h3>
						<ul>
							<li>
								<a href="privacypolicy.html">Privacy Policy</a>
							</li>
							<li>
								<a href="javascript:void(0)">
									Terms & Conditions
								</a>
							</li>
							<li>
								<a href="javascript:void(0)">Warranty Policy</a>
							</li>
							<li>
								<a href="javascript:void(0)">Terms of Use</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="absolutefooter">
				<div className="sectionWrapper">
					<div className="row">
						<div className="col-12 col-lg-6">
							<p className="mb-0">
								Copyright © 2020 MDDS. All Rights Reserved.
							</p>
						</div>
						<div className="col-12 col-lg-6">
							<div className="socialIconsWrapper d-flex flex-wrap justify-content-end">
								{footerData.map(item => (
									<a
										href="javascript:void(0)"
										className="d-block socialIcons"
										key={item.key}
									>
										<img
											src={`/assets/images/icons/${item.img}`}
											width="16"
										/>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
