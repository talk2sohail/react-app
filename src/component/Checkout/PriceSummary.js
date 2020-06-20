import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function PriceSummary({ pickUp, onsubmitHandler, error }) {
	let myCart = localStorage.getItem('myCart');
	myCart = JSON.parse(myCart);
	const [checked, setchecked] = useState(false);
	const onClickHandler = () => {
		setchecked(!checked);
	};
	return (
		<div className="col-12 col-lg-4">
			<div className="priceSummary">
				<div className="priceHeader">
					<h3>Price Summary</h3>
				</div>
				<div className="priceBody">
					{myCart.map((item, index) => (
						<span
							className="price priceHeader"
							style={{ fontSize: 14 }}
							key={index}
						>
							<span
								style={{
									fontWeight: 'bold',
									display: 'block',
									paddingBottom: 11,
								}}
							>
								{item.brand} {item.model}
							</span>
							{item.issue.map((doc, index) => (
								<ul
									style={{
										paddingLeft: 0,
										display: 'flex',
										justifyContent: 'space-between',
									}}
									key={index}
								>
									<li style={{ listStyle: 'none' }}>
										{doc.issue}
									</li>
									<span
										style={{ paddingLeft: 85 }}
										className="float-right"
									>
										Rs {doc.price[0]} - Rs {doc.price[1]}
									</span>
								</ul>
							))}
						</span>
					))}
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
						<input
							type="checkbox"
							checked={checked ? 'checked' : ''}
							id="agree"
							name=""
							onClick={onClickHandler}
						/>
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
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<div onClick={() => onsubmitHandler(checked)}>
					<a
						style={{ cursor: 'pointer' }}
						className="d-block text-center btnBook"
					>
						BOOK NOW
					</a>
				</div>
			</div>
		</div>
	);
}

export default PriceSummary;

{
	/* <div className="priceBody">
											{this.state.cart_details.map((cart, i) => {
												return (
													<span
														className="price priceHeader"
														style={{ fontSize: 14 }}
														key={i}
													>
														<span
															style={{
																fontWeight: "bold",
																display: "block",
																paddingBottom: 11,
															}}
														>
															{cart.brand} {cart.mobile}
														</span>
														{cart.issue.map((iss, j) => {
															return (
																<ul
																	style={{
																		paddingLeft: 0,
																		display: "flex",
																		justifyContent: "space-between",
																	}}
																	key={j}
																>
																	<li style={{ listStyle: "none" }}>
																		{iss.issue_name}
																	</li>
																	<span
																		style={{ paddingLeft: 85 }}
																		className="float-right"
																	>
																		Rs {iss.low} - Rs {iss.high}
																	</span>
																</ul>
															);
														})}
													</span>
												);
											})}
											<p className="tax">
												Tax <span className="float-right">Rs 25</span>
		 */
}
