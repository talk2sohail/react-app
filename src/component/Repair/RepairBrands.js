import React, { useState } from 'react';
import { brandsData } from '../../data/RepairData';
import ImageUtil from '../util/ImageUtil';
function RepairBrands() {
	const [repairBrands, setRepairBrands] = useState(brandsData);
	return (
		<section className="repairSelection">
			<div className="sectionWrapper">
				<div className="row no-gutters align-items-center justify-content-between">
					<div className="col-4">
						<a
							href="javascript:void(0)"
							className="text-center progressBooking"
						>
							Brand
						</a>
					</div>
					<div className="col-4">
						<a
							href="javascript:void(0)"
							className="text-center progressBooking"
						>
							Mobile
						</a>
					</div>
					<div className="col-4">
						<a
							href="javascript:void(0)"
							className="text-center progressBooking"
						>
							Issue
						</a>
					</div>
				</div>
				<div className="row no-gutters justify-content-start align-items-center selectOption">
					<div className="col-12 col-md-6">
						<h2>Select Your Mobile Brand</h2>
					</div>
					<div className="col-12 col-md-6 text-right mobileLeft">
						<form action="#" className="searchBar">
							<input
								type="search"
								placeholder="Search Your Mobile Here"
								className="mt-0"
							/>
							<button type="submit">
								<img
									src="assets/images/icons/search.png"
									width="20"
									alt=""
								/>
							</button>
						</form>
					</div>
				</div>
				<div className="row no-gutters justify-content-start align-items-center selectOption">
					{/* <!-- apple --> */}
					{repairBrands.map(item => (
						<div key={item.key} className="col-6 col-md-4 col-lg-2">
							<div className="branWrap">
								<div className="imgWrapBrand">
									<ImageUtil
										src={`assets/images/brandLogos/${item.img}`}
										className="d-block text-center mx-auto"
										alt=""
									/>
								</div>
								<h3 className="text-center uppercase">
									{item.name}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default RepairBrands;
