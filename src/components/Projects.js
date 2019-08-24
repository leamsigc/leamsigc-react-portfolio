import React, { Component } from 'react';
import MendozaImg from '../images/MendozaRoofingWilmingtonNc.gif';
import MendozaPicture from '../images/Mendoza.png';
import SmartCellPicture from '../images/smartCell.png';
import SmartCellGif from '../images/SmartCellRepairGif.gif';
import LeamsigcGif from '../images/leamsigcWebDeveloperDaytonaBeach.gif';
import LeamsigcImg from '../images/leamsigcGithub.png';
import SVGWaves from './SVGWaves';
import { Link } from 'react-router-dom';
export default class Projects extends Component {
	changeToGif = e => {
		const img = e.target.firstChild;
		const imgGifSource = img.getAttribute('data-gif');
		img.setAttribute('src', imgGifSource);
	};
	changeSrcToImg = e => {
		const img = e.target.firstChild;
		const imgSource = img.getAttribute('data-img');
		img.setAttribute('src', imgSource);
	};
	render() {
		const portfolio = [
			{
				name: 'Smart Cell Repair',
				roleDev: 'Solo Developer  ',
				roleDsg: ' UX/UI Designer',
				link: 'http://www.smartcell.repair',
				github: 'https://github.com/leamsigc/smartCell',
				learnMore: '/contact',
				img: SmartCellPicture,
				gif: SmartCellGif,
				grid: 'noreverse',
				position: 'top',
				dec: '“Great communication and fast delivery. He is very committed to work and deliver quality code."'
			},
			{
				name: 'Mendoza Roofing Wilmington',
				link: 'https://roofingmendoza.com/',
				github: 'https://github.com/leamsigc/MendozaRoofingCompany',
				roleDev: 'Solo Developer  ',
				roleDsg: ' UX/UI Designer',
				learnMore: '/contact',
				gif: MendozaImg,
				img: MendozaPicture,
				grid: 'reverse',
				position: 'bottom',
				dec:
					'“ It’s great to work with people who take the time to listen to what you are looking for, and then make it come to life even better than you thought!"'
			},
			{
				name: 'Leamsigc Website',
				link: 'https://leamsigc.com/',
				github: 'https://leamsigc.com/',
				roleDev: 'Solo Developer  ',
				roleDsg: ' UX/UI Designer',
				learnMore: '/contact',
				img: LeamsigcImg,
				gif: LeamsigcGif,
				grid: 'noreverse',
				position: 'top',
				dec: '“Lightning fast & ultra responsive!"'
			}
		];
		return (
			<div className="projects">
				<div className="container full">
					{portfolio.map(item => {
						return (
							<div key={item.name} className={`container-portfolio ${item.grid === 'reverse' ? 'dark-svg' : ''}`}>
								<SVGWaves />
								<div className={`portfolio__item ${item.grid === 'reverse' ? 'reverse' : ''}`}>
									<p className="portfolio__item--role">
										{item.roleDev}&#183;{item.roleDsg}
									</p>
									<h4 className="portfolio__item--name">{item.name}</h4>
									<p className="portfolio__item--desc">{item.dec}</p>
									<div className="portfolio__item--links">
										<a href={item.link} target="_blank">
											<i>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<circle cx="53.333" cy="53.333" r="10.667" />
													<circle cx="96" cy="53.333" r="10.667" />
													<circle cx="138.667" cy="53.333" r="10.667" />
													<path d="M437.333 384h-32v-32c0-5.896-4.771-10.667-10.667-10.667S384 346.104 384 352v32h-32c-5.896 0-10.667 4.771-10.667 10.667s4.771 10.667 10.667 10.667h32v32c0 5.896 4.771 10.667 10.667 10.667s10.667-4.771 10.667-10.667v-32h32c5.896 0 10.667-4.771 10.667-10.667S443.229 384 437.333 384z" />
													<path d="M469.333 304.228V42.667C469.333 19.135 450.198 0 426.667 0h-384C19.135 0 0 19.135 0 42.667v384c0 23.531 19.135 42.667 42.667 42.667h261.561C325.767 495.376 358.31 512 394.667 512 459.365 512 512 459.365 512 394.667c0-36.357-16.624-68.9-42.667-90.439zm-448-261.561c0-11.76 9.573-21.333 21.333-21.333h384c11.76 0 21.333 9.573 21.333 21.333v42.667H21.333V42.667zM42.667 448c-11.76 0-21.333-9.573-21.333-21.333v-320H448v183.62c-16.023-8.22-34.121-12.953-53.333-12.953-64.698 0-117.333 52.635-117.333 117.333 0 19.212 4.733 37.31 12.953 53.333H42.667zm352 42.667c-52.938 0-96-43.063-96-96s43.063-96 96-96 96 43.063 96 96-43.063 96-96 96z" />
												</svg>
											</i>
										</a>
										<a href={item.github} target="_blank">
											<i>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<path
														d="M256 116c88.37 0 160 71.63 160 160 0 72.66-48.43 134.01-114.78 153.52A19.98 19.98 0 0 1 296 416v-39.82c.03-18.3-7.22-23.14-12.51-31.22 83.61-12.48 86.24-89.36 57.04-123.94-.45-.52-.86-1.5-.67-2.07 4.48-13.54 3.9-43.36-6.35-42.9-14.04.66-25.24 8.57-38.27 16.32-.99.58-1.78.81-2.93.5a145 145 0 0 0-36.31-5.16 145 145 0 0 0-36.3 5.16c-1.16.31-1.95.08-2.94-.5-13.03-7.75-24.23-15.66-38.27-16.31-10.25-.47-10.83 29.35-6.35 42.89.19.56-.22 1.55-.67 2.07-29.2 34.58-26.57 111.46 57.04 123.94-5.3 8.08-12.54 12.91-12.51 31.22V416a19.98 19.98 0 0 1-5.22 13.52C144.43 410.02 96 348.66 96 276c0-88.37 71.63-160 160-160zm0 0"
														fill="#fafaff"
														data-original="#F0F0FA"
														data-old_color="#F8F8FD"
													/>
													<path
														d="M386 53a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm0 0M256 106c-93.74 0-170 76.26-170 170 0 94.64 76.88 170 170 170 93.32 0 170-75.49 170-170 0-93.74-76.26-170-170-170zm-30.8 316.82c.51-2.2.79-4.5.8-6.82v-39.84c-.02-14.58 5.06-16.84 10.88-25.72a10.01 10.01 0 0 0-6.9-15.37c-39.66-5.92-55.23-26.37-61.3-42.48-8.1-21.46-3.82-48.22 10.41-65.1 2.16-2.54 4.1-7.1 2.55-11.68-3.04-9.17-2.57-23.81-.68-29.48 8.62 1.26 16.67 6.15 25.84 11.71 5.31 3.23 9.09 6.2 15.5 4.48a135.85 135.85 0 0 1 33.7-4.8c11.14.14 22.47 1.76 33.71 4.8 6.38 1.73 10.28-1.32 15.49-4.48 9.17-5.56 17.22-10.45 25.84-11.7 1.89 5.65 2.36 20.3-.65 29.39-1.58 4.65.36 9.22 2.52 11.77 14.23 16.86 18.52 43.63 10.42 65.09-6.08 16.1-21.65 36.56-61.31 42.48a10 10 0 0 0-6.9 15.37c5.81 8.86 10.9 11.12 10.88 25.74v39.87c.02 2.3.29 4.58.79 6.77a150.72 150.72 0 0 1-61.58 0zm80.9-5.4c-.05-.47-.1-.94-.1-1.42v-39.8c.02-11.48-2.5-18.95-5.63-24.54 30.35-8.2 51.98-26.31 61.67-52.01 10.24-27.15 5.6-59.6-11.45-82.06 3.1-13.67 3.02-35.25-4.43-45.07-3.32-4.4-7.97-6.67-13.11-6.45-15.64.72-27.7 8.53-40.82 16.44a155.22 155.22 0 0 0-36.35-4.8 154.9 154.9 0 0 0-36.11 4.8c-13.03-7.85-25.11-15.71-40.82-16.44-5.12-.23-9.78 2.06-13.11 6.45-7.43 9.8-7.54 31.34-4.43 45.06-17.04 22.47-21.69 54.92-11.45 82.07 9.7 25.7 31.32 43.8 61.67 52-2.47 4.42-4.56 10.02-5.32 17.82-12.36 4.32-22.38 1.47-29.17-9.98-7.95-13.37-21.42-24.16-36.86-22.83A10 10 0 0 0 142 356.6c7.15-.62 14.2 6.83 17.94 13.11 10.69 18.01 28 24.44 46.06 20.58v25.66c0 .5-.05 1-.11 1.47C146.69 396.41 106 339.4 106 276c0-82.71 67.29-150 150-150s150 67.29 150 150c0 63.4-40.69 120.41-99.9 141.42zm0 0"
														data-original="#000000"
														data-old_color="#F0F0FA"
													/>
													<path
														d="M462 0H50C22.43 0 0 22.43 0 50v412c0 27.57 22.43 50 50 50h412c27.57 0 50-22.43 50-50V50c0-27.57-22.43-50-50-50zm30 462c0 16.54-13.46 30-30 30H50c-16.54 0-30-13.46-30-30V50c0-16.54 13.46-30 30-30h412c16.54 0 30 13.46 30 30zm0 0"
														data-original="#000000"
														data-old_color="#F0F0FA"
													/>
													<path
														d="M136 63h200a10 10 0 1 0 0-20H136a10 10 0 1 0 0 20zm0 0"
														data-original="#000000"
														data-old_color="#F0F0FA"
													/>
												</svg>
											</i>
										</a>
									</div>
									<div className="btn-container">
										<Link to={item.learnMore} className="btn btn-main">
											Learn More
										</Link>
									</div>
									<div
										className="portfolio__item--img"
										onMouseLeave={this.changeSrcToImg}
										onMouseOver={this.changeToGif}
									>
										<img
											src={item.img}
											className="portfolio__item--img___gif"
											data-gif={item.gif}
											data-img={item.img}
											alt={`${item.name} ${item.roleDev} ${item.roleDsg}`}
										/>
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
