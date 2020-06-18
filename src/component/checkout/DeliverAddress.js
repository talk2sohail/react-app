import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import PickDropWrap from './PickDropWrap';
import ShopAddress from './ShopAddress';
import AddAddress from './AddAddress';
import UserAddress from '../UserAddress';
import { AddressHook, FormShowHook } from '../util/CheckoutFormUtil';
function DeliverAddress({
	deliveraddressHandler,
	deliverPickHandler,
	deliverDropHandler,
	deliverAddres,
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
	return (
		<div className="userWrapper mt-4">
			<div className="userHeader">
				<h2>Deliver at home or pickup from shop</h2>
			</div>
			<div className="userDetails addressChange">
				<div className="pickdrropWrap">
					<PickDropWrap
						option1="Home Delivery"
						option2="Pick from Shop"
						id="myTabTwo"
						liId1="homedelivery-tab"
						lihref1="#homedelivery"
						control1="homedelivery"
						liId2="pickshop-tab"
						lihref2="#pickshop"
						ontrol2="pickshop"
						pickUpHandler={deliverPickHandler}
						dropHandler={deliverDropHandler}
					/>
					<div className="tab-content" id="myTabContentTwo">
						<div
							className="tab-pane fade show active"
							id="homedelivery"
							role="tabpanel"
							aria-labelledby="homedelivery-tab"
						>
							<AddAddress showFormHandler={showFormHandler} />
							{!showForm && (
								<UserAddress
									AddressHandler={deliveraddressHandler}
									Address={deliverAddres}
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
							id="pickshop"
							role="tabpanel"
							label="pickshop-tab"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeliverAddress;
