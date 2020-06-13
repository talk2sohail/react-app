import React, { Fragment } from 'react';

function IconUtil({ item }) {
	const { name, icon } = item;
	return (
		<Fragment>
			<i className={`glyph-icon flaticon-${icon}`}></i>
			<p>{name}</p>
		</Fragment>
	);
}

export default IconUtil;
