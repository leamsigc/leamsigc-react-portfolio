import React, { Component } from 'react';
import Form from '../components/Form';
import SVGWaves from '../components/SVGWaves';
export default class Contact extends Component {
	render() {
		return (
			<div className="about contact__page">
				<SVGWaves />
				<h2>COMMUNICATION IS THE KEY FOR A GOOD RELATIONSHIPS </h2>
				<h3 className="title-sub--secondary">Let's get started! </h3>
				<p className="description">
					Please Take your time and briefly describe your project so I can better understand what you're looking for or
					what is the scope of the project
				</p>
				<Form />
			</div>
		);
	}
}
