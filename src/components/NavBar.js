import React, { Component, Fragment } from 'react';

export default class NavBar extends Component {
	render() {
		const navlinks = [
			{
				name: 'home',
				to: '#home',
				status: true
			},
			{
				name: 'about',
				to: '#about'
			},
			{
				name: 'contact',
				to: '#contact'
			}
		];
		const { menuStatusClass } = this.props;
		return (
			<Fragment>
				<nav className={`nav__container ${menuStatusClass}`}>
					<ul className="nav__list">
						{navlinks.map((link, index) => {
							return (
								<li key={index} className="nav__list--item">
									<a className="nav__link" href={link.to}>
										{link.name.toUpperCase()}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</Fragment>
		);
	}
}
