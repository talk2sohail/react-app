import React, { useEffect, useContext } from 'react';
import User from '../User';
import AddAddress from '../../Checkout/AddAddress';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AddressContext } from '../../../Contexts/AddressContext/AddressContext';
function Address() {
	let history = useHistory();
	const { address, deleteAddressHanlder, editAddressHandler } = useContext(
		AddressContext
	);

	const editaddressHandler = item => {
		editAddressHandler(item);
		history.push('/editaddress');
	};
	return (
		<section className="profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<User Active="address" />
					<div className="col-lg-9 col-12">
						<div className="userWrapper">
							<div className="userHeader">
								<h2>Manage Address</h2>
								{/* <!-- <a href="javascript:void(0)">Edit Info</a> --> */}
							</div>
							<div className="userDetails">
								<Link to="/addaddress">
									<AddAddress />
								</Link>
								{address &&
									address.map((item, index) => (
										<div
											className="savedAddress"
											key={index}
										>
											<h3>
												{item.fName} {item.lName}{' '}
												<span>{item.phoneNumber}</span>
											</h3>
											<p>
												{item.address}. {item.locality}
											</p>
											<p>
												{item.city}, {item.state} -{' '}
												{item.pincode}
											</p>
											<div className="d-flex">
												<a
													style={{
														cursor: 'pointer',
													}}
													onClick={() =>
														editaddressHandler(item)
													}
													className="gradientText"
												>
													Edit
												</a>
												<a
													style={{
														cursor: 'pointer',
													}}
													className="delete"
													onClick={() =>
														deleteAddressHanlder(
															item
														)
													}
												>
													Delete
												</a>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Address;
