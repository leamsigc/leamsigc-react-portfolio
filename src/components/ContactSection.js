import React from 'react';
import Button from './Button';

export default function ContactSection() {
	return (
		<div className="contact__now about">
			<h3 className="title-sub">
				<span className="dark-text">Ready to bring your</span> idea to life?
			</h3>
			<div className="btn-container" style={{ width: '100%' }}>
				<Button />
			</div>
		</div>
	);
}
