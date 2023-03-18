import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
	const handleShare = ({ link, title, text }) => {
		if ("share" in navigator) {
			navigator.share({
				url: link,
				title: title,
				text: text,
			});
		}
	};

	return (
		<div className="md:grid md:grid-cols-9">
			<div className="col-start-2 col-end-9 mt-8 border-t py-6 border-t-gray-300">
				<div className="flex md:items-center justify-between gap-2 sm:gap-3 flex-wrap sm:flex-row">
					<span className="text-sm">
						@2023 &nbsp;
						<a href="https://twitter.com/I_am_Justus" className="hover:underline text-main">
							Okeleye Victor
						</a>
					</span>
					<div className="flex items-center flex-wrap gap-4">
						{links.map((item, index) => {
							const { icon, link, button } = item;
							return button ? (
								<button
									key={index}
									type="button"
									className="hover:text-main transition duration-300 ease-in-out"
									onClick={() =>
										handleShare({
											link: "https://v-language-translator.netlify.app/",
											title: "Website Screenshot",
											text: "A website for developers and content writers to capture a better screenshot of website for use case",
										})
									}>
									{icon}
								</button>
							) : (
								<a href={link} key={index} className="hover:text-main transition duration-300 ease-in-out">
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
		icon: <Icon icon="ph:share-network-light" className="w-5 h-5 md:w-6 md:h-6" />,
		button: true,
	},
	{
		icon: <Icon icon="uit:twitter-alt" className="w-5 h-5 md:w-6 md:h-6" />,
		link: "https://twitter.com/I_am_Justus",
	},
	{
		icon: <Icon icon="ph:envelope-simple-light" className="w-5 h-5 md:w-6 md:h-6" />,
		link: "https://gmailto:justusofnigeria@gmail.com",
	},
	{
		icon: <Icon icon="akar-icons:github-outline-fill" className="w-5 h-5 md:w-6 md:h-6" />,
		link: "https://github.com/OkeleyeVick",
	},
	{
		icon: <Icon icon="ph:linkedin-logo-light" className="w-5 h-5 md:w-6 md:h-6" />,
		link: "https://github.com/OkeleyeVick",
	},
];
