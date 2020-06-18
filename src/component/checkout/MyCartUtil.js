import React from 'react';

function MyCartUtil({ myCart }) {
	return myCart.map((item, index) => (
		<div
			className="orderBody d-flex justify-content-start flex-wrap"
			key={index}
		>
			<div className="imgWrap">
				<img
					src="assets/images/mobiles/oneplus/oneplussixt.png"
					alt=""
				/>
			</div>
			<div className="contentWrap">
				<h3>
					{item.brand} {item.model}
				</h3>
				<p>
					<span>Color: </span> Midnight Black
				</p>
				<p>
					<span>Issues: </span>
					{item.issue.map(doc => doc.issue).join(', ')}
				</p>
			</div>
		</div>
	));
}

export default MyCartUtil;
