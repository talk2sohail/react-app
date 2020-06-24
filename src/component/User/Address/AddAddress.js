import React from 'react';
import User from '../User';
import AddEditAddressForm from '../../AddressUtil/AddEditAddressForm';
import { Link } from 'react-router-dom';
function AddAddress() {
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
	return (
		<section className="profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<User Active="address" />
					<div className="col-lg-9 col-12">
						<div className="userWrapper phoneFixed ">
							<div className="userHeader justify-content-start">
								<Link
									to="/address"
									className="d-block d-lg-none"
								>
									<img
										src="/assets/images/icons/lessthan.png"
										style={{ width: '22px' }}
										className="mr-2"
										alt=""
									/>
								</Link>
								<h2>Add Address</h2>
								{/* <!-- <a href="javascript:void(0)">Edit Info</a> --> */}
							</div>
							<div className="userDetails addressChange">
								<AddEditAddressForm
									init={init}
									offForm="address"
									process="Add Address"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AddAddress;
