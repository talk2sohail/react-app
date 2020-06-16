import React from 'react';

function MyCart() {
	return (
		<div className="userWrapper">
			<div className="userHeader">
				<h2>My Cart</h2>
			</div>
			<div className="userDetails">
				<div className="orderBlock">
					<div className="orderBody d-flex justify-content-start flex-wrap">
						<div className="imgWrap">
							<img
								src="assets/images/mobiles/oneplus/oneplussixt.png"
								alt=""
							/>
						</div>
						<div className="contentWrap">
							<h3>OnePlus 6T</h3>
							<p>
								<span>Color: </span> Midnight Black
							</p>
							<p>
								<span>Issues: </span>
								Screen Repair, Mic Repair
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyCart;
