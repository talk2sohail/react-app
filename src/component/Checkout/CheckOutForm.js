import React, { Fragment, useEffect } from 'react';
function CheckOutForm({
	checkOuthandler,
	userInfo,
	checkOutSubmithandler,
	showFormHandler,
	stateClear,
}) {
	useEffect(() => {
		return () => {
			stateClear(init);
		};
	}, []);
	const init = {
		fName: '',
		lName: '',
		locality: '',
		address: '',
		pincode: '',
		phoneNumber: '',
		email: '',
	};
	const {
		fName,
		lName,
		locality,
		address,
		pincode,
		phoneNumber,
		email,
	} = userInfo;
	const util = e => {
		const err = checkOutSubmithandler(e, init);
		if (!err) showFormHandler();
	};
	return (
		<Fragment>
			<form
				className="mt-4"
				onSubmit={e => {
					util(e);
				}}
			>
				<div className="formGroup no-gutters align-items-center row justify-content-between">
					<div className="col-lg-6">
						<input
							type="text"
							className="editProfileDetails"
							value={fName}
							name="fName"
							onChange={checkOuthandler}
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
							onChange={checkOuthandler}
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
							onChange={checkOuthandler}
						/>
					</div>
					<div className="col-lg-6">
						<input
							type="text"
							className="editProfileDetails"
							value={locality}
							name="locality"
							placeholder="Locality"
							onChange={checkOuthandler}
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
							onChange={checkOuthandler}
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
							onChange={checkOuthandler}
						/>
					</div>
					<div className="col-lg-6">
						<input
							type="email"
							className="editProfileDetails"
							value={email}
							name="email"
							placeholder="Email Address"
							onChange={checkOuthandler}
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
							value="Add Address"
						/>
					</div>
				</div>
			</form>
		</Fragment>
	);
}

export default CheckOutForm;
