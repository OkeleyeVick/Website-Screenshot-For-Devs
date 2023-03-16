import React from "react";

const Card = ({ icon, paragraph, index }) => {
	return (
		<div className="flex flex-col overflow-hidden rounded-md" key={index}>
			<div className="flex flex-col">
				<div>{icon}</div>
				<div>
					<small>{paragraph}</small>
				</div>
			</div>
		</div>
	);
};

export default Card;
