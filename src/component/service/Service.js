import React from 'react';
import { Link } from 'react-router-dom';
import ImageUtil from '../../component/util/ImageUtil';
function Service({ item }) {
	const { img, repairName } = item;
	return (
		<Link
			data-tilt
			data-tilt-reverse="true"
			to="javascript:void(0)"
			className="text-center"
		>
			<ImageUtil
				key={item.key}
				src={`assets/images/background/${img}`}
				alt=""
			/>
			<div className="content">
				<h2 className="text-center">{repairName}</h2>
			</div>
		</Link>
	);
}

export default Service;
