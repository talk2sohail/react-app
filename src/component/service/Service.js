import React from 'react';
import { Link } from 'react-router-dom';
import ImageUtil from '../../component/util/ImageUtil';
import Tilt from 'react-tilt';
function Service({ item }) {
	const { img, repairName } = item;
	return (
		<Tilt
			className="Tilt"
			options={{ max: 35, scale: 1, reverse: true }}
			style={{ height: 400, width: 250 }}
		>
			<Link to="javascript:void(0)" className="text-center">
				<img
					key={item.key}
					src={`assets/images/background/${img}`}
					alt=""
				/>
				<div className="content">
					<h2 className="text-center">{repairName}</h2>
				</div>
			</Link>
		</Tilt>
	);
}

export default Service;
