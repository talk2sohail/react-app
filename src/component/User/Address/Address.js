import React, { useContext } from 'react';
import User from '../User';
import AddAddress from '../../Checkout/AddAddress';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AddressContext } from '../../../Contexts/AddressContext/AddressContext';
function Address() {
	let history = useHistory();
	const { address, deleteAddressHanlder } = useContext(AddressContext);
	const editaddressHandler = item => {
		history.push(`/editaddress/${item}`);
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
								{address.map(item => (
									<div
										className="savedAddress"
										key={item.key}
									>
										<h3>
											{item.address.fName}{' '}
											{item.address.lName}{' '}
											<span>
												{item.address.phoneNumber}
											</span>
										</h3>
										<p>
											{item.address.address}.{' '}
											{item.address.locality}
										</p>
										<p>
											{item.address.city},{' '}
											{item.address.state} -{' '}
											{item.address.pincode}
										</p>
										<div className="d-flex">
											<a
												style={{
													cursor: 'pointer',
												}}
												onClick={() =>
													editaddressHandler(item.key)
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
														item.key
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
