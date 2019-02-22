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
		const { values, textChange, active } = this.props;
		return (
			<div className={`form__card ${active ? 'active' : ''}`}>
				<div className="input_container">
					<label htmlFor="projectName">Project Name:</label>
					<input
						name="projectName"
						type="text"
						placeholder="Please enter a project name"
						onChange={textChange('projectName')}
						value={values.projectName}
					/>
				</div>
				<div className="input_container">
					<label htmlFor="projectDescription">What are you hopping to accomplish let me know your expectation</label>
					<textArea
						name="projectDescription"
						type="text"
						placeholder="Please enter a small descrition of the project.."
						onChange={textChange('projectDescription')}
						value={values.projectDescription}
					/>
				</div>
				<div className="input_container">
					<label htmlFor="typeOfProject">What type of projects are you looking for?</label>
					<ul>
						<li>New Project from scratch</li>
						<li>Fix or enhance existing project</li>
					</ul>
					<input
						name="typeOfProject"
						type="text"
						placeholder="Type your answer here .."
						onChange={textChange('typeOfProject')}
						value={values.typeOfProject}
					/>
				</div>
				<button onClick={this.goBack}>Prev</button>
				<button onClick={this.continue}>Next</button>
			</div>
		);
	}
}
