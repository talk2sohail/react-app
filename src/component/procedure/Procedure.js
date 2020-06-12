import React from 'react';

function Procedure({ item }) {
	const { classColor, procedureName, discription, icon, img } = item;
	return (
		<div className="col-12 col-md-6 col-lg-3">
			<div className={`procedure ${classColor}`}>
				<div className="imgWrap">
					<div className={`icon ${icon}`}>
						<i className={`glyph-icon flaticon-${img}`}></i>
					</div>
				</div>
				<div className="contentWrap">
					<h3 className="">{procedureName}</h3>
					<p className="">{discription}</p>
				</div>
			</div>
		</div>
	);
}

export default Procedure;
