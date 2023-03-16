import { Icon } from "@iconify/react";
import React, { createContext, useRef, useState } from "react";
import Dropdown from "../assets/UI-components/Dropdown";
import Loader from "../assets/UI-components/Loader";
import Option from "../assets/UI-components/Option";
import Button from "../assets/UI-components/Button";
import "../assets/animations/animation.css";

export const sizeContext = createContext();

const MainSection = () => {
	const [screenSizeDropdown, setSecreenSizeDropdown] = useState(false);
	const [formatDropdown, setFormatDropdown] = useState(false);
	const [loading, setLoading] = useState(false);

	const urlRef = useRef();

	function handleSubmission() {
		setLoading(true);
	}

	return (
		<sizeContext.Provider
			value={{ handleSubmission, screenSizeDropdown, setSecreenSizeDropdown, formatDropdown, setFormatDropdown, loading, setLoading }}>
			<section className="md:grid md:grid-cols-7 mt-8 relative">
				<div className="col-start-2 col-end-7 ">
					<div className="text-start">
						<small className="text-sm">Enter Website URL</small>
					</div>
					<form action="" onSubmit={handleSubmission}>
						<div className="">
							<input
								type="url"
								ref={urlRef}
								aria-label="Input text"
								className="w-full min-h-[3rem] p-3 text-sm border-[1.5px] focus:outline-none transition duration-300 ease-in-out border-gray-100 rounded-md focus:shadow-none focus:border-main"
								placeholder="e.g  https://www.google.com"
							/>
							<div className="shadow-custom rounded-lg mt-7 bg-white">
								<div className="md:grid md:grid-cols-2 gap-3 p-3 border rounded-lg border-b-0 border-gray-50">
									<div>
										<span className="title text-sm font-semibold">Screen Size</span>
										<div className="relative mt-1 ">
											<button
												type="button"
												className="flex items-center justify-between w-full p-3 rounded-md bg-gray-100"
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
												className="flex items-center justify-between w-full p-3 rounded-md bg-gray-100"
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
								<div className="flex items-center  gap-4 md:gap-8 flex-wrap p-3">
									<div>
										<label className="cont">
											<input type="radio" aria-label="desktop" name="screen-size-type" className="bg-gray-200 w-6 h-6" />
											<span className="text-base">Desktop</span>
										</label>
									</div>
									<div>
										<label className="cont">
											<input type="radio" aria-label="tablet" name="screen-size-type" className="bg-gray-200 w-6 h-6" />
											<span className="text-base">Tablet</span>
										</label>
									</div>
									<div>
										<label className="cont">
											<input type="radio" aria-label="mobile" name="screen-size-type" className="bg-gray-200 w-6 h-6" />
											<span className="text-base">Mobile</span>
										</label>
									</div>
								</div>
								<div className="p-3 border-t flex items-center justify-end">
									<Button />
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			<div>{loading ? <Loader /> : null}</div>
		</sizeContext.Provider>
	);
};

export default MainSection;
