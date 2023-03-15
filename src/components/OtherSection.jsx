import { Icon } from "@iconify/react";
import React from "react";
import Card from "../assets/UI-components/Card";

const OtherSection = () => {
	return (
		<div className="grid grid-cols-3 mt-8">
			<Card icon={<Icon icon="fluent:clipboard-note-20-regular" />} />
		</div>
	);
};

export default OtherSection;
