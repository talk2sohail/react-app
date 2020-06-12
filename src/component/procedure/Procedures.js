import React, { useState } from 'react';
import ProcedureHead from './ProcedureHead';
import { procedureData } from '../../data/HomeData';
import Procedure from './Procedure';
function Procedures() {
	const [procedure, setProcedure] = useState(procedureData);
	return (
		<section className="procedureWrapper">
			<div className="sectionWrapper">
				<div className="row align-items-center justify-content-between">
					<ProcedureHead />
					{procedure.map(item => (
						<Procedure key={item.key} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Procedures;
