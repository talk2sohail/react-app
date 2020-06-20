import React from 'react';
import MyCartUtil from './MyCartUtil';

function MyCart({ mycart }) {
	return (
		<div className="userWrapper">
			<div className="userHeader">
				<h2>My Cart</h2>
			</div>
			<div className="userDetails">
				<div className="orderBlock">
					<MyCartUtil myCart={mycart} />
				</div>
			</div>
		</div>
	);
}

export default MyCart;
