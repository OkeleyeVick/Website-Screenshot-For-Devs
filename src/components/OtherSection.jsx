import { Icon } from "@iconify/react";
import React from "react";
import Card from "../assets/UI-components/Card";

const OtherSection = () => {
	return (
		<div className="md:grid md:grid-cols-9 mt-20">
			<div className="col-start-2 col-end-9 grid md:grid-cols-3 gap-x-8 gap-y-10 mt-8">
				{CardContent.map((eachItem, index) => {
					const { icon, paragraph, color } = eachItem;
					return <Card key={index} props={{ icon, paragraph, color }} />;
				})}
			</div>
		</div>
	);
};

export default OtherSection;

const CardContent = [
	{
		paragraph: "",
		color: "#8980F5",
		icon: <Icon icon="fluent:clipboard-link-24-filled" className="h-6 w-6" />,
	},
	{
		paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ea expedita voluptatibus",
		color: "#00ABE7",
		icon: <Icon icon="fluent:clipboard-paste-24-filled" className="h-6 w-6" />,
	},
	{
		paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ea expedita voluptatibus",
		color: "#FB62F6",
		icon: <Icon icon="fluent:scan-camera-28-regular" className="h-6 w-6" />,
	},
];
