import React, { Fragment } from 'react';
import Iconone from '../images/iconone.svg';
import Icon2 from '../images/iconTwo.svg';
import Icon3 from '../images/icon3.svg';
import SVGWaves from './SVGWaves';
export default function About() {
	const cardsItems = [
		{
			icon: Iconone,
			title: 'User Experience ',
			desc:
				'Every pixel is designed to ensure your website is responsive, intuitive, and easy to use , improve you reach and gain more revenue.'
		},
		{
			icon: Icon2,
			title: 'Custom Development',
			desc:
				'The technical part of the process that will bring the design of your new website to life and make it the best solution for the problem and not only look good. '
		},
		{
			icon: Icon3,
			title: 'Hosting Services',
			desc:
				'Once your website is in its full power, we dont stop there.We will help you with the hosting, updates and a lot of other post-launch tech support.'
		}
	];
	return (
		<div className="about">
			<section className="container">
				<h2 className="title-sub">
					GET MORE CUSTOMERS FROM THE DIGITAL WORLD
					<br /> FOR YOU
					<br />
					<small className="title-sub--secondary"> Your digital secret weapon</small>
				</h2>
				<p className="description">
					Start with the initial idea, wire-frames, design, development, optimization, launch and support afterwards.
					Excel at developing digital experiences, providing custom development, and pixel-perfect design for
					enterprises, emerging companies and non-profits.
				</p>
				<div className="cards">
					{cardsItems.map(item => {
						return (
							<div className="cards__item" key={item.title}>
								<div className="cards__item--icon">
									<img src={item.icon} alt={item.desc} />
								</div>
								<h4 className="cards__item--title">{item.title}</h4>
								<p className="cards__item--desc">{item.desc}</p>
							</div>
						);
					})}
				</div>
				<SVGWaves />
			</section>
		</div>
	);
}
