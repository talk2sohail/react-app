import React, { useEffect } from "react";
import MyCart from "./MyCart";
import PriceSummary from "./PriceSummary";
import PickupAddress from "./PickupAddress";
import DeliverAddress from "./DeliverAddress";
function Checkout() {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<section className="checkoutWrapper profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-8">
						<MyCart />
						<PickupAddress />
						<DeliverAddress />
					</div>
					<PriceSummary />
				</div>
			</div>
		</section>
	);
}

export default Checkout;
