import { Icon } from "@iconify/react";
import React from "react";
import Card from "../assets/UI-components/Card";

const OtherSection = () => {
	return (
		<React.Fragment>
			<div className="mt-32 px-1">
				<div className="md:grid md:grid-cols-12 lg:grid-cols-9">
					<h2 className="md:col-start-1 md:col-end-12 lg:col-start-2 lg:col-end-9 font-extrabold text-3xl">Steps to take screenshot</h2>
				</div>
				<div className="md:grid md:grid-cols-12 lg:grid-cols-9 mt-10">
					<div className="md:col-start-1 md:col-end-13 flex flex-col md:grid lg:col-end-9 lg:col-start-2 grid-cols-3 gap-x-8 gap-y-14 mt-8">
						{CardContent.map((eachItem, index) => {
							const { icon, paragraph, color } = eachItem;
							return <Card key={index} props={{ icon, paragraph, color }} />;
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default OtherSection;

const CardContent = [
	{
		paragraph: "Copy the website URL",
		color: "#8980F5",
		icon: <Icon icon="fluent:clipboard-link-24-filled" className="h-6 w-6" />,
	},
	{
		paragraph: "Come back here and paste the link above",
		color: "#00ABE7",
		icon: <Icon icon="fluent:clipboard-paste-24-filled" className="h-6 w-6" />,
	},
	{
		paragraph: "Click on capture to take screenshot of the webpage",
		color: "#FB62F6",
		icon: <Icon icon="fluent:scan-camera-28-regular" className="h-6 w-6" />,
	},
];
