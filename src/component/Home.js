import React, { Fragment, useEffect } from 'react';

import Banner from './Banner.js';
import Help from './help/Help';
import Procedure from './procedure/Procedures';
import Service from './service/Services';
import Brands from './brand/Brands';
import Collaborate from './collaborate/Collaborate';
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
