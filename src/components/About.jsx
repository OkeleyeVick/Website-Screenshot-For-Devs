import React from "react";
import Image from "../assets/images/image-3d.png";

const About = () => {
	return (
		<section className="gap-2 md:grid md:grid-cols-9 my-16">
			<div className="col-start-2 col-end-9 mt-8 gap-8 md:flex md:flex-col lg:grid lg:grid-cols-5 overflow-hidden py-4">
				<div className="flex flex-col gap-4 col-start-1 col-end-4">
					<div className="flex flex-col">
						<h2 className="text-2xl font-semibold">Inspiration</h2>
						<span className="text-sm">
							Inspiration to create this web app emanated from my passion to learn React, to be very good at it and to create something
							I've not seen many aspiring developers like me create. Again I got inspired to create this as I thought it through as a
							way to give back to developers who are interested in building their portfolios and need better image representation for
							each of their beautiful web creations. ✨
						</span>
					</div>
					<div className="flex flex-col">
						<h2 className="text-2xl font-semibold">About</h2>
						<span className="text-sm ">
							This web app basically does what it shows. <br />
							As a developer that's currently working his/her portfolio or for content writers and for every other techie or non-techie
							interested in using the screenshots of a website for one purpose or the other, all you have to do is get the URL (website
							link) and paste in the space for website url, select your screen size to fit your need and voila! There you have it 😉
						</span>
					</div>
				</div>
				<div className="flex items-center justify-center mx-auto mt-16 md:mt-12 lg:my-12 col-start-4 col-end-6">
					<img src={Image} alt="" className="scale-110 md:scale-125" />
				</div>
			</div>
		</section>
	);
};

export default About;
