import React, { useEffect } from 'react';

function PickDropWrap({
	option1,
	option2,
	id,
	liId1,
	liId2,
	lihref1,
	lihref2,
	control1,
	control2,
	dropHandler,
	pickUpHandler,
}) {
	return (
		<ul className="nav nav-tabs mb-4 pb-2" id={id} role="tablist">
			<li className="nav-item" onClick={pickUpHandler}>
				<a
					className="nav-link active"
					id={liId1}
					data-toggle="tab"
					href={lihref1}
					role="tab"
					aria-controls={control1}
					aria-selected="true"
				>
					{option1}
				</a>
			</li>
			<li className="nav-item ml-3" onClick={dropHandler}>
				<a
					className="nav-link"
					id={liId2}
					data-toggle="tab"
					href={lihref2}
					role="tab"
					aria-controls={control2}
					aria-selected="false"
				>
					{option2}
				</a>
			</li>
		</ul>
	);
}

export default PickDropWrap;
