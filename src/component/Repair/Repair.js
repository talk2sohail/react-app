import React, { useEffect } from 'react';
import RepairBanner from './RepairBanner';
import Collborate from '../collaborate/Collaborate';
import RepairLogos from './ReapirLogo';
function Repair() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div>
			<RepairBanner />
			<RepairLogos />
			<Collborate />
		</div>
	);
}

export default Repair;
