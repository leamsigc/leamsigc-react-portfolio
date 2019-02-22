import React, { Component, Fragment } from 'react';
import UserDetails from './UserDetails';
import ProjectDetail from './ProjectDetail';
import DisplayUserData from './DisplayUserData';
import DisplayFormErrors from './DisplayFormErrors';

export default class index extends Component {
	state = {
		step: 1,
		name: '',
		email: '',
		projectDescription: '',
		typeOfProject: '',
		projectName: '',
		FormErrors: { email: '', name: '' },
		emailValid: false,
		formValid: false
	};
	//next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step >= 3 ? 3 : step + 1
		});
	};
	//go back
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step <= 1 ? 1 : step - 1
		});
	};

	handleChange = input => e => {
		const name = e.target.name;
		this.setState({
			[input]: e.target.value
		});
	};

	checkSteps(step, values) {
		if (step == 1) return <UserDetails values={values} textChange={this.handleChange} nextStep={this.nextStep} />;
		else if (step === 2) {
			return (
				<ProjectDetail values={values} textChange={this.handleChange} nextStep={this.nextStep} goBack={this.prevStep} />
			);
		} else if (step == 3) {
			return <DisplayUserData values={values} nextStep={this.nextStep} goBack={this.prevStep} />;
		} else if (step == 3) {
			return 'Thank you for your input..';
		}
	}
	render() {
		const { step } = this.state;
		const { name, email, projectDescription, typeOfProject, projectName, FormErrors } = this.state;
		const values = { name, email, projectDescription, typeOfProject, projectName };

		return (
			<div>
				<h1>Form go here man</h1>
				<form>
					<DisplayFormErrors errors={FormErrors} />
					{this.checkSteps(step, values)}
				</form>
			</div>
		);
	}
}
