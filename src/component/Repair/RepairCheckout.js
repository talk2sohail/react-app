import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
function RepairCheckout({ msg, min, max, CheckOutHandler }) {
	const [error, setError] = useState(false);
	let history = useHistory();
	const checkoutHandler = () => {
		if (!max) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 2000);
		} else {
			CheckOutHandler();
			history.push('/checkout');
		}
	};
	return (
		<div className="row no-gutters justify-content-start align-items-center selectOption mt-2">
			<div className="col-12 col-md-6">
				<h2>{msg}</h2>
			</div>

			<div
				className="col-12 col-md-6 text-right buttons"
				onClick={checkoutHandler}
			>
				{error && (
					<p style={{ color: 'red' }}>please select any issue</p>
				)}
				<a style={{ cursor: 'pointer' }}>
					Checkout Rs({min}-{max})
				</a>
			</div>
		</div>
	);
}

export default RepairCheckout;
