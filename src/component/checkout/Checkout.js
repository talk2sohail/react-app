import React, { useState, useEffect } from 'react';
import MyCart from './MyCart';
import PriceSummary from './PriceSummary';
import PickupAddress from './PickupAddress';
import DeliverAddress from './DeliverAddress';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
function Checkout() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	let history = useHistory();
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
		console.log(item);
		let obj = {};
		obj[index] = item;
		setPickUpAddress(obj);
	};
	const deliveraddressHandler = (item, index) => {
		let obj = {};
		obj[index] = item;
		setDeliverAddress(obj);
	};
	const showError = () => {
		setTimeout(() => {
			seterror('');
		}, 3000);
	};
	const [error, seterror] = useState('');
	const onsubmitHandler = checked => {
		// console.log(pickDrop, pickUpAddress);
		if (!checked) {
			seterror('please select the check box');
			showError();
		} else if (pickDrop && $.isEmptyObject(pickUpAddress)) {
			seterror('please select the pick up address');
			showError();
		} else if (deliverDrop && $.isEmptyObject(deliverAddres)) {
			seterror('please select the delivery address');
			showError();
		} else {
			history.push('/checkout/thankyou');
		}
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

					<PriceSummary
						pickUp={pickDrop}
						onsubmitHandler={onsubmitHandler}
						error={error}
					/>
				</div>
			</div>
		</section>
	);
}

export default Checkout;
