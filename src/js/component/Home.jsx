import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";


//create your first component

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container d-flex flex-wrap justify-content-between">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	)
}

export default Home;
