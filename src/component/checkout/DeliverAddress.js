import React, { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import PickDropWrap from './PickDropWrap';
import ShopAddress from './ShopAddress';
import AddAddress from './AddAddress';
import { AddressHook } from '../util/CheckoutFormUtil';
function DeliverAddress() {
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
					/>
					<div className="tab-content" id="myTabContentTwo">
						<div
							className="tab-pane fade show active"
							id="homedelivery"
							role="tabpanel"
							aria-labelledby="homedelivery-tab"
						>
							<AddAddress showFormHandler={showFormHandler} />
							{/* list of user addresses  */}
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
