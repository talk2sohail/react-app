import React from 'react';
import MyCartUtil from './MyCartUtil';

function MyCart() {
	let myCart = localStorage.getItem('myCart');
	myCart = JSON.parse(myCart);

	return (
		<div className="userWrapper">
			<div className="userHeader">
				<h2>My Cart</h2>
			</div>
			<div className="userDetails">
				<div className="orderBlock">
					<MyCartUtil myCart={myCart} />
				</div>
			</div>
		</div>
	);
}

export default MyCart;
