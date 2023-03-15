import React from "react";

const Card = ({ icon, text }) => {
	return (
		<div className="flex flex-col overflow-hidden rounded-md">
			<div className="flex flex-col">
				<div>{icon}</div>
				<div>
					<small>{text}</small>
				</div>
			</div>
		</div>
	);
};

export default Card;
