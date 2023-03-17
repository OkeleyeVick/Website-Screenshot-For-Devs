import { Icon } from "@iconify/react";
import React, { createContext, useRef, useState } from "react";
import Dropdown from "../assets/UI-components/Dropdown";
import Loader from "../assets/UI-components/Loader";
import Button from "../assets/UI-components/Button";
import "../assets/animations/animation.css";
import { abstract, rapid, pikwy, flash } from "./utils/keys";

export const sizeContext = createContext();

const MainSection = () => {
	const [screenSizeDropdown, setSecreenSizeDropdown] = useState(false); // dropdown for selection for screenshot size
	const [formatDropdown, setFormatDropdown] = useState(false); //format whether in jpeg or png format
	const [loading, setLoading] = useState(false); //loader when fetch is running under the hood
	const [urlLink, setURLlink] = useState(""); //url passed by user
	const [imageFormatButtonState, setimageFormatButtonState] = useState(); // toggle format dropdown button active states
	const [resolutionState, setResolutionState] = useState({
		cIndex: null,
		index: null,
	}); // toggle res dropdown button active states
	const [urlParameters, setUrlParameters] = useState({
		width: null,
		height: null,
		full_page: false,
		format: `jpeg`, //default imageFormat
	}); //also info passed by user
	const [imageLink, setImageLink] = useState(""); //link gotten from api
	const [error, setError] = useState(); //setting error state everywhere
	const [resolutionTextvalue, setResolutionTextValue] = useState("1280 x 1024 (SXGA)");

	const urlRef = useRef();

	function Options(host) {
		return {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": `${rapid}`,
				"X-RapidAPI-Host": `${host}`,
			},
		};
	}

	const setLoadingStateTrue = () => {
		setLoading(true);
	};
	const setLoadingStateFalse = () => {
		setLoading(false);
	};

	async function fetchScreenShot() {
		// const { width, height, full_page } = urlParameters;
		const { full_page, format } = urlParameters;
		const rapid_two = `https://screenshot-maker.p.rapidapi.com/browser/screenshot/_take?`;
		const abstract_url = `https://screenshot.abstractapi.com/v1/?`;
		const flash_url = `https://api.apiflash.com/v1/urltoimage?`;
		const pikwy_url = `https://api.pikwy.com?`;

		const height = 1024;
		const width = 300;
		const urlLink = `https://github.com/OkeleyeVick/Website-Screenshot-For-Devs/commit/1014abf7401af316b6c5956bf6db955f9888963d`;
		const rapid_fetch = {
			url: `${rapid_two}targetUrl=${urlLink}&pageWidth=${width}&pageHeight=${height}&clickDelay=500&deviceScaleFactor=1&clickDelay=500&clickCount=1`,
			option: Options("screenshot-maker.p.rapidapi.com"),
		};
		const abstract_fetch = {
			url: `${abstract_url}api_key=${abstract}&url=${urlLink}&width=${width}&height=${height}&delay=5&capture_full_page=${
				full_page === false ? false : true
			}`,
		};
		const flash_fetch = {
			url: `${flash_url}access_key=${flash}&format=${format}&	delay=5&wait_until=dom_loaded&url=${urlLink}&full_page=${
				full_page === false ? false : true
			}`,
		};
		const pikwy_fetch = {
			url: `${pikwy_url}u=${urlLink}&tkn=${pikwy}&width=${width}&height=${height}&delay=5000&full_page${full_page === false ? 0 : 1}`,
			method: "GET",
		};
		try {
			fetch(flash_fetch.url)
				// first fetch
				.then((responseOne) => {
					setLoadingStateTrue();
					return responseOne.blob();
				})
				.then((data) => {
					setLoadingStateFalse();
					const url = URL.createObjectURL(data);
					setImageLink(url);
				})
				.catch(() => {
					// second fetch
					fetch(pikwy_fetch.url, {
						method: pikwy_fetch.method,
					})
						.then((responseOne) => {
							return responseOne.blob();
						})
						.then((data) => {
							setLoadingStateFalse();
							const url = URL.createObjectURL(data);
							setImageLink(url);
						})
						.then(() => {
							// third fetch option
							fetch(abstract_fetch.url)
								.then((response) => response.blob())
								.then((imageObj) => {
									setLoadingStateFalse();
									const imageURL = URL.createObjectURL(imageObj);
									setImageLink(imageURL);
								})
								.catch(() => {
									// fourth fetch option
									fetch(rapid_fetch.url, rapid_fetch.option)
										.then((responseTwo) => {
											return responseTwo.json();
										})
										.then((responseTwoData) => {
											setLoadingStateFalse();
											const { imageUrl } = responseTwoData;
											setImageLink(imageUrl);
										})
										.catch((error) => {
											console.log(error);
										});
								});
						});
				});
		} catch (error) {
			setLoadingStateFalse();
			console.log(error);
		}
	}

	function handleSubmission() {
		fetchScreenShot();
	}
	const handleSetImageFormat = (imageFormat, index) => {
		const viewFormat = document.querySelector("button .viewFormat");
		viewFormat.innerHTML = imageFormat;
		setimageFormatButtonState(index);
		setFormatDropdown(false);
		const JPEGformatOrImageFormat = index === 0 ? imageFormat.split("/")[0].trim() : imageFormat;
		setUrlParameters({
			...urlParameters,
			format: JPEGformatOrImageFormat.split(".")[1],
		});
	};

	return (
		<sizeContext.Provider
			value={{
				resolutionTextvalue,
				setResolutionTextValue,
				urlParameters,
				setUrlParameters,
				resolutionState,
				setResolutionState,
				handleSubmission,
				screenSizeDropdown,
				setSecreenSizeDropdown,
				formatDropdown,
				setFormatDropdown,
				loading,
				setLoading,
			}}>
			<section className="md:grid md:grid-cols-7 mt-8 relative">
				<div className="col-start-2 col-end-7 ">
					<div className="text-start">
						<small className="text-sm">Enter Website URL</small>
					</div>
					<form onSubmit={handleSubmission}>
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
												className="flex items-center justify-between w-full p-3 rounded-md bg-gray-100 hover:bg-main hover:bg-opacity-60 hover:text-white transition duration-300 ease-in-out"
												onClick={() => {
													setSecreenSizeDropdown((prev) => !prev);
												}}>
												<span className="text-sm">{resolutionTextvalue}</span>
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
												className="flex items-center justify-between w-full p-3 rounded-md bg-gray-100 hover:bg-main hover:bg-opacity-60 hover:text-white transition duration-300 ease-in-out"
												onClick={() => setFormatDropdown((prev) => !prev)}>
												<span className="viewFormat text-sm">.jpeg / .jpg</span>
												<Icon icon="ph:caret-up-down-light" />
											</button>
											<div
												className={`rounded-md shadow-custom_4 py-2 px-2 absolute top-100 z-10 transition duration-300 ease-in-out bg-white w-full ${
													formatDropdown
														? "visible pointer-events-auto opacity-100 translate-y-2"
														: "translate-y-8 pointer-events-none opacity-0"
												}`}>
												<div className="mb-2">
													<ul className="flex flex-col items-start gap-y-[3px]">
														{[".jpeg / .jpg", ".png", ".webp"].map((format, index) => {
															return (
																<button
																	type="button"
																	onClick={() => handleSetImageFormat(format, index)}
																	className={`text-xs transition ease-in-out duration-200 hover:bg-main hover:bg-opacity-80 w-full text-start py-2 px-3 rounded-md hover:text-white ${
																		imageFormatButtonState === index
																			? "bg-main text-white hover:bg-opacity-100"
																			: "bg-transparent"
																	}`}
																	key={index}>
																	{format}
																</button>
															);
														})}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex items-center gap-4 md:gap-8 flex-wrap p-3">
									<div>
										<label className="cont">
											<input
												type="radio"
												aria-label="desktop"
												name="screen-size-type"
												className="bg-gray-200 w-6 h-6"
												onChange={() => setUrlParameters}
											/>
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
				<div className="col-start-2 col-end-7 mt-16">
					<div className="">
						{imageLink && (
							<div>
								<a
									href={imageLink}
									download
									className="bg-main flex items-center gap-2 w-max text-white py-3 px-6 transition duration-200 ease-in-out rounded-md">
									<Icon icon="line-md:downloading-loop" className="w-7 h-7" />
									<span className="text-sm">Download Image</span>
								</a>
								<div className="mt-16 text-center border rounded-sm border-main">
									<img src={imageLink} alt="" className="w-full h-full" />
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
			<div>{loading ? <Loader /> : null}</div>
		</sizeContext.Provider>
	);
};

export default MainSection;
