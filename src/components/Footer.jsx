import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
	return (
		<div className="md:grid md:grid-cols-9">
			<div className="col-start-2 col-end-9 mt-8 border-t py-4 border-t-gray-300">
				<div className="flex items-center justify-between">
					<span className="text-sm">
						@2023 &nbsp;
						<a href="https://twitter.com/I_am_Justus" className="hover:underline text-main">
							Okeleye Victor
						</a>
					</span>
					<div className="flex items-center flex-wrap gap-2">
						{links.map((item, index) => {
							const { icon, link } = item;
							return (
								<a href={link} key={index}>
									{icon}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

const links = [
	{
		icon: <Icon icon="uit:twitter-alt" className="w-6 h-6" />,
		link: "https://twitter.com/I_am_Justus",
	},
	{
		icon: <Icon icon="ph:envelope-simple-light" className="w-6 h-6" />,
		link: "https://gmailto:justusofnigeria@gmail.com",
	},
	{
		icon: <Icon icon="akar-icons:github-outline-fill" className="w-6 h-6" />,
		link: "https://github.com/OkeleyeVick",
	},
	{
		icon: <Icon icon="ph:linkedin-logo-light" className="w-6 h-6" />,
		link: "https://github.com/OkeleyeVick",
	},
];
