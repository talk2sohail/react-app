import React, { useContext } from 'react';
import { AddressContext } from '../Contexts/AddressContext/AddressContext';
function UserAddress({ AddressHandler, Address }) {
	const { address } = useContext(AddressContext);
	return (
		address &&
		address.map((item, index) => (
			<div
				className={
					Address[index] ? 'savedAddress selected' : 'savedAddress'
				}
				key={index}
				onClick={() => {
					AddressHandler(item, index);
				}}
			>
				<h3>
					{item.fName} {item.lName} <span>{item.phoneNumber}</span>
				</h3>
				<p>
					{item.address}. {item.locality}
				</p>
				<p>
					{item.city}, {item.state} - {item.pincode}
				</p>
			</div>
		))
	);
}

export default UserAddress;
