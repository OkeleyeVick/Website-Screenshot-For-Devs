import { Icon } from "@iconify/react";
import React from "react";

const Button = () => {
	return (
		<button className="capture bg-main rounded-md text-white p-3 pr-14 relative" type="submit">
			<span className="text-sm capitalize">screenshot</span>
			<div className="icon w-9 h-9">
				<Icon icon="fluent:scan-camera-48-filled" className="w-7 h-7" />
			</div>
		</button>
	);
};

export default Button;
