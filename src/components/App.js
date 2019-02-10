import React, { Component } from 'react';
import Header from './Header';
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			menuState: 'close'
		};
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}
