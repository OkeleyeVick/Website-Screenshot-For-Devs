import React from "react";
import Dropdown from "../assets/UI-components/Dropdown";
import Option from "../assets/UI-components/Option";

const MainSection = () => {
	return (
		<section className="md:grid md:grid-cols-7 mt-8">
			<div className="col-start-2 col-end-7 ">
				<div className="text-start">
					<small className="text-sm">Enter Website URL</small>
				</div>
				<div className="bg-white">
					<input
						type="url"
						name=""
						id=""
						aria-label="Input text"
						className="w-full min-h-[3rem] p-3 text-sm border-[1.5px] focus:outline-none transition duration-300 ease-in-out border-gray-200 rounded-t-md border-b-0 focus:shadow-none focus:border-main"
						placeholder="e.g  https://www.google.com"
					/>
					<div className="shadow-custom_2 rounded-b-md">
						<div className="md:grid md:grid-cols-3 gap-x-3 p-3 border-t-[1.5px] border-t-gray-200">
							<div>
								<span className="title text-sm font-semibold">Screen Size</span>
								<div className="relative">
									<Dropdown />
								</div>
							</div>
							<div>
								<span className="title text-sm font-semibold">Image format</span>
								<div className="relative">
									<div className="rounded-md shadow-custom py-2 px-2 absolute top-0 origin-top-right transition duration-300 bg-white w-full">
										<div className="">
											<div className="mb-2">
												<ul className="flex flex-col items-start">
													<Option>.jpeg</Option>
													<Option>.png</Option>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainSection;
