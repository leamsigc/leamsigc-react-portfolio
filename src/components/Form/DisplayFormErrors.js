import React from 'react';

export default function DisplayFormErrors({ errors }) {
	console.log(errors);
	return (
		<div>
			{Object.keys(errors).map((fieldName, i) => {
				console.log(fieldName);
				if (errors[fieldName] !== '') {
					return (
						<p key={i}>
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
