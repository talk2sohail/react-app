import React from 'react';

function EmptyCart() {
	return (
		<div className="emptyBlock">
			<img
				src="/assets/images/icons/emty_cart.svg"
				className="img-fluid"
				alt="empty"
			/>
			<p>No Item in Your cart</p>
		</div>
	);
}

export default EmptyCart;
