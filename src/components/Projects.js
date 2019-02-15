import React, { Component } from 'react';
import gifImage from '../images/ezgif.com-optimize.gif';
export default class Projects extends Component {
	render() {
		return (
			<div className="projects">
				<div className="container">
					<div className="portfolio__item">
						<p className="portfolio__item--role">Solo Developer &#183; UX/UI Designer</p>
						<h4 className="portfolio__item--name">SmartCell Repair Website</h4>
						<div className="btn-container">
							<a href="#" className="btn btn-main btn-secondary">
								Learn More
							</a>
						</div>
						<div className="portfolio__item--img">
							<img src={gifImage} className="portfolio__item--img___gif" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
