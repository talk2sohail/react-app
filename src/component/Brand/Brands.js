import React, { useState } from 'react';
import { brandsData } from '../../data/HomeData';
function Brands() {
	const [brands, setBrands] = useState(brandsData);
	return (
		<section className="brandsWrapper">
			<div className="sectionWrapper">
				<div className="row align-items-center justify-content-between">
					<div className="col-12">
						<div className="title">
							<h2 className="text-center">Brands</h2>
							<p className="m-auto text-center">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eligendi placeat eos enim
								quibusdam illo dignissimos vel
							</p>
						</div>
					</div>
					<div className="col-12">
						<div className="brandsList">
							<ul>
								{brands.map(item => (
									<li key={item.key}>
										<img
											src={`assets/images/brandLogos/${item.img}`}
											alt={item.brandName}
										/>
									</li>
								))}
							</ul>
							<a
								href="javascript:void(0)"
								className="theme-btn theme-btn-green text-uppercase"
							>
								brands we repair
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Brands;
