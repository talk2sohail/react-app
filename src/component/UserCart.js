import React from 'react';
import EmptyCart from './checkout/EmptyCart';
import MyCartUtil from './checkout/MyCartUtil';
import { Link } from 'react-router-dom';
function UserCart() {
	let myCart = localStorage.getItem('myCart');
	myCart = JSON.parse(myCart);
	return (
		<section className="checkoutWrapper profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-8">
						<div className="userWrapper">
							<div className="userHeader">
								<h2>My Cart</h2>
								{myCart && (
									<Link
										to="/checkout"
										style={{ cursor: 'pointer' }}
										className="text-center buttons"
									>
										CHECKOUT NOW
									</Link>
								)}
							</div>

							{/* empty cart */}

							<div className="userDetails">
								<div className="orderBlock">
									{myCart ? (
										<MyCartUtil myCart={myCart} />
									) : (
										<EmptyCart />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default UserCart;
