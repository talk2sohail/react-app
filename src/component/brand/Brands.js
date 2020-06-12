import React, { useState } from 'react';
import { brandsData } from '../../data/HomeData';
import ImageUtil from '../../component/util/ImageUtil';
function Brands() {
	const [brands, setBrands] = useState(brandsData);
	return (
		<section class="brandsWrapper">
			<div class="sectionWrapper">
				<div class="row align-items-center justify-content-between">
					<div class="col-12">
						<div class="title">
							<h2 class="text-center">Brands</h2>
							<p class="m-auto text-center">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Eligendi placeat eos enim
								quibusdam illo dignissimos vel
							</p>
						</div>
					</div>
					<div class="col-12">
						<div class="brandsList">
							<ul>
								{brands.map(item => (
									<li>
										<ImageUtil
											key={item.key}
											src={`assets/images/brandLogos/${item.img}`}
											alt={item.brandName}
										/>
									</li>
								))}
							</ul>
							<a
								href="javascript:void(0)"
								class="theme-btn theme-btn-green text-uppercase"
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
