import { Icon } from "@iconify/react";
import React, { createContext, useState } from "react";
import Dropdown from "../assets/UI-components/Dropdown";
import Loader from "../assets/UI-components/Loader";
import Option from "../assets/UI-components/Option";

export const sizeContext = createContext();

const MainSection = () => {
	const [screenSizeDropdown, setSecreenSizeDropdown] = useState(false);
	const [formatDropdown, setFormatDropdown] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<sizeContext.Provider value={{ screenSizeDropdown, setSecreenSizeDropdown, formatDropdown, setFormatDropdown }}>
			<section className="md:grid md:grid-cols-7 mt-8">
				<div className="col-start-2 col-end-7 ">
					<div className="text-start">
						<small className="text-sm">Enter Website URL</small>
					</div>
					<div className="">
						<input
							type="url"
							name=""
							id=""
							aria-label="Input text"
							className="w-full min-h-[3rem] p-3 text-sm border-[1.5px] focus:outline-none transition duration-300 ease-in-out border-gray-200 rounded-md focus:shadow-none focus:border-main"
							placeholder="e.g  https://www.google.com"
						/>
						<div className="shadow-custom rounded-lg mt-7">
							<div className="md:grid md:grid-cols-2 gap-3 p-3 border border-gray-200">
								<div>
									<span className="title text-sm font-semibold">Screen Size</span>
									<div className="relative mt-1 ">
										<button
											type="button"
											className="flex items-center justify-between w-full p-2 rounded-md bg-gray-200"
											onClick={() => {
												setSecreenSizeDropdown((prev) => !prev);
											}}>
											<span className="text-sm">1280 x 720 (HD)</span>
											<Icon icon="ph:caret-up-down-light" />
										</button>
										<Dropdown />
									</div>
								</div>
								<div>
									<span className="title text-sm font-semibold">Image format</span>
									<div className="relative mt-1">
										<button
											type="button"
											className="flex items-center justify-between w-full p-2 rounded-md bg-gray-200"
											onClick={() => setFormatDropdown((prev) => !prev)}>
											<span className="text-sm">.jpeg</span>
											<Icon icon="ph:caret-up-down-light" />
										</button>
										<div
											className={`rounded-md shadow-custom py-2 px-2 absolute top-100 z-10 transition duration-300 ease-in-out bg-white w-full ${
												formatDropdown
													? "visible pointer-events-auto opacity-100 translate-y-2"
													: "translate-y-8 pointer-events-none opacity-0"
											}`}>
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
			<div>{loading ? <Loader /> : null}</div>
		</sizeContext.Provider>
	);
};

export default MainSection;
