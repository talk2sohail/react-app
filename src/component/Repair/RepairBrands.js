import React, { useState } from 'react';
import BrandSearch from './SearchBrand';
import RepairUtil from './BrandsSelection';
import MobleSelection from '../MobleSelection';
import IssueSelection from '../IssuesSelection';
import Checkout from '../Checkout';
function RepairBrands() {
	const [selectBrand, setSelectBrand] = useState(true);
	const [selectMobile, setSelectMobile] = useState(false);
	const [selectIssue, setSelectIssue] = useState(false);
	const [activeBrands, setActiveBrands] = useState(false);
	const [activeMobiles, setActiveMobiles] = useState(false);
	const onClickBrandHandler = e => {
		if (activeBrands) {
			setSelectBrand(true);
			setSelectMobile(false);
			setSelectIssue(false);
			setActiveBrands(false);
			setActiveMobiles(false);
		} else {
			setActiveBrands(true);
			setSelectBrand(false);
			setSelectMobile(true);
		}
	};
	const onClickMobileHandler = e => {
		if (activeMobiles) {
			setSelectBrand(false);
			setSelectMobile(true);
			setActiveMobiles(false);
			setSelectIssue(false);
		} else {
			setSelectMobile(false);
			setActiveMobiles(true);
			setSelectIssue(true);
		}
	};
	return (
		<section className="repairSelection">
			<div className="sectionWrapper">
				<div className="row no-gutters align-items-center justify-content-between">
					<div
						className="col-4"
						onClick={() => {
							if (activeBrands) onClickBrandHandler();
						}}
					>
						<a
							href="javascript:void(0)"
							className={
								activeBrands
									? 'text-center progressBooking active'
									: 'text-center progressBooking'
							}
						>
							Brand
						</a>
					</div>
					<div
						className="col-4"
						onClick={() => {
							if (activeMobiles) onClickMobileHandler();
						}}
					>
						<a
							href="javascript:void(0)"
							className={
								activeMobiles
									? 'text-center progressBooking active'
									: 'text-center progressBooking'
							}
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
				{selectIssue ? <Checkout /> : <BrandSearch />}

				{selectBrand && (
					<RepairUtil onClickBrandHandler={onClickBrandHandler} />
				)}
				{selectMobile && (
					<MobleSelection
						onClickMobileHandler={onClickMobileHandler}
					/>
				)}
				{selectIssue && <IssueSelection />}
			</div>
		</section>
	);
}

export default RepairBrands;
