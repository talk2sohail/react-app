import React, { useEffect, useState } from 'react';
import ImageUtil from '../util/ImageUtil';
import { brandsData } from '../../data/RepairData';
function BrandsSelection({ onClickBrandHandler }) {
	const [repairBrands, setRepairBrands] = useState(brandsData);

	return brandsData.map(item => (
		<div
			key={item.key}
			className="col-6 col-md-4 col-lg-2"
			onClick={onClickBrandHandler}
		>
			<div className="branWrap">
				<div className="imgWrapBrand">
					<ImageUtil
						src={`assets/images/brandLogos/${item.img}`}
						className="d-block text-center mx-auto"
						alt=""
					/>
				</div>
				<h3 className="text-center uppercase">{item.name}</h3>
			</div>
		</div>
	));
}

export default BrandsSelection;
