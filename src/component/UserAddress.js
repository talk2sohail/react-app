import React, { useContext } from 'react';
import { AddressContext } from '../Contexts/AddressContext/AddressContext';
function UserAddress({ AddressHandler, Address }) {
	const { address } = useContext(AddressContext);
	return (
		address &&
		address.map(item => (
			<div
				className={
					Address[`${item.key}`]
						? 'savedAddress selected'
						: 'savedAddress'
				}
				key={item.key}
				onClick={() => {
					AddressHandler(item.address, item.key);
				}}
			>
				<h3>
					{item.address.fName} {item.address.lName}{' '}
					<span>{item.address.phoneNumber}</span>
				</h3>
				<p>
					{item.address.address}. {item.address.locality}
				</p>
				<p>
					{item.address.city}, {item.address.state} -{' '}
					{item.address.pincode}
				</p>
			</div>
		))
	);
}

export default UserAddress;
