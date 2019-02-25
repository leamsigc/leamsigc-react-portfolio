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
		const { values, active } = this.props;
		const { name, email, projectDescription, typeOfProject, projectName } = values;
		return (
			<div className={`form__card ${active ? 'active' : ''}`}>
				<div className="display__user--data">
					<h3 className="title-sub">Please confirm all the information provided</h3>
					<p>
						<strong>Name:</strong>
						<br />
						{name}
					</p>
					<hr />
					<p>
						<strong>Email:</strong>
						<br />
						{email}
					</p>
					<hr />
					<p>
						<strong>The project name:</strong>
						<br />
						{projectName}
					</p>
					<hr />
					<p>
						<strong>Description:</strong>
						<br />
						{projectDescription}
					</p>
					<hr />
					<p>
						<strong>Type of project:</strong>
						<br />
						{typeOfProject}
					</p>
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
					<input type="hidden" name="form-name" value="contact" />
					<button className="btn btn-svg send" type="submit">
						<svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" />
						</svg>
					</button>
				</div>
			</div>
		);
	}
}
