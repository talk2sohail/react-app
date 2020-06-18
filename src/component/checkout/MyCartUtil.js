import React from 'react';
import { Link } from 'react-router-dom';
function MyCartUtil({ myCart, cartHandler, callingFromCart = false }) {
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
				<h3 style={{ fontWeight: 'bold' }}>{item.brand}</h3>
				<p>
					<span>Mobile: </span> {item.model}
				</p>
				<ul style={{ paddingLeft: 15 }}>
					{item.issue.map((doc, index) => (
						<li key={index}>{doc.issue}</li>
					))}
				</ul>
			</div>
			{callingFromCart && (
				<div style={{ marginLeft: 'auto', cursor: 'pointer' }}>
					<div className="d-flex">
						<div
							onClick={() => cartHandler(item)}
							className="removeBtn"
						>
							Remove
						</div>
					</div>
				</div>
			)}
		</div>
	));
}

export default MyCartUtil;
