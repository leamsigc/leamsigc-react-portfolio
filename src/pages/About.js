import React from 'react';
import SVGWave from '../components/SVGWaves';

export default function AboutPage() {
	return (
		<header className="header aboutpage">
			<SVGWave />
			<div className="container">
				<div className="profile">
					<img
						src="https://avatars1.githubusercontent.com/u/23272293?s=400&u=89e7a932f09ad2d0f4e7caa81f71d3137ac57032&v=4"
						alt="Ismael garcia web developer daytona beach florida"
					/>
				</div>
				<h2 className="title-sub">ISMAEL GARCIA || WEB DEVELOPER</h2>
				<p>
					We are always ready for your project. We work together with clients to create a site that fits them and their
					needs. Conscientious learner and goal-oriented team player knowledgeable of front and back end development
				</p>
				<p>
					I'm a Daytona Beach, Fl based web developer, creating awesome and cutting edge solutions for different clients
					around the world.
				</p>
			</div>
		</header>
	);
}
const AboutPageStyle = {
	background: 'var(--main-color)'
};
