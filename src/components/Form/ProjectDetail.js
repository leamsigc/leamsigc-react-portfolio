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
				<div className="input__container">
					<label className="input__container--label" htmlFor="projectName">
						Project Name:
					</label>
					<input
						className="input__container--field"
						name="projectName"
						type="text"
						placeholder="Please enter a project name"
						onChange={textChange('projectName')}
						value={values.projectName}
					/>
				</div>
				<div className="input__container">
					<label className="input__container--label" htmlFor="projectDescription">
						What are you hopping to accomplish let me know your expectation
					</label>
					<textArea
						className="input__container--field"
						name="projectDescription"
						type="text"
						placeholder="Please enter a small descrition of the project.."
						onChange={textChange('projectDescription')}
						value={values.projectDescription}
					/>
				</div>
				<div className="input__container">
					<label className="input__container--label" htmlFor="typeOfProject">
						What type of projects are you looking for?
					</label>
					<ul className="input__container--list">
						<li>New Project from scratch</li>
						<li>Fix or enhance existing project</li>
					</ul>
					<input
						className="input__container--field"
						name="typeOfProject"
						type="text"
						placeholder="Type your answer here .."
						onChange={textChange('typeOfProject')}
						value={values.typeOfProject}
					/>
				</div>
				<div className="btn__container">
					<button className="btn btn-svg reverse" onClick={this.goBack}>
						<svg class="svg-icon" viewBox="0 0 20 20">
							<path
								fill="none"
								d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
							L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
							c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
							c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
							S18.707,9.212,18.271,9.212z"
							/>
						</svg>
					</button>
					<button className="btn btn-svg" onClick={this.continue}>
						<svg class="svg-icon" viewBox="0 0 20 20">
							<path
								fill="none"
								d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
							l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
							c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
							c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
							S1.293,9.212,1.729,9.212z"
							/>
						</svg>
					</button>
				</div>
			</div>
		);
	}
}
