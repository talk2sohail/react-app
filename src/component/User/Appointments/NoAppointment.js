import React from 'react';

function NoAppointment() {
	return (
		<div className="emptyBlock">
			<img
				src="/assets/images/icons/no_data.svg"
				className="img-fluid"
				alt=""
			/>
			<p>No Repair Appointments</p>
		</div>
	);
}

export default NoAppointment;
