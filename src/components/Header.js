import React from 'react';
import headerBackgroundimg from '../images/leamsigcHomeBG.svg';
export default function Header() {
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
							<br /> With you’r business goals on mint.
						</p>
					</h1>
					<div className="btn-container">
						<a href="#" className="btn btn-main">
							Start Your Project
						</a>
					</div>
				</div>
			</header>
		</div>
	);
}

const headerStyle = {
	background: `url(${headerBackgroundimg})`,
	backgroundAttachment: 'fixed',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
};
const HeaderContainerStyle = {
	background: 'linear-gradient(to right ,#625ACA,#AB5CC6)'
};
