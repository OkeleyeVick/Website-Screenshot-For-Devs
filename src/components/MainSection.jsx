import { Icon } from "@iconify/react";
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
						className="w-full min-h-[3rem] p-3 text-sm border-[1.5px] border-b focus:outline-none transition duration-300 ease-in-out border-gray-200 rounded-t-md focus:shadow-none focus:border-main"
						placeholder="e.g  https://www.google.com"
					/>
					<div className="shadow-custom_2 rounded-b-md">
						<div className="md:grid md:grid-cols-2 gap-x-3 p-3 border-t border-t-gray-200">
							<div>
								<span className="title text-sm font-semibold">Screen Size</span>
								<div className="relative mt-1">
									<button className="flex items-center justify-between w-full p-2 rounded-md bg-gray-200">
										<span className="text-sm">1280 x 720 (HD)</span>
										<Icon icon="ph:caret-up-down-light" />
									</button>
									<Dropdown />
								</div>
							</div>
							<div>
								<span className="title text-sm font-semibold">Image format</span>
								<div className="relative mt-1">
									<button className="flex items-center justify-between w-full p-2 rounded-md bg-gray-200">
										<span className="text-sm">.jpeg</span>
										<Icon icon="ph:caret-up-down-light" />
									</button>
									<div
										className={`rounded-md shadow-custom p-2 absolute top-100 origin-top-right transition duration-300 bg-white w-full translate-y-4`}>
										<input type="hidden" value=".jpeg" className="size_format" />
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
		</section>
	);
};

export default MainSection;
