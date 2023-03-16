import React from "react";

const Card = ({ props }) => {
	const { icon, paragraph, color } = props;
	return (
		<div className={`flex flex-col relative rounded-md p-4`} style={{ backgroundColor: color, filter: `drop-shadow(10px, 0, 1rem, ${color})` }}>
			<div className="rounded-full w-max p-4 absolute -left-4 shadow-sm -top-8 text-white" style={{ backgroundColor: color }}>
				{icon}
			</div>
			<div className="mt-8">
				<small className="leading-normal flex text-white">{paragraph}</small>
			</div>
		</div>
	);
};

export default Card;
