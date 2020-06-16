import React from 'react';
import { Link } from 'react-router-dom';
function RepairCheckout({ msg, min, max }) {
	return (
		<Link to="/checkout">
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
		</Link>
	);
}

export default RepairCheckout;
