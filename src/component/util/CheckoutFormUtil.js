import React, { useState } from 'react';

export function AddressHook() {
	const [userInfo, setUserInfo] = useState({
		fName: '',
		lName: '',
		locality: '',
		address: '',
		pincode: '',
		phoneNumber: '',
		email: '',
	});
	const [showForm, setShowForm] = useState(false);
	const showFormHandler = () => {
		setShowForm(!showForm);
	};
	const checkOuthandler = e => {
		// console.log(e.target.value);
		const { name, value } = e.target;
		setUserInfo(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const checkOutSubmithandler = e => {
		e.preventDefault();
		console.log(userInfo);

		// some logic check and save to database
		//  reset the state
		setUserInfo({
			fName: '',
			lName: '',
			locality: '',
			address: '',
			pincode: '',
			phoneNumber: '',
			email: '',
		});
		// shutdown the form
		showFormHandler();
	};

	return {
		userInfo,
		checkOuthandler,
		checkOutSubmithandler,
		showForm,
		showFormHandler,
	};
}
// export function FormShowHook() {
// 	const [showForm, setShowForm] = useState(false);
// 	const showFormHandler = () => {
// 		setShowForm(!showForm);
// 	};
// 	return [showForm, showFormHandler];
// }
