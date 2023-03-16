import React from "react";
import Image from "../assets/images/image-3d.png";

const About = () => {
	return (
		<section className="gap-2 md:grid md:grid-cols-9 my-16">
			<div className="col-start-2 col-end-9 mt-8 gap-8 md:grid md:grid-cols-2 overflow-hidden py-4">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col">
						<h2 className="text-2xl font-semibold">Inspiration</h2>
						<span className="text-sm">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex temporibus ut, aliquid odio a eligendi provident
							exercitationem nemo beatae dolorum tenetur rem! Fugit id ducimus nisi inventore quis, ab sed.
						</span>
					</div>
					<div className="flex flex-col">
						<h2 className="text-2xl font-semibold">About</h2>
						<span className="text-sm ">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, sed hic. At delectus, ex sint nihil quo sequi id
							voluptates, cum corrupti repellendus quis minus quidem obcaecati inventore ullam harum?
						</span>
					</div>
				</div>
				<div className="text-center mx-auto mt-16 md:mt-0">
					<img src={Image} alt="" className="scale-110 md:scale-125 ml-auto md:mx-auto" />
				</div>
			</div>
		</section>
	);
};

export default About;
