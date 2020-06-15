import React, { Fragment, useEffect } from 'react';
import Collaborare from '../repairAndCollaborate/Collaborate';

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<Fragment>
			<section className="aboutBannerWrap">
				<div className="row align-items-center no-gutters">
					<div className="col-12 col-lg-6">
						<div className="content">
							<h1>Lorem Ipsum dolor sit amet elit est</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Impedit, laudantium debitis
								iusto incidunt numquam voluptate fuga beatae
								nobis sapiente consequuntur aspernatur est illo
								neque animi unde deserunt provident accusantium
								in.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<img
							src="assets/images/background/mobirepair.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="floatingCont">
					<h2>Rxzaf sdf sdf</h2>
					<p className="font-weight-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium tenetur consequuntur, ipsa perspiciatis
						nobis error quam nam esse cupiditate in officiis ipsa
						perspiciatis nobis error quam nam esse cupiditate in
						officiis
					</p>
					<p className="mb-0 font-weight-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium tenetur consequuntur
					</p>
				</div>
			</section>

			<section className="ourStoryWrap">
				<div className="sectionWrapper">
					<div className="row align-items-center justify-content-between">
						<div className="col-12 col-lg-6">
							<h2 className="font-weight-light">
								Mission & Vision
							</h2>
							<p className="font-weight-light">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Ipsum praesentium nostrum
								velit delectus quas harum, vel, aperiam
								excepturi neque voluptates dicta id iure at,
								veritatis consequuntur tempore accusantium amet
								ab.
							</p>
							<p className="font-weight-light">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Ipsum praesentium nostrum
								velit delectus quas harum, vel, aperiam
								excepturi neque voluptates dicta id iure at,
								veritatis consequuntur tempore accusantium amet
								ab.
							</p>
							<p className="font-weight-light">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Ipsum praesentium nostrum
								velit delectus quas harum, vel, aperiam
								excepturi neque voluptates dicta id iure at,
								veritatis consequuntur tempore accusantium amet
								ab.
							</p>
						</div>
						<div className="col-12 col-lg-6">
							<img
								className="d-block mx-auto img-fluid"
								src="assets/images/icons/team_spirit.svg"
								height="400"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<Collaborare />
		</Fragment>
	);
}

export default About;
