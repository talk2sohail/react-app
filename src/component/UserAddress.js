import React from 'react';

function UserAddress({ AddressHandler, Address }) {
	let userAddress = localStorage.getItem('address');
	userAddress = JSON.parse(userAddress);
	return (
		userAddress &&
		userAddress.map((item, index) => (
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
				<p>Kolkata, West Bengal - {item.pincode}</p>
			</div>
		))
	);
}

export default UserAddress;
