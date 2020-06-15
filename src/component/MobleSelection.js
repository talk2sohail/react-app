import React, { useState, useEffect } from 'react';
import { mobileData } from '../data/RepairData';
function MobleSelection({ onClickMobileHandler }) {
	const [mobiles, setMobiles] = useState(mobileData);
	useEffect(() => {
		window.scrollTo(0, 500);
	});
	return (
		<div className="row no-gutters justify-content-start align-items-center selectOption mobileSelect">
			{mobiles.map(item => (
				<div
					className="col-6 col-md-4 col-lg-2"
					key={item.key}
					onClick={() => {
						onClickMobileHandler(item.mobileName);
					}}
				>
					<div className="branWrap">
						<div className="imgWrapBrand">
							<img
								src={`assets/images/mobiles/oneplus/${item.img}`}
								className="d-block text-center mx-auto"
								alt=""
							/>
						</div>
						<h3 className="text-center uppercase">
							{item.mobileName}
						</h3>
					</div>
				</div>
			))}
		</div>
	);
}

export default MobleSelection;
