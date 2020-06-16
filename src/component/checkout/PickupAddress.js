import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import PickDropWrap from './PickDropWrap';
import ShopAddress from './ShopAddress';
import AddAddress from './AddAddress';
import { AddressHook } from '../util/CheckoutFormUtil';
function PickupAddress() {
	const {
		userInfo,
		checkOuthandler,
		checkOutSubmithandler,
		showForm,
		showFormHandler,
	} = AddressHook();

	return (
		<div className="userWrapper mt-4">
			<div className="userHeader">
				<h2>Pickup at home or Drop at shop</h2>
			</div>
			<div className="userDetails addressChange">
				<div className="pickdrropWrap">
					<PickDropWrap
						option1="Pickup"
						option2="Drop"
						id="myTab"
						liId1="home-tab"
						lihref1="#home"
						control1="home"
						liId2="profile-tab"
						lihref2="#profile"
						control2="profile"
					/>
					<div className="tab-content" id="myTabContent">
						<div
							className="tab-pane fade show active"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						>
							<AddAddress showFormHandler={showFormHandler} />
							<div className="savedAddress selected">
								<h3>
									Md Javed Akhtar <span>9831983198</span>
								</h3>
								<p>
									10, Park Street, Kolkata-700 016. Park
									Street Police Station
								</p>
								<p>Kolkata, West Bengal - 700016</p>
							</div>
							{showForm && (
								<CheckOutForm
									checkOuthandler={checkOuthandler}
									userInfo={userInfo}
									checkOutSubmithandler={
										checkOutSubmithandler
									}
								/>
							)}
						</div>

						<ShopAddress
							id="profile"
							role="tabpanel"
							label="profile-tab"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PickupAddress;
