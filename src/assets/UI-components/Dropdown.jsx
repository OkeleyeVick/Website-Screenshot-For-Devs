import React, { useContext } from "react";
import { sizeContext } from "../../components/MainSection";
import Option from "./Option";

const Dropdown = () => {
	const { screenSizeDropdown, setSecreenSizeDropdown, formatDropdown, setFormatDropdown } = useContext(sizeContext);
	return (
		<div
			className={`rounded-md shadow-custom py-2 px-2 absolute top-100 z-10 transition duration-300 ease-in-out bg-white
				 ${screenSizeDropdown ? "visible pointer-events-auto opacity-100 translate-y-2" : "translate-y-8 pointer-events-none opacity-0"}
				`}>
			<div className="rounded-md bg-main py-2 px-2 mb-3 shadow-custom">
				<span className="leading-none text-sm font-semibold text-white">Select Resolution</span>
			</div>
			<input type="hidden" name="resolution" />
			<div className=" h-52 overflow-auto">
				{ResolutionOpts.map((resolution, containerIndex) => {
					const { mediaTitleType, sizes } = resolution;
					return (
						<div className="mb-3" key={containerIndex}>
							<div className="title">
								<h5 className="text-xs font-extrabold px-3 text-gray-800">{mediaTitleType}</h5>
							</div>
							<div className="mb-2">
								<ul className="flex flex-col items-start">
									{sizes.map((size, index) => {
										return <Option key={index}>{size}</Option>;
									})}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dropdown;

const ResolutionOpts = [
	{
		mediaTitleType: "Desktop",
		sizes: [
			"320x240 (QVGA)",
			"640x480 (VGA)",
			"800x600 (SVGA)",
			"1280x720 (HD)",
			"1280x1024 (SXGA)",
			"1600x900 (HD+)",
			"1920x1080 (FHD)",
			"2048x1080 (2K)",
			"3840x2160 (4K UHD)",
		],
	},
	{
		mediaTitleType: "Android Devices",
		sizes: [
			"360x640 (Galaxy S7/S7edge/S6)",
			"360x740 (Galaxy S8/S8+/Note8/S9)",
			"360x760 (Galaxy S10)",
			"411x731 (Google Pixel, Pixel 2)",
			"427x240 (Google Glass)",
			"800x1280 (Kindle Fire)",
		],
	},
	{
		mediaTitleType: "iOS Devices",
		sizes: [
			"375x812 (iPhone X, XS)",
			"414x736 (iPhone 6+, 6s+, 7+, 8+)",
			"414x896 (iPhone XR, iPhone XS Max)",
			"768x1024 (iPad 3, 4, Air, Air2, Pro 9.7)",
			"1024x1366 (iPad Pro 12.9)",
		],
	},
];
