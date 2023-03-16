import { Icon } from "@iconify/react";
import React from "react";
import Card from "../assets/UI-components/Card";

const OtherSection = () => {
	return (
		<React.Fragment>
			<div className="mt-20 px-3">
				<div className="md:grid md:grid-cols-9">
					<h2 className="col-start-2 col-end-5 font-extrabold">Steps to take screenshot</h2>
				</div>
				<div className="md:grid md:grid-cols-9 mt-20">
					<div className="col-start-2 col-end-9 grid md:grid-cols-3 gap-x-8 gap-y-10 mt-8">
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
