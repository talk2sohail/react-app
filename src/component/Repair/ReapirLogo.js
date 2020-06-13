import React, { useState } from 'react';
import { logoData } from '../../data/RepairData';
import ImageUtil from '../util/ImageUtil';
function ReapirLogo() {
	const [logos, setLogos] = useState(logoData);
	return (
		<section className="customerLogosWrapper">
			<div className="sectionWrapper">
				<div className="d-flex justify-content-around wrapper">
					{logos.map(item => (
						<div className="customerLogo" key={item.key}>
							<ImageUtil
								alt=""
								src={`assets/images/brandLogos/repair/${item.img}`}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ReapirLogo;
