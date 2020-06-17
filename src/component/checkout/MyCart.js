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
					{myCart ? (
						<MyCartUtil myCart={myCart} />
					) : (
						<h2>Your Cart Is Empty</h2>
					)}
				</div>
			</div>
		</div>
	);
}

export default MyCart;
