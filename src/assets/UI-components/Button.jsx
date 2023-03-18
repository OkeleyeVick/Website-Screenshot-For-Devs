import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { sizeContext } from "../../components/MainSection";

const Button = () => {
	const { handleSubmission } = useContext(sizeContext);

	function handleScreenshot(e) {
		e.preventDefault();
		handleSubmission();
	}
	return (
		<button className="capture bg-main rounded-md text-white p-3 pr-14 relative" type="submit" onClick={handleScreenshot}>
			<span className="text-sm capitalize">screenshot</span>
			<div className="icon w-9 h-9">
				<Icon icon="fluent:scan-camera-48-filled" className="w-7 h-7" />
			</div>
		</button>
	);
};

export default Button;
