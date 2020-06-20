import React, { Fragment, useEffect } from 'react';

import Banner from './Banner.js';
import Help from './Help/Help';
import Procedure from './Procedure/Procedures';
import Service from './Service/Services';
import Brands from './Brand/Brands';
import Collaborate from './RepairAndCollaborate/Collaborate';
import Modal from './Modal';
function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<Fragment>
			<Banner />
			<Help />
			<Procedure />
			<Service />
			<Brands />
			<Collaborate />
			<Modal />
		</Fragment>
	);
}

export default Home;
