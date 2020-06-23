import React from 'react';

import PickDropWrap from './PickDropWrap';
import ShopAddress from './ShopAddress';
import AddAddress from './AddAddress';
import { FormShowHook } from '../Address/AddEditHook';
import UserAddress from '../UserAddress';
import AddEditAddressForm from '../Address/AddEditAddressForm';
function PickupAddress({
	pickUpaddressHandler,
	pickUpAddress,
	pickDropHanlder,
}) {
	const init = {
		fName: '',
		lName: '',
		locality: '',
		address: '',
		pincode: '',
		state: '',
		city: '',
		phoneNumber: '',
		email: '',
	};
	const [showForm, showFormHandler] = FormShowHook(false);
	const offForm = () => {
		showFormHandler();
	};
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
						pickDropHanlder={pickDropHanlder}
					/>
					<div className="tab-content" id="myTabContent">
						<div
							className="tab-pane fade show active"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						>
							<AddAddress showFormHandler={showFormHandler} />
							<UserAddress
								AddressHandler={pickUpaddressHandler}
								Address={pickUpAddress}
							/>

							{showForm && (
								<AddEditAddressForm
									init={init}
									offForm={offForm}
									process="Add Address"
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
