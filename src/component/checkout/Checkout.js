import React, { useState, useEffect } from 'react';
import MyCart from './MyCart';
import PriceSummary from './PriceSummary';
import PickupAddress from './PickupAddress';
import DeliverAddress from './DeliverAddress';
function Checkout() {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	const [pickDrop, setPickDrop] = useState(true);
	const [pickUpAddress, setPickUpAddress] = useState({});
	const [deliverAddres, setDeliverAddress] = useState({});
	const [deliverDrop, setDeliverDrop] = useState(true);

	const pickUpHandler = () => {
		setPickDrop(true);
	};
	const dropHandler = () => {
		setPickDrop(false);
	};
	const deliverPickHandler = () => {
		setDeliverDrop(true);
	};
	const deliverDropHandler = () => {
		setDeliverDrop(false);
	};

	const pickUpaddressHandler = (item, index) => {
		let obj = {};
		obj[index] = item;
		setPickUpAddress(obj);
	};
	const deliveraddressHandler = (item, index) => {
		let obj = {};
		obj[index] = item;
		setDeliverAddress(obj);
	};
	return (
		<section className="checkoutWrapper profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-8">
						<MyCart />
						<PickupAddress
							pickUpHandler={pickUpHandler}
							dropHandler={dropHandler}
							pickUpaddressHandler={pickUpaddressHandler}
							pickUpAddress={pickUpAddress}
						/>
						<DeliverAddress
							deliverPickHandler={deliverPickHandler}
							deliverDropHandler={deliverDropHandler}
							deliveraddressHandler={deliveraddressHandler}
							deliverAddres={deliverAddres}
						/>
					</div>
					<PriceSummary pickUp={pickDrop} />
				</div>
			</div>
		</section>
	);
}

export default Checkout;
