import React, { Fragment, useEffect } from 'react';
import FaqBanner from './FaqBanner';
import FaqBody from './FaqBody';
import Collaborate from '../repairAndCollaborate/Collaborate';
function Faq() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<Fragment>
			<FaqBanner />
			<FaqBody />
			<Collaborate />
		</Fragment>
	);
}

export default Faq;
