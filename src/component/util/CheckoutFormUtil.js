import React, { useState } from 'react';

export function AddressHook(initialState) {
	const [state, setState] = useState(initialState);
	const checkOuthandler = e => {
		// console.log(e.target.value);
		const { name, value } = e.target;
		setState(prevState => ({
			...prevState,
			[name]: value,
		}));
	};
	const checkOutSubmithandler = (e, initialState) => {
		e.preventDefault();
		// console.log(state);

		// some logic check and save to database
		for (let [key, value] of Object.entries(state)) {
			if (!value) return `please fill all the section`;
			// console.log(key, value);
		}
		//  reset the state
		let storage = localStorage.getItem('address');
		if (!storage) {
			storage = [state];
			localStorage.setItem('address', JSON.stringify(storage));
		} else {
			storage = JSON.parse(storage);
			storage.push(state);
			localStorage.removeItem('address');
			localStorage.setItem('address', JSON.stringify(storage));
		}
		setState(initialState);
		return '';
	};

	return [state, checkOuthandler, checkOutSubmithandler];
}
export function FormShowHook(initialState) {
	const [showForm, setShowForm] = useState(initialState);
	const showFormHandler = () => {
		setShowForm(!showForm);
	};
	return [showForm, showFormHandler];
}
