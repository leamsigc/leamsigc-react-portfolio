import React from 'react';

export default function DisplayFormErrors({ errors }) {
	return (
		<div className="form__error--container">
			{Object.keys(errors).map((fieldName, i) => {
				if (errors[fieldName] !== '') {
					return (
						<p key={i} className="form__error--item">
							{fieldName} {errors[fieldName]}
						</p>
					);
				} else {
					return '';
				}
			})}
		</div>
	);
}
