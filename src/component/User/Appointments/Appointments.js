import React from 'react';
import User from '../User';
import RepairingAppointment from './RepairingAppointment';
import CompletedAppointment from './CompletedAppointment';
import RevisionAppointment from './RevisionAppointment';
import CancelledAppointment from './CancelledAppointment';
import { Link, Switch, Route } from 'react-router-dom';

function Appointments({
	match: {
		params: { category },
	},
}) {
	console.log(category);
	return (
		<section className="profileWrapper">
			<div className="sectionWrapper">
				<div className="row justify-content-center">
					<User Active="appointments" />
					<div className="col-lg-9 col-12">
						<div className="userWrapper">
							<div className="userHeader">
								<h2>My Repair Appointments</h2>
							</div>
							<div className="userDetails">
								<div className="typesofAppointments d-flex align-items-center justify-content-start">
									<Link
										to="/appointments/all"
										className={
											category == 'all' ? 'active' : ''
										}
									>
										All
									</Link>
									<Link
										to="/appointments/completed"
										className={
											category == 'completed'
												? 'active'
												: ''
										}
									>
										Completed
									</Link>
									<Link
										to="/appointments/cancelled"
										className={
											category == 'cancelled'
												? 'active'
												: ''
										}
									>
										Cancelled
									</Link>
									<Link
										to="/appointments/revisions"
										className={
											category == 'revisions'
												? 'active'
												: ''
										}
									>
										Revisions
									</Link>
									<Link
										to="/appointments/repairing"
										className={
											category == 'repairing'
												? 'active'
												: ''
										}
									>
										Repairing
									</Link>
								</div>
								<Switch>
									<Route
										path="/appointments/completed"
										exact
										component={CompletedAppointment}
									/>
									<Route
										path="/appointments/completed"
										exact
										component={RepairingAppointment}
									/>
									<Route
										path="/appointments/cancelled"
										exact
										component={CancelledAppointment}
									/>
									<Route
										path="/appointments/revisions"
										exact
										component={RevisionAppointment}
									/>
									<Route
										path="/appointments/repairing"
										exact
										component={RepairingAppointment}
									/>
									<RepairingAppointment />
									<CompletedAppointment />
									<CancelledAppointment />
									<RevisionAppointment />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Appointments;
