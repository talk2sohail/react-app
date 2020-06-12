import React from 'react';
import { footerData } from '../../data/HomeData';
import ImageUtil from '../util/ImageUtil';
function Footer() {
	return (
		<footer>
			<div class="sectionWrapper">
				<div class="footerWrapper d-flex flex-wrap justify-content-center">
					<div class="footerComponent about">
						<a href="javascript:void(0)" class="logo">
							<img
								src="assets/images/logo.png"
								width="100"
								alt=""
							/>
						</a>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Dolorum voluptatem soluta asperiores, modi
							unde, voluptatum cupiditate reiciendis illum minima
							soluta asperiores, modi
						</p>
					</div>
					<div class="footerComponent">
						<h3>Company</h3>
						<ul>
							<li>
								<a href="about.html">About Us</a>
							</li>
							<li>
								<a href="javascript:void(0)">Blog</a>
							</li>
							<li>
								<a href="javascript:void(0)">Collaborate</a>
							</li>
						</ul>
					</div>
					<div class="footerComponent">
						<h3>Help & Support</h3>
						<ul>
							<li>
								<a href="javascript:void(0)">Feedback</a>
							</li>
							<li>
								<a href="faq.html">FAQ</a>
							</li>
							<li>
								<a href="javascript:void(0)">Sitemap</a>
							</li>
						</ul>
					</div>
					<div class="footerComponent">
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
			<div class="absolutefooter">
				<div class="sectionWrapper">
					<div class="row">
						<div class="col-12 col-lg-6">
							<p class="mb-0">
								Copyright © 2020 MDDS. All Rights Reserved.
							</p>
						</div>
						<div class="col-12 col-lg-6">
							<div class="socialIconsWrapper d-flex flex-wrap justify-content-end">
								{footerData.map(item => (
									<a
										href="javascript:void(0)"
										class="d-block socialIcons"
									>
										<ImageUtil
											key={item.key}
											src={`assets/images/icons/${item.img}`}
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
