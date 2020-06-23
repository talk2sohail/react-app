import React, { useEffect, useState } from 'react';
import { bannerData } from '../data/HomeData';
function Banner() {
	const [banner, setBanner] = useState(bannerData);
	useEffect(() => {
		window.$('.bannerSingle').slick({
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2500,
		});
	}, []);
	return (
		<section className="bannerWrapper">
			<div className="bannerSingle">
				{banner.map(item => (
					<div className="bannerItem" key={item.key}>
						<img src={`assets/images/banner/${item.img}`} alt="" />
					</div>
				))}
			</div>
		</section>
	);
}

export default Banner;
