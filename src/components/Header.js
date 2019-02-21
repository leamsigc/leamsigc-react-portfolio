import React, { Component } from 'react';
import headerBackgroundimg from '../images/leamsigcHomeBG.svg';
import SVGWaves from './SVGWaves';
import Button from './Button';
export default class Header extends Component {
	render() {
		return (
			<div style={HeaderContainerStyle}>
				<header style={headerStyle}>
					<div className="logo__container">
						Leam<span className="dark-letters">sigc</span>
					</div>

					<div className="container">
						<h1 className="title">
							Front & Back
							<br /> End <br /> <span className="letter-color">D</span>eveloper <br />
							<p className="text-small">
								<br /> Need a website or a simple fix for your problem?
								<br /> Get a beautiful and functional website
								<br /> tailored to your needs.
								<br />
							</p>
						</h1>
						<div className="btn-container">
							<Button />
						</div>
					</div>
				</header>
				<SVGWaves />
			</div>
		);
	}
}

const headerStyle = {
	background: `url(${headerBackgroundimg})`,
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
};
const HeaderContainerStyle = {
	position: 'relative',
	minHeight: '100vh',
	background: 'linear-gradient(to right ,#625ACA,#AB5CC6)'
};
