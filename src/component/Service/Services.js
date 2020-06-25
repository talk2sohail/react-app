import React, { useState, useEffect } from 'react';
import ServiceHead from './ServiceHead';
import $ from 'jquery';
import Service from './Service';
import { repairData } from '../../data/HomeData';
function Services() {
	const [service, setService] = useState(repairData);
	useEffect(() => {
		window.$('.services').slick({
			dots: false,
			infinite: false,
			nav: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			variableWidth: true,
			prevArrow: $('.prevAchieve'),
			nextArrow: $('.nextAchieve'),
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						infinite: true,
						variableWidth: false,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			],
		});
	}, []);
	return (
		<section className="typesOfrepair">
			<div className="sectionWrapper">
				<ServiceHead />
				<div className="services">
					{service.map(item => (
						<Service key={item.key} item={item} />
					))}
				</div>
				<div className="navWrapAchieve d-flex align-items-center justify-content-end">
					<div className="prevAchieve slick-prev d-flex slick-slide">
						<span>
							<img
								src="/assets/images/icons/backward.png"
								alt=""
							/>
						</span>
					</div>
					<div className="nextAchieve slick-next d-flex text-right slick-slide">
						<span>
							<img
								src="/assets/images/icons/forward.png"
								alt=""
							/>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
