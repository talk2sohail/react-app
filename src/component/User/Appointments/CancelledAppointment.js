import React from 'react';
import AppointmentFooter from './AppointmentUtil.js/AppointmentFooter';

function CancelledAppointment() {
	return (
		<div className="orderBlock">
			<div className="orderHeader d-flex align-items-center justify-content-between">
				<span className="orderStatus cancelled">Cancelled</span>
				<p className="d-none d-lg-block">
					<span>Order Time</span>
					12-03-2020 02:28
				</p>
				<p className="d-none d-lg-block">
					<span>Order Number</span>
					201485136
				</p>
				<div>
					<a href="javascript:void(0)" className="gradientText">
						Order Details
					</a>
				</div>
			</div>
			<div className="orderBody d-flex justify-content-start flex-wrap">
				<div className="imgWrap">
					<img
						src="/assets/images/mobiles/oneplus/oneplussixt.png"
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
					<p className="price">Rs 1399</p>
				</div>
				<div className="contentWrapTwo">
					<h3>
						<span className="cancelled"></span>
						Repair cancelled
					</h3>
				</div>
			</div>
			<AppointmentFooter />
		</div>
	);
}

export default CancelledAppointment;
