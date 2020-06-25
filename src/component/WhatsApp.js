import React from 'react';

function WhatsApp() {
	return (
		<div className="col-4">
			<div className="whatsappWrapper">
				<a
					href="https://wa.me/7278885292?text=I'm%20interested%20in%20your%20car%20for%20sale"
					target="_blank"
				>
					<img src="/assets/images/icons/whatsapp.png" alt="" />
				</a>
				<span className="pulse-ring"></span>
			</div>
		</div>
	);
}

export default WhatsApp;
