import React, { Fragment } from 'react';
import SocialMedia from './SocialMedia';
export default function Footer() {
	return (
		<Fragment>
			<footer className="footer">
				<div className="container">
					<div className="footer__logo">Leamsigc</div>
					<h3>Web Developer </h3>
					<SocialMedia />
				</div>
			</footer>
		</Fragment>
	);
}
