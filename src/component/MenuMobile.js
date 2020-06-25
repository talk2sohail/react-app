import React from 'react';
import { Link } from 'react-router-dom';
function MenuMobile({ handleMobile }) {
	return (
		<div className="mobileMenuWrapperOuter d-lg-none">
			<div className="mobileMenuWrapper">
				<div className="mobile-menu-wrapper-header d-flex align-items-center position-relative">
					<a
						className="mobileMenuCloseWrapper"
						href="javascript:void(0);"
						onClick={handleMobile}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="#fff"
						>
							<path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
						</svg>
					</a>
					<img
						src="/assets/images/icons/collaborate.svg"
						width="100"
						alt=""
					/>
					<div className="mobile-menu-header-inner">
						<a href="javascript:void(0)">Hey Javed,</a>
						<span>Welcome back</span>

						<a
							href=""
							className="d-none"
							data-toggle="modal"
							data-target="#loginModalCenter"
						>
							Login / Signup
						</a>
					</div>
				</div>
				<nav
					className="mobileMenu d-flex flex-column"
					onClick={handleMobile}
				>
					<div className="borders">
						<Link to="/" className="mobileMenuLink">
							Home
						</Link>
						<Link to="/about" className="mobileMenuLink">
							About Us
						</Link>
						<Link to="/repair" className="mobileMenuLink">
							Repair
						</Link>
						<a href="javascript:void(0)" className="mobileMenuLink">
							Brand
						</a>
						<a href="javascript:void(0)" className="mobileMenuLink">
							New Offers
						</a>
						<a href="javascript:void(0)" className="mobileMenuLink">
							Our Stores
						</a>
					</div>
					<div className="borders">
						<Link to="/profile" className="mobileMenuLink">
							Profile
						</Link>
						<a href="/appointments/all" className="mobileMenuLink">
							Repair Appointments
						</a>
						<Link to="/address" className="mobileMenuLink">
							Saved Address
						</Link>
					</div>
					<div className="borders">
						<a href="javascript:void(0)" className="mobileMenuLink">
							Collaborate
						</a>
						<a href="javascript:void(0)" className="mobileMenuLink">
							Blog
						</a>
					</div>
					<div className="borders">
						<Link to="/faq" className="mobileMenuLink">
							FAQs
						</Link>
						<a href="javascript:void(0)" className="mobileMenuLink">
							Feedback
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default MenuMobile;
