import React, { useEffect } from 'react';
import FaqBanner from './FaqBanner';
import FaqBody from './FaqBody';
import Collaborate from '../RepairAndCollaborate/Collaborate';
function Faq() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<>
			<FaqBanner />
			<FaqBody />
			<Collaborate />
		</>
	);
}

export default Faq;
