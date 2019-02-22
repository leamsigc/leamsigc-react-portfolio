import React, { Component, Fragment } from 'react';
import UserDetails from './UserDetails';
import ProjectDetail from './ProjectDetail';
import DisplayUserData from './DisplayUserData';
import DisplayFormErrors from './DisplayFormErrors';
import SVGWaves from '../SVGWaves';

export default class index extends Component {
	state = {
		step: 1,
		name: '',
		email: '',
		projectDescription: '',
		typeOfProject: '',
		projectName: '',
		FormErrors: { email: '', name: '' }
	};
	//next step
	nextStep = () => {
		const { step } = this.state;
		if (step == 1) {
			console.log(this.validateEmail());
			this.validateEmail() ? this.setState({ step: step + 1 }) : this.setState({ step: step });
		} else {
			this.setState({
				step: step >= 3 ? 3 : step + 1
			});
		}
	};
	//go back
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step <= 1 ? 1 : step - 1
		});
	};

	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		});
	};
	validateEmail = () => {
		let emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		this.setState({
			FormErrors: {
				email: emailValid === null ? 'Enter a valid Email' : ''
			}
		});

		return emailValid == null ? false : true;
	};

	checkSteps(step, values) {
		if (step == 1)
			return <UserDetails active={true} values={values} textChange={this.handleChange} nextStep={this.nextStep} />;
		else if (step === 2) {
			return (
				<ProjectDetail
					active={true}
					values={values}
					textChange={this.handleChange}
					nextStep={this.nextStep}
					goBack={this.prevStep}
				/>
			);
		} else if (step == 3) {
			return <DisplayUserData active={true} values={values} nextStep={this.nextStep} goBack={this.prevStep} />;
		} else if (step == 3) {
			return 'Thank you for your input..';
		}
	}
	render() {
		const { step } = this.state;
		const { name, email, projectDescription, typeOfProject, projectName, FormErrors } = this.state;
		const values = { name, email, projectDescription, typeOfProject, projectName };

		return (
			<div className="form__container">
				<div className="form__container--box">
					<ul>
						<li>Step 1</li>
						<li>Step 2</li>
						<li>Step 3</li>
					</ul>
					<form className="form">
						<DisplayFormErrors errors={FormErrors} />
						{this.checkSteps(step, values)}
					</form>
				</div>
				<SVGWaves />
			</div>
		);
	}
}
