import React from "react";

const Card = () => {
	return (
		<div className="card text-center col-md-3 col-sm-12" 
        style={{width:"18rem"}}
        >
			<img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Find out more</a>
			</div>
		</div>
	);
};


export default Card;