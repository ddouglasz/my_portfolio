import React from "react";
import BioComponent from "../components/bio";
import Navbar from "../components/navbar";

class Estimate extends React.Component {
	render() {
		return (
			<div className="page-layout">
				<div className="background-layout">
					<BioComponent />
					<Navbar />
				</div>
			</div>
		);
	}
}

export default Estimate;
