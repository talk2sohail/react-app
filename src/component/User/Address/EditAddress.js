import React, { useContext, useEffect } from 'react';
import User from '../User';
import AddEditAddressForm from '../../AddressUtil/AddEditAddressForm';
import { Link, Redirect } from 'react-router-dom';
import { AddressContext } from '../../../Contexts/AddressContext/AddressContext';
function EditAddress({
	match: {
		params: { id },
	},
}) {
	const { address, resetEditAddressHandler, editAddressHandler } = useContext(
		AddressContext
	);
	const Address = address.filter(item => {
		if (item.key === id) {
			return item;
		}
	});
	useEffect(() => {
		editAddressHandler(Address);
		return () => resetEditAddressHandler();
	}, []);
	if (!Address.length) {
		return <Redirect to="/page404" />;
	}
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
									/>
								</Link>
								<h2>Edit Address</h2>
								{/* <!-- <a href="javascript:void(0)">Edit Info</a> --> */}
							</div>
							<div className="userDetails addressChange">
								<AddEditAddressForm
									init={Address[0].address}
									offForm="address"
									process="Edit Address"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default EditAddress;
