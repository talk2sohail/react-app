import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import PickDropWrap from './PickDropWrap';
import ShopAddress from './ShopAddress';
import AddAddress from './AddAddress';
import { AddressHook, FormShowHook } from '../util/CheckoutFormUtil';
import UserAddress from '../UserAddress';
function PickupAddress({
	pickUpHandler,
	dropHandler,
	pickUpaddressHandler,
	pickUpAddress,
}) {
	const [userInfo, checkOuthandler, checkOutSubmithandler] = AddressHook({
		fName: '',
		lName: '',
		locality: '',
		address: '',
		pincode: '',
		phoneNumber: '',
		email: '',
	});
	const [showForm, showFormHandler] = FormShowHook(false);
	const [Address, setAddress] = useState({});
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
						pickUpHandler={pickUpHandler}
						dropHandler={dropHandler}
					/>
					<div className="tab-content" id="myTabContent">
						<div
							className="tab-pane fade show active"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						>
							<AddAddress showFormHandler={showFormHandler} />
							{!showForm && (
								<UserAddress
									AddressHandler={pickUpaddressHandler}
									Address={pickUpAddress}
								/>
							)}
							{showForm && (
								<CheckOutForm
									checkOuthandler={checkOuthandler}
									userInfo={userInfo}
									checkOutSubmithandler={
										checkOutSubmithandler
									}
									showFormHandler={showFormHandler}
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
