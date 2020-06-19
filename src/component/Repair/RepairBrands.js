import React, { useState, Fragment } from 'react';
import BrandSearch from './SearchBrand';
import RepairUtil from './BrandsSelection';
import MobleSelection from '../MobleSelection';
import IssueSelection from '../IssuesSelection';
import Checkout from './RepairCheckout';

function RepairBrands(item) {
	const [selectBrand, setSelectBrand] = useState(true);
	const [brandName, setBrandName] = useState('');
	const [selectMobile, setSelectMobile] = useState(false);
	const [selectIssue, setSelectIssue] = useState(false);
	const [activeBrands, setActiveBrands] = useState(false);
	const [activeMobiles, setActiveMobiles] = useState(false);
	const [mobileName, setmobileName] = useState('');
	const [price, setPrice] = useState([0, 0]);
	const [issuesName, setIssuesName] = useState({});

	const onClickBrandHandler = item => {
		if (activeBrands) {
			setSelectBrand(true);
			setSelectMobile(false);
			setSelectIssue(false);
			setActiveBrands(false);
			setActiveMobiles(false);
			setBrandName('');
			setPrice([0, 0]);
		} else {
			setBrandName(item);
			setActiveBrands(true);
			setSelectBrand(false);
			setSelectMobile(true);
		}
	};
	const onClickMobileHandler = item => {
		if (activeMobiles) {
			setPrice([0, 0]);
			setSelectBrand(false);
			setSelectMobile(true);
			setActiveMobiles(false);
			setSelectIssue(false);
			setmobileName('');
		} else {
			setmobileName(item);
			setSelectMobile(false);
			setActiveMobiles(true);
			setSelectIssue(true);
		}
	};
	const priceHandle = (minPrice, maxPrice) => {
		setPrice([price[0] + minPrice, price[1] + maxPrice]);
	};
	const issueHandler = (index, issue, minPrice, maxPrice) => {
		let obj = { ...issuesName };
		if (obj[index]) {
			priceHandle(-minPrice, -maxPrice);
			obj[index] = '';
		} else {
			priceHandle(minPrice, maxPrice);

			obj[index] = {
				issue: issue,
				price: [minPrice, maxPrice],
			};
		}
		setIssuesName(obj);
	};
	console.log(issuesName);
	const CheckOutHandler = () => {
		let myCart = localStorage.getItem('myCart');
		let issue = [];
		console.log(issuesName);
		for (let [key, value] of Object.entries(issuesName)) {
			issue.push(value);
			// console.log(key, value);
		}
		let summary = {
			brand: brandName,
			model: mobileName,
			issue: issue,
			price: price,
		};
		if (!myCart) {
			localStorage.setItem('myCart', JSON.stringify([summary]));
		} else {
			localStorage.removeItem('myCart');
			myCart = JSON.parse(myCart);
			console.log('a', myCart);
			myCart.push(summary);
			localStorage.setItem('myCart', JSON.stringify(myCart));
		}
		console.log(summary);
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
							{brandName ? brandName : 'Brand'}
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
							{mobileName ? mobileName : 'Mobile'}
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

				{selectBrand && (
					<Fragment>
						<BrandSearch msg="Select Your Brand" />
						<RepairUtil onClickBrandHandler={onClickBrandHandler} />
					</Fragment>
				)}
				{selectMobile && (
					<Fragment>
						<BrandSearch msg={`Select Your ${brandName} Device`} />
						<MobleSelection
							onClickMobileHandler={onClickMobileHandler}
						/>
					</Fragment>
				)}
				{selectIssue && (
					<Fragment>
						<Checkout
							msg={`Select Your issue in ${mobileName}`}
							min={price[0]}
							max={price[1]}
							CheckOutHandler={CheckOutHandler}
						/>
						<IssueSelection
							issueHandler={issueHandler}
							state={issuesName}
						/>
					</Fragment>
				)}
			</div>
		</section>
	);
}

export default RepairBrands;
