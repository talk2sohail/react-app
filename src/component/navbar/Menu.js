import React from 'react';
import { Link } from 'react-router-dom';
function Menu({ item }) {
	return (
		<div className="menuItem">
			<Link to={`/${item.page}`}>{item.menu}</Link>
		</div>
	);
}

export default Menu;
