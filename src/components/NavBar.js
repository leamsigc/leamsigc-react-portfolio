import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
export default class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			menuStatus: 'close'
		};
	}

	toggleMenu(menuState) {
		this.setState({
			menuStatus: this.state.menuStatus === 'close' ? 'open' : 'close'
		});
	}
	render() {
		const navlinks = [
			{
				name: 'home',
				to: '/',
				status: true
			},
			{
				name: 'about',
				to: '/about'
			},
			{
				name: 'contact',
				to: '/contact'
			}
		];
		return (
			<Fragment>
				<div
					className={`toggle__container ${this.state.menuStatus === 'open' ? 'menu__open' : ''}`}
					onClick={() => this.toggleMenu('open')}
				>
					<span className="menu__bar" />
				</div>
				<div className={`nav__background ${this.state.menuStatus === 'open' ? 'menu__open' : ''}`} />
				<nav className={`nav__container ${this.state.menuStatus === 'open' ? 'menu__open' : ''}`}>
					<ul className="nav__list">
						{navlinks.map((link, index) => {
							return (
								<li key={index} className="nav__list--item">
									<Link onClick={this.toggleMenu} className="nav__link" to={link.to}>
										{link.name.toUpperCase()}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</Fragment>
		);
	}
}
