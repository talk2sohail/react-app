import React from 'react';

function PriceSummary({ pickUp }) {
	let myCart = localStorage.getItem('myCart');
	myCart = JSON.parse(myCart);

	return (
		<div className="col-12 col-lg-4">
			<div className="priceSummary">
				<div className="priceHeader">
					<h3>Price Summary</h3>
				</div>
				<div className="priceBody">
					{myCart.map((item, index) =>
						item.issue.map((doc, index) => (
							<p className="price" key={index}>
								{item.brand} {item.model} {doc.issue}
								<span className="float-right">
									Rs {doc.price[0]} - Rs {doc.price[1]}
								</span>
							</p>
						))
					)}
					<p className="tax">
						Tax <span className="float-right">Rs 0</span>
					</p>
					{pickUp && (
						<p className="tax">
							Pickup Charge{' '}
							<span className="float-right">Rs 0</span>
						</p>
					)}

					<div className="position-relative agreeTC">
						<input type="checkbox" checked id="agree" name="" />
						<label htmlFor="agree">
							<svg
								className="tick"
								width="22"
								height="22"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 13L6 14L7 15L8 16L9 17L11 15L12 14L13 13L14 12L15 11L16 10L17 9L18 8" />
							</svg>
							I agree to the
							<a href="javascript:void(0)"> Terms & Conditions</a>
						</label>
					</div>
				</div>
				<a
					href="javascript:void(0)"
					className="d-block text-center btnBook"
				>
					BOOK NOW
				</a>
			</div>
		</div>
	);
}

export default PriceSummary;
