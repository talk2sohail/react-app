import React, { useState, useEffect } from 'react';
import MyCart from './MyCart';
import PriceSummary from './PriceSummary';
import PickupAddress from './PickupAddress';
import DeliverAddress from './DeliverAddress';
import { useHistory } from 'react-router-dom';
import { Error } from '../../Contexts/ErrorContext/ErrorContext';
import $ from 'jquery';
function Checkout() {
	const [mycart, setMycart] = useState([]);
	useEffect(() => {
		let myCart = localStorage.getItem('myCart');
		myCart = JSON.parse(myCart);
		setMycart(myCart);
		window.scrollTo(0, 0);
	}, []);
	let history = useHistory();
	const [pickDrop, setPickDrop] = useState(true);
	const [pickUpAddress, setPickUpAddress] = useState({});
	const [deliverAddres, setDeliverAddress] = useState({});
	const [deliverDrop, setDeliverDrop] = useState(true);

	const pickUpaddressHandler = (item, index) => {
		// console.log(item);
		let obj = {};
		obj[index] = item;
		setPickUpAddress(obj);
	};
	const deliveraddressHandler = (item, index) => {
		let obj = {};
		obj[index] = item;
		setDeliverAddress(obj);
	};
	const pickDropHanlder = value => {
		setPickDrop(value);
	};
	const deliverPickHanlder = value => {
		setDeliverDrop(value);
	};
	const onsubmitHandler = checked => {
		if (!checked) {
			Error('info', 'please select the check box');
		} else if (pickDrop && $.isEmptyObject(pickUpAddress)) {
			Error('info', 'please select the pick up address');
		} else if (deliverDrop && $.isEmptyObject(deliverAddres)) {
			Error('info', 'please select the delivery address');
		} else {
			history.push('/checkout/thankyou');
		}
	};

	return (
		<section className="checkoutWrapper profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-8">
						<MyCart mycart={mycart} />
						<PickupAddress
							pickUpaddressHandler={pickUpaddressHandler}
							pickUpAddress={pickUpAddress}
							pickDropHanlder={pickDropHanlder}
						/>
						<DeliverAddress
							deliveraddressHandler={deliveraddressHandler}
							deliverAddres={deliverAddres}
							deliverPickHanlder={deliverPickHanlder}
						/>
					</div>

					<PriceSummary
						pickUp={pickDrop}
						onsubmitHandler={onsubmitHandler}
					/>
				</div>
			</div>
		</section>
	);
}

export default Checkout;
