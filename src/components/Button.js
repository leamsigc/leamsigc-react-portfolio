import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
export default function Button() {
	return (
		<Fragment>
			<Link to="/contact" className="btn btn-main">
				Start Your Project
			</Link>
		</Fragment>
	);
}
