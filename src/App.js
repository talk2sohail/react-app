import React from 'react';
import Home from './component/Home';
import TopBar from './component/navbar/TopBar';
import NavBar from './component/navbar/NavBar';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Repair from './component/Repair/Repair';
import Page404 from './component/Error404';
import Checkout from './component/checkout/Checkout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Faq from './component/FAQ/Faq';
import ThankYou from './component/ThankYou';
import UserCart from './component/UserCart';
function App() {
	return (
		<Router>
			<div id="site-wrapper">
				<TopBar />
				<NavBar />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/faq" component={Faq} exact />
					<Route path="/about" component={About} exact />
					<Route path="/repair" component={Repair} exact />
					<Route path="/checkout" component={Checkout} exact />
					<Route path="/mycart" component={UserCart} exact />
					<Route
						path="/checkout/thankyou"
						component={ThankYou}
						exact
					/>
					<Route component={Page404} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
