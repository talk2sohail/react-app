import React from 'react';
import User from '../User';

function Appointments() {
	return (
		<section className="profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<User Active="appointments" />
					<div className="col-lg-9 col-12">
						<div className="userWrapper">
							<div className="userHeader">
								<h2>My Repair Appointments</h2>
							</div>
							<div className="userDetails">
								<div className="typesofAppointments d-flex align-items-center justify-content-start">
									<a
										href="javascript:void(0)"
										className="active"
									>
										All
									</a>
									<a href="javascript:void(0)">Completed</a>
									<a href="javascript:void(0)">Cancelled</a>
									<a href="javascript:void(0)">Revisions</a>
								</div>
								<div className="emptyBlock">
									<img
										src="assets/images/icons/no_data.svg"
										className="img-fluid"
										alt=""
									/>
									<p>No Repair Appointments</p>
								</div>
								<div className="orderBlock">
									<div className="orderHeader d-flex align-items-center justify-content-between">
										<span className="orderStatus repairing">
											Repairing
										</span>
										<p className="d-none d-lg-block">
											<span>Order Time</span>
											12-03-2020 02:28
										</p>
										<p className="d-none d-lg-block">
											<span>Order Number</span>
											201485136
										</p>
										<div>
											<a
												href="javascript:void(0)"
												className="gradientText"
											>
												Order Details
											</a>
										</div>
									</div>
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
												<span>Color: </span> Midnight
												Black
											</p>
											<p>
												<span>Issues: </span>
												Screen Repair, Mic Repair
											</p>
											<p className="price">Rs 1399</p>
										</div>
										<div className="contentWrapTwo">
											<h3>
												<span className="underRepair"></span>
												Repair to be completed by
												13-03-2020
											</h3>
											<p>Device given at shop</p>
										</div>
									</div>
									<div className="orderFoooter d-flex align-items-center justify-content-between">
										<p>
											<span>Shop Name</span>
											Mobi Quick
										</p>
										<p>
											<span>Contact Number</span>
											9831983198
										</p>
										<div className="buttons">
											<a href="javascript:void(0)">
												Download Invoice
											</a>
										</div>
									</div>
								</div>
								<div className="orderBlock">
									<div className="orderHeader d-flex align-items-center justify-content-between">
										<span className="orderStatus completed">
											Completed
										</span>
										<p className="d-none d-lg-block">
											<span>Order Time</span>
											12-03-2020 02:28
										</p>
										<p className="d-none d-lg-block">
											<span>Order Number</span>
											201485136
										</p>
										<div>
											<a
												href="javascript:void(0)"
												className="gradientText"
											>
												Order Details
											</a>
										</div>
									</div>
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
												<span>Color: </span> Midnight
												Black
											</p>
											<p>
												<span>Issues: </span>
												Screen Repair, Mic Repair
											</p>
											<p className="price">Rs 1399</p>
										</div>
										<div className="contentWrapTwo">
											<h3>
												<span className="repairCompleted"></span>
												Repair completed on 13-03-2020
											</h3>
											<p>Device picked up from home</p>
											<div className="buttons">
												<a href="javascript:void(0)">
													Download Invoice
												</a>
											</div>
										</div>
									</div>
									<div className="orderFoooter d-flex align-items-center justify-content-between">
										<p>
											<span>Shop Name</span>
											Mobi Quick
										</p>
										<p>
											<span>Contact Number</span>
											9831983198
										</p>
									</div>
								</div>
								<div className="orderBlock">
									<div className="orderHeader d-flex align-items-center justify-content-between">
										<span className="orderStatus cancelled">
											Cancelled
										</span>
										<p className="d-none d-lg-block">
											<span>Order Time</span>
											12-03-2020 02:28
										</p>
										<p className="d-none d-lg-block">
											<span>Order Number</span>
											201485136
										</p>
										<div>
											<a
												href="javascript:void(0)"
												className="gradientText"
											>
												Order Details
											</a>
										</div>
									</div>
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
												<span>Color: </span> Midnight
												Black
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
									<div className="orderFoooter d-flex align-items-center justify-content-between">
										<p>
											<span>Shop Name</span>
											Mobi Quick
										</p>
										<p>
											<span>Contact Number</span>
											9831983198
										</p>
									</div>
								</div>
								<div className="orderBlock">
									<div className="orderHeader d-flex align-items-center justify-content-between">
										<span className="orderStatus revision">
											Revision
										</span>
										<p className="d-none d-lg-block">
											<span>Order Time</span>
											12-03-2020 02:28
										</p>
										<p className="d-none d-lg-block">
											<span>Order Number</span>
											201485136
										</p>
										<div>
											<a
												href="javascript:void(0)"
												className="gradientText"
											>
												Order Details
											</a>
										</div>
									</div>
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
												<span>Color: </span> Midnight
												Black
											</p>
											<p>
												<span>Issues: </span>
												Screen Repair, Mic Repair
											</p>
											<p>
												<span>Revision: </span>
												Screen Repair, Speaker Repair
											</p>
											<p className="price">Rs 1299</p>
										</div>
										<div className="contentWrapTwo">
											<h3>
												<span className="revision"></span>
												Revision Added
											</h3>
											<p>Device picked up from home</p>
											<div className="buttons">
												<a href="javascript:void(0)">
													Download Invoice
												</a>
											</div>
										</div>
									</div>
									<div className="orderFoooter d-flex align-items-center justify-content-between">
										<p>
											<span>Shop Name</span>
											Mobi Quick
										</p>
										<p>
											<span>Contact Number</span>
											9831983198
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Appointments;
