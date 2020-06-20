import React, { useEffect, useState } from 'react';
import { issueData } from '../../data/RepairData';
function IssuesSelection({ issueHandler, state }) {
	const [issues, setIssues] = useState(issueData);
	useEffect(() => {
		window.scrollTo(0, 500);
	}, []);

	return (
		<div className="row no-gutters justify-content-start align-items-center issueSelection selectOption">
			{issues.map((item, index) => (
				<div className="col-12 col-md-6 col-lg-4" key={index}>
					<div className="branWrap ">
						<div className="iconWrap">
							<img
								src="assets/images/icons/broken-phone.png"
								alt=""
							/>
						</div>
						<div className="contentWrap">
							<h4>{item.issue}</h4>
							<p>{item.discription}</p>
							<p className="price">
								Rs {item.minPrice} - Rs {item.maxPrice}
							</p>
						</div>
						<a
							href="javascript:void(0)"
							className={state[index] ? 'remove' : ''}
							onClick={() => {
								issueHandler(
									index,
									item.issue,
									item.minPrice,
									item.maxPrice
								);
							}}
						>
							<span className="">+ Add</span>
							<span
								className={state[index] !== {} ? '' : 'd-none'}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="#fff"
								>
									<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
								</svg>
								Remove
							</span>
						</a>
					</div>
				</div>
			))}
		</div>
	);
}

export default IssuesSelection;
