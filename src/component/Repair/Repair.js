import React, { useEffect } from 'react';
import RepairBanner from './RepairBanner';
import Collborate from '../collaborate/Collaborate';
import RepairLogos from './ReapirLogo';
import RepairBrand from './RepairBrands';
import Services from '../service/Services';
function Repair() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div>
			<RepairBanner />
			<RepairLogos />
			<RepairBrand />
			<Services />
			<Collborate />
		</div>
	);
}

export default Repair;
