import React from "react";
import "../GlazedDonutCard.css";

// import orderPickupImage from "../navbar images/OrderPickUp.jpg"


const JumbotronExample = (props) => {
	
	return (
		<div className="p-5 mb-4 bg-light rounded-3 bg-image">
			<header classname="pb-3 mb-4 border-bottom"></header>
			<div classname="p-5 mb-4 bg-light rounded-3">
		
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">Try our donuts</h1>
					<p className="col-md-8 fs-4">they're tasty</p>
					<button className="btn btn-primary btn-lg" type="button">example button</button>
					{/* <button><img src="" alt="my image" onClick={this.myfunction} /></button> */}
					
				</div>
			</div>
		</div>
	);
};

export default JumbotronExample;
