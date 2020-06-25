import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Error } from '../../Contexts/ErrorContext/ErrorContext';
import { PhoneContext } from '../../Contexts/PhoneContext/PhoneContext';

function RepairCheckout({ msg, CheckOutHandler }) {
	const { totalPrice, isPreSelectedIssue } = useContext(PhoneContext);
	let history = useHistory();
	const checkoutHandler = () => {
		if (!totalPrice[1]) {
			Error('info', 'It seems you forget to select an issue');
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
				<a style={{ cursor: 'pointer' }}>
					{isPreSelectedIssue ? 'Modify' : 'Checkout'} Rs(
					{totalPrice[0]}-{totalPrice[1]})
				</a>
			</div>
		</div>
	);
}

export default RepairCheckout;
