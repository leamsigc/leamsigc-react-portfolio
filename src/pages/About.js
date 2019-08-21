import React from 'react';
import SVGWave from '../components/SVGWaves';
import LeamsigcWebSiteImage from '../images/leamsigcWebSite.png';
import DaytonaDevsWebSiteImage from '../images/daytonaDevs.png';
import ProfileImage from '../images/ismaelProfileImage.png';
import SocialMedia from '../components/SocialMedia';
import Button from '../components/Button';
export default function AboutPage() {
	return (
		<header className="header aboutpage">
			<header className="about__hero">
				<div className="container">
					<div className="about__hero--container___img">
						<img
							src={ProfileImage}
							alt="Ismael Garcia Canseco Web developer gissen Germany and Daytona Beach"
							className="hero__img"
						/>
					</div>
					<div className="about__hero--container___text">
						<div className="svg__contaniner">
							<svg viewBox="1135.5 163 60 80" width="100%">
								<path
									d="M1163.818 163l-.624 1.368c-3.488 7.693-10.332 15.319-16.373 23.451-6.048 8.131-11.321 16.846-11.321 26.853 0 15.634 13.444 28.328 30 28.328 16.556 0 30-12.694 30-28.328 0-27.982-30.45-50.742-30.45-50.742l-1.232-.93zm.834 3.638c1.554 1.231 8.666 7.031 15.389 15.627 6.724 8.596 13.059 19.989 13.059 32.407 0 14.408-12.342 26.062-27.6 26.062-15.258 0-27.6-11.654-27.6-26.062 0-9.255 4.926-17.537 10.879-25.551 5.621-7.562 12.039-14.83 15.873-22.481v-.002zm.848 25.372c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm3.6 3.399c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm-3.6 3.4c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-18 3.399c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm14.4 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-18 3.399c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm-25.2 3.4c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-25.2 3.399c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-32.4 3.399c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm-32.4 3.4c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-32.4 3.399c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-25.2 3.399c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm-25.2 3.4c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-18 3.399c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133s.54 1.133 1.2 1.133c.66 0 1.2-.51 1.2-1.133s-.54-1.133-1.2-1.133zm-10.8 3.399c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133zm7.2 0c-.66 0-1.2.51-1.2 1.133 0 .624.54 1.134 1.2 1.134.66 0 1.2-.51 1.2-1.134 0-.623-.54-1.133-1.2-1.133z"
									fill="#E3E3E3"
								/>
							</svg>
						</div>
						<h2>
							<strong className="big-text">Hello,</strong>
							<small className="text-small">
								<br />My name is Ismael Garcia. I'm a German-based
								<br />Front End and Back End Web
								<br />Developer building cool stuff.
							</small>
						</h2>
						<SocialMedia />
					</div>
				</div>
			</header>
			<SVGWave />
			<main className="about__main container">
				<div className="btn-container topFix">
					<Button />
				</div>

				<div className="text--container dark-bg">
					<h3 className="title">ABOUT ME</h3>
					<p className="text">
						1 year of extensive professional experience and providing skills in HTML5, CSS3, Javascript, Reactjs, VuejS,
						SASS/SCSS, Nodejs. Specializing in PSD to HTML5 semantic conversion with keen attention to details. Working
						knowledge of design tools such as Figma, Illustrator, Gimp. Currently learning React Native and WordPress
						theme development
					</p>
					<p className="text">Always ask questions to feed the curiosity and learn something new on the way.</p>
				</div>
				<div className="img--container">
					<img
						width="100%"
						height="300px"
						src={LeamsigcWebSiteImage}
						alt="Ismael garcia website  in different devices"
						className="img__main"
					/>
					<a target="_blank" href="https://github.com/leamsigc/leamsigc-react-portfolio" className=" btn btn-secondary">
						Code
					</a>
					<a target="_blank" href="https://leamsigc.com" className=" btn btn-secondary">
						Open
					</a>
				</div>

				<div className="img--container">
					<img
						width="100%"
						height="300px"
						src={DaytonaDevsWebSiteImage}
						alt="Ismael garcia website  in different devices"
						className="img__main"
					/>
					<div className="btn-container">
						<a target="_blank" href="https://github.com/leamsigc/DaytonaDevSolution" className=" btn btn-secondary">
							Code
						</a>
						<a target="_blank" href="https://daytonadevsolution.tk/" className=" btn btn-secondary">
							Open
						</a>
					</div>
					<div className="text--container">
						<h3 className="title">PLANNING</h3>

						<p className="text">
							The planning stage is arguably the most important, To sets the scope for the entire project. Communication
							and the attention to detail in the planning stage is key to a better experience for the client.
						</p>
					</div>
				</div>
				<div className="text--container list__container ">
					<h3 className="title text-right">THE PROCESS</h3>
					<ul>
						<li className="text">
							Analyzing and dividing design mockups for creating appropriate UI components and architecting the styles
							codebase.
						</li>
						<li className="text">Testing code in multiple browsers to ensure cross-browser compatibility.</li>
						<li className="text">
							Using JavaScript to leveraging common or complex interactive components of the web application.
						</li>
						<li className="text">Collaborating with UI/UX designers and other Developers.</li>
					</ul>
				</div>
			</main>
		</header>
	);
}
const AboutPageStyle = {
	background: 'var(--main-color)'
};
