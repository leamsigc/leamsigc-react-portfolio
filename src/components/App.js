import React, { Component } from 'react';
import Header from './Header';
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			menuState: 'close'
		};
		this.toggleMenu.bind(this);
	}

	toggleMenu(menustate) {
		console.log(menustate);
		this.setState({
			menuState: menustate
		});
	}
	render() {
		return (
			<div>
				<Header menuToggler={this.toggleMenu} />
			</div>
		);
	}
}
