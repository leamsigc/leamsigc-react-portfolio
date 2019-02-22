import React, { Component, Fragment } from 'react';

export default class ProjectDetail extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};
	goBack = e => {
		e.preventDefault();
		this.props.goBack();
	};
	render() {
		const { values } = this.props;
		const { name, email, projectDescription, typeOfProject, projectName } = values;
		return (
			<Fragment>
				<div className="display__user--data">
					<p>Name:{name}</p>
					<p>Your email:{email}</p>
					<p>Type of project:{projectName}</p>
					<p>Description:{projectDescription}</p>
					<p>Type of project:{typeOfProject}</p>
				</div>
				<button onClick={this.goBack}>Prev</button>
				<button onClick={this.continue}>Submit</button>
			</Fragment>
		);
	}
}
