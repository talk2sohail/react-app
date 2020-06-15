import React, { useEffect, useState } from 'react';
import { brandsData } from '../../data/RepairData';
function BrandsSelection({ onClickBrandHandler }) {
	const [repairBrands, setRepairBrands] = useState(brandsData);

	return (
		<div className="row no-gutters justify-content-start align-items-center selectOption">
			{brandsData.map(item => (
				<div
					key={item.key}
					className="col-6 col-md-4 col-lg-2"
					onClick={onClickBrandHandler}
				>
					<div className="branWrap">
						<div className="imgWrapBrand">
							<img
								src={`assets/images/brandLogos/${item.img}`}
								className="d-block text-center mx-auto"
								alt=""
							/>
						</div>
						<h3 className="text-center uppercase">
							{item.brandName}
						</h3>
					</div>
				</div>
			))}
		</div>
	);
}

export default BrandsSelection;
