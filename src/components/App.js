import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import ContactSection from './ContactSection';
import Footer from './Footer';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<NavBar />
					<Route
						exact
						path="/"
						render={props => (
							<React.Fragment>
								<Header />
								<About />
								<Projects />
								<ContactSection />
							</React.Fragment>
						)}
					/>
					<Route path="/about" component={AboutPage} />
					<Route path="/contact" component={ContactPage} />
					<Footer />
				</div>
			</Router>
		);
	}
}
