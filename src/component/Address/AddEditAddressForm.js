import React, { useEffect, useContext } from 'react';
import { AddressHook } from './AddEditHook';
import { AddressContext } from '../../Contexts/AddressContext/AddressContext';
import { useHistory } from 'react-router-dom';
function AddEditAddressForm({ init, offForm, process }) {
	let history = useHistory();
	const { saveAddress } = useContext(AddressContext);
	const [
		userInfo,
		onChangethandler,
		onSubmitHandler,
		stateClear,
	] = AddressHook(init);
	useEffect(() => {
		return () => {
			stateClear(init);
		};
	}, []);
	console.log(userInfo, init);
	const {
		fName,
		lName,
		locality,
		address,
		pincode,
		state,
		city,
		phoneNumber,
		email,
	} = userInfo;
	const SubmitHanlder = e => {
		e.preventDefault();
		const valid = onSubmitHandler();
		if (valid) {
			saveAddress(userInfo);
			stateClear(init);
			if (offForm === 'address') history.push(`/${offForm}`);
			else offForm();
		}
	};
	return (
		<form className="mt-4" onSubmit={SubmitHanlder}>
			<div className="formGroup no-gutters align-items-center row justify-content-between">
				<div className="col-lg-6">
					<input
						type="text"
						className="editProfileDetails"
						value={fName}
						name="fName"
						onChange={onChangethandler}
						placeholder="First Name"
					/>
				</div>
				<div className="col-lg-6">
					<input
						type="text"
						className="editProfileDetails"
						value={lName}
						name="lName"
						placeholder="Last Name"
						onChange={onChangethandler}
					/>
				</div>
			</div>
			<div className="formGroup no-gutters align-items-center row justify-content-between">
				<div className="col-lg-6">
					<input
						type="text"
						className="editProfileDetails"
						value={pincode}
						name="pincode"
						placeholder="Pincode"
						// pattern="[0-9]{1}[0-9]{9}"
						maxLength="6"
						onChange={onChangethandler}
					/>
				</div>
				<div className="col-lg-6">
					<input
						type="text"
						className="editProfileDetails"
						value={locality}
						name="locality"
						placeholder="Locality"
						onChange={onChangethandler}
					/>
				</div>
			</div>
			<div className="formGroup no-gutters align-items-center row justify-content-between">
				<div className="col-lg-6">
					<input
						type="text"
						className="editProfileDetails"
						value={state}
						name="state"
						placeholder="State"
						onChange={onChangethandler}
					/>
				</div>
				<div className="col-lg-6">
					<input
						type="text"
						className="editProfileDetails"
						value={city}
						name="city"
						placeholder="City"
						onChange={onChangethandler}
					/>
				</div>
			</div>
			<div className="formGroup no-gutters align-items-center row justify-content-start">
				<div className="col-12">
					<textarea
						name=""
						id=""
						cols="30"
						rows="4"
						className="mb-0"
						value={address}
						name="address"
						placeholder="Address (Area &amp; Street)"
						onChange={onChangethandler}
					></textarea>
				</div>
			</div>
			<div className="formGroup no-gutters align-items-center row justify-content-between">
				<div className="col-lg-6">
					<input
						type="text"
						className="editProfileDetails"
						value={phoneNumber}
						name="phoneNumber"
						pattern="[0-9]{1}[0-9]{9}"
						maxLength="10"
						placeholder="Phone Number"
						onChange={onChangethandler}
					/>
				</div>
				<div className="col-lg-6">
					<input
						type="email"
						className="editProfileDetails"
						value={email}
						name="email"
						placeholder="Email Address"
						onChange={onChangethandler}
					/>
				</div>
			</div>
			<div className="formGroup no-gutters align-items-center row justify-content-between">
				<div className="col-12">
					<input
						type="submit"
						name=""
						className=""
						id="#"
						value={process}
					/>
				</div>
			</div>
		</form>
	);
}

export default AddEditAddressForm;
