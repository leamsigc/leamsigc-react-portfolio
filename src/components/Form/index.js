import React, { Component, Fragment } from 'react';
import UserDetails from './UserDetails';

export default class index extends Component {
	state = {
		step: 1,
		name: '',
		email: '',
		projectDescription: '',
		typeOfProject: ''
	};
	//next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};
	//go back
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		});
	};
	render() {
		const { step } = this.state;
		const { name, email, projectDescription, typeOfProject } = this.state;
		const values = { name, email, projectDescription, typeOfProject };
		return (
			<Fragment>
				<h1>Form go here man</h1>
				<form>
					<UserDetails />
				</form>
			</Fragment>
		);
	}
}
