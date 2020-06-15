import React from 'react';

function Checkout({ msg, min, max }) {
	return (
		<div className="row no-gutters justify-content-start align-items-center selectOption mt-2">
			<div className="col-12 col-md-6">
				<h2>{msg}</h2>
			</div>
			<div className="col-12 col-md-6 text-right buttons">
				<a href="javascript:void(0)">
					Checkout Rs({min}-{max})
				</a>
			</div>
		</div>
	);
}

export default Checkout;
