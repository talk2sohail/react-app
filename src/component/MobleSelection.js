import React, { useState, useEffect, Fragment } from 'react';
import { mobileData } from '../data/RepairData';
import ImageUtil from './util/ImageUtil';
function MobleSelection({ onClickMobileHandler }) {
	const [mobiles, setMobiles] = useState(mobileData);
	return (
		<Fragment>
			{mobiles.map(item => (
				<div
					className="col-6 col-md-4 col-lg-2"
					key={item.key}
					onClick={onClickMobileHandler}
				>
					<div className="branWrap">
						<div className="imgWrapBrand">
							<ImageUtil
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
		</Fragment>
	);
}

export default MobleSelection;
