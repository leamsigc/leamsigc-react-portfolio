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
		const { values, textChange } = this.props;
		return (
			<Fragment>
				<div className="input_container">
					<label>Project:</label>
					<input type="text" placeholder="Name here" onChange={textChange('projectName')} value={values.projectName} />
				</div>
				<div className="input_container">
					<label>What are you hopping to accomplish let me know your expectation</label>
					<input
						type="text"
						placeholder="Type your answer here .."
						onChange={textChange('projectDescription')}
						value={values.projectDescription}
					/>
				</div>
				<div className="input_container">
					<label>What type of projects are you looking for?</label>
					<ul>
						<li>New Project from scratch</li>
						<li>Fix or enhance existing project</li>
					</ul>
					<input
						type="text"
						placeholder="Type your answer here .."
						onChange={textChange('typeOfProject')}
						value={values.typeOfProject}
					/>
				</div>
				<button onClick={this.goBack}>Prev</button>
				<button onClick={this.continue}>Next</button>
			</Fragment>
		);
	}
}
