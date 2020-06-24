import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';
export const AddressContext = createContext();
const AddressContextProvider = props => {
	let userAddress = localStorage.getItem('address');
	userAddress = JSON.parse(userAddress);
	const [address, setAddress] = useState(userAddress || []);
	const [editAddress, seteditAddress] = useState([]);
	const saveAddress = address => {
		//  save to dataBase
		if (editAddress.length) {
			deleteAddressHanlder(editAddress[0].key);
		}

		let storage = localStorage.getItem('address');
		const Address = {
			key: uuid(),
			address: address,
		};
		if (!storage) {
			storage = [Address];
			localStorage.setItem('address', JSON.stringify(storage));
		} else {
			storage = JSON.parse(storage);
			storage.push(Address);
			localStorage.setItem('address', JSON.stringify(storage));
		}
		setAddress(storage);
	};
	const findAddress = item => {
		seteditAddress(item);
	};
	const resetEditAddressHandler = () => {
		seteditAddress([]);
	};
	const deleteAddressHanlder = item => {
		const filteredaddress = address.filter(doc => doc.key !== item);
		if (filteredaddress.length) {
			localStorage.setItem('address', JSON.stringify(filteredaddress));
		} else {
			localStorage.removeItem('address');
		}
		setAddress(filteredaddress);
	};
	return (
		<AddressContext.Provider
			value={{
				address,
				saveAddress,
				deleteAddressHanlder,
				findAddress,
				resetEditAddressHandler,
				editAddress,
			}}
		>
			{props.children}
		</AddressContext.Provider>
	);
};

export default AddressContextProvider;
