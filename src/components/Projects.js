import React, { Component } from 'react';
import MendozaImg from '../images/MendozaRoofingWilmingtonNc.gif';
import LeamsigcImg from '../images/leamsigcWebDeveloperDaytonaBeach.gif';
import SVGWaves from './SVGWaves';
export default class Projects extends Component {
	render() {
		const portfolio = [
			{
				name: 'Smart Cell Repair',
				roleDev: 'Solo Developer  ',
				roleDsg: ' UX/UI Designer',
				learnMore: '/smartcellrepair',
				img: LeamsigcImg,
				grid: 'noreverse'
			},
			{
				name: 'Mendoza Roofing Wilmington',
				roleDev: 'Solo Developer  ',
				roleDsg: ' UX/UI Designer',
				learnMore: '/mendozaroofingcompany',
				img: MendozaImg,
				grid: 'reverse'
			}
		];
		return (
			<div className="projects">
				<div className="container">
					{portfolio.map(item => {
						return (
							<div className="container-portfolio">
								{item.grid === 'reverse' ? '' : <SVGWaves />}
								<div className={`portfolio__item ${item.grid === 'reverse' ? 'reverse' : ''}`}>
									<p className="portfolio__item--role">
										{item.roleDev}&#183;{item.roleDsg}
									</p>
									<h4 className="portfolio__item--name">{item.name}</h4>
									<div className="btn-container">
										<a href={item.learnMore} className="btn btn-main btn-secondary">
											Learn More
										</a>
									</div>
									<div className="portfolio__item--img">
										<img src={item.img} className="portfolio__item--img___gif" />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
