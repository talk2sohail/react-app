import React from 'react';

function PriceSummary() {
	return (
		<div className="col-12 col-lg-4">
			<div className="priceSummary">
				<div className="priceHeader">
					<h3>Price Summary</h3>
				</div>
				<div className="priceBody">
					<p className="price">
						OnePlus 6T Screen
						<span className="float-right">Rs 800 - Rs 900</span>
					</p>
					<p className="price borderB">
						OnePlus 6T Mic
						<span className="float-right">Rs 599 - Rs 700</span>
					</p>
					<p className="tax">
						Tax <span className="float-right">Rs 0</span>
					</p>
					<p className="tax">
						Pickup Charge <span className="float-right">Rs 0</span>
					</p>
					{/* <!-- <p className="total">
Amount Payable <span className="float-right">Rs 1399</span>
</p> -->
<!-- <form>
<p>Payment Type</p>
<div>
<input type="radio" id="test1" name="radio-group" />
<label for="test1">Cash</label>

<input type="radio" id="test2" name="radio-group" />
<label for="test2" className="ml-3">Card</label>
</div>
</form> --> */}
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
			{/* <!-- <div className="priceSummary couponCode">
<div className="priceHeader">
<h3>Apply Coupon Code</h3>
</div>
<form className="row no-gutters">
<div className="col-12 col-lg-9">
<input
className="mb-0"
type="text"
placeholder="Enter Coupon Code"
/>
</div>
<div className="col-12 col-lg-3">
<input className="mb-0 btnSub" type="submit" value="APPLY" />
</div>
</form>
</div> --> */}
		</div>
	);
}

export default PriceSummary;
