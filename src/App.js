import React, { useState } from 'react';
import TopBar from './component/navbar/TopBar';
import NavBar from './component/navbar/NavBar';
import Banner from './component/Banner.js';
import Help from './component/help/Help';
import Procedure from './component/procedure/Procedures';
import Service from './component/service/Services';
import { BrowserRouter as Router } from 'react-router-dom';
import Brands from './component/brand/Brands';
import Collaborate from './component/collaborate/Collaborate';
import Footer from './component/footer/Footer';
import MenuMobile from './component/MenuMobile';
import Modal from './component/Modal';
function App() {
	// const [mobileMode, setMobileMode] = useState(false);
	// const handleMobileMode = () => {};
	return (
		<Router>
			<div id="site-wrapper">
				<TopBar />
				<NavBar />
				<Banner />
				<Help />
				<Procedure />
				<Service />
				<Brands />
				<Collaborate />
				<Footer />
				{/* <Modal /> */}
			</div>
		</Router>
	);
}

export default App;
