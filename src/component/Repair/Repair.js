import React, { useEffect } from 'react';
import RepairBanner from './RepairBanner';
import Collborate from '../RepairAndCollaborate/Collaborate';
import RepairLogos from './ReapirLogo';
import RepairBrand from './RepairBrands';
import Services from '../Service/Services';

function Repair() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<>
			<RepairBanner />
			<RepairLogos />
			<RepairBrand />
			<Services />
			<Collborate />
		</>
	);
}

export default Repair;
