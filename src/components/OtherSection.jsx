import { Icon } from "@iconify/react";
import React from "react";
import Card from "../assets/UI-components/Card";

const OtherSection = () => {
	return (
		<div className="md:grid md:grid-cols-3 gap-8 mt-8">
			{CardContent.map((eachItem, index) => {
				const { icon, paragraph } = eachItem;
				return <Card properties={{ icon, paragraph, index }} />;
			})}
		</div>
	);
};

export default OtherSection;

const CardContent = [
	{
		icon: <Icon icon="octicon:paste-24" />,
		paragraph: "",
	},
	{
		icon: <Icon icon="fluent:clipboard-paste-24-filled" />,
		paragraph: "",
	},
	{
		icon: <Icon icon="fluent:scan-camera-28-regular" />,
		paragraph: "",
	},
];
