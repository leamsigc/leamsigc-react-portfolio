import React, { Component, Fragment } from 'react';

export default class UserDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, textChange } = this.props;
		return (
			<Fragment>
				<div className="input_container">
					<label htmlFor="name">Name:</label>
					<input name="name" type="text" placeholder="Name here" onChange={textChange('name')} value={values.name} />
				</div>
				<div className="input_container">
					<label htmlFor="email">Email:</label>
					<input
						name="email"
						required
						type="email"
						placeholder="E-mail"
						onChange={textChange('email')}
						value={values.email}
					/>
				</div>
				<button onClick={this.continue}>Next</button>
			</Fragment>
		);
	}
}
