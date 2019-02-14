import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import SVGWaves from './SVGWaves';
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
				<About />
				<Projects />
			</div>
		);
	}
}
