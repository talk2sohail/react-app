import React from 'react';

function ShopAddress({ id, role, label }) {
	return (
		<div
			className="tab-pane fade"
			id={id}
			role={role}
			aria-labelledby={label}
		>
			<div className="savedAddress selected">
				<h3>
					Mobi Quick <span>9831983198</span>
				</h3>
				<p>
					10, Park Street, Kolkata-700 016. Park Street Police Station
				</p>
				<p>Kolkata, West Bengal - 700016</p>
			</div>
		</div>
	);
}

export default ShopAddress;
