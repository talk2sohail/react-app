import React, { createContext, useState, useEffect } from 'react';

export const AddressContext = createContext();
const AddressContextProvider = props => {
	let userAddress = localStorage.getItem('address');
	userAddress = JSON.parse(userAddress);
	const [address, setAddress] = useState(userAddress);
	const [editAddress, seteditAddress] = useState(null);
	const saveAddress = address => {
		//  save to dataBase
		let storage = localStorage.getItem('address');
		if (!storage) {
			storage = [address];
			localStorage.setItem('address', JSON.stringify(storage));
		} else {
			storage = JSON.parse(storage);
			storage.push(address);
			localStorage.removeItem('address');
			localStorage.setItem('address', JSON.stringify(storage));
		}
		seteditAddress(address);
	};
	const editAddressHandler = item => {
		seteditAddress(item);
		console.log(item);
	};
	const deleteAddressHanlder = item => {
		const filteredaddress = address.filter(doc => doc !== item);
		localStorage.removeItem('address');
		localStorage.setItem('address', JSON.stringify(filteredaddress));
		setAddress(filteredaddress);
	};
	return (
		<AddressContext.Provider
			value={{
				address,
				saveAddress,
				deleteAddressHanlder,
				editAddressHandler,
				editAddress,
			}}
		>
			{props.children}
		</AddressContext.Provider>
	);
};

export default AddressContextProvider;
