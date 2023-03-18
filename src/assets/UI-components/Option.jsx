import React, { useContext } from "react";
import { sizeContext } from "../../components/MainSection";

const Option = ({ children, area }) => {
	const { setResolutionTextValue, setSecreenSizeDropdown, resolutionState, setResolutionState, urlParameters, setUrlParameters } =
		useContext(sizeContext);
	const { width, height, index, containerIndex } = area;

	const handleSetFormatState = (height, width, index, containerIndex) => {
		setSecreenSizeDropdown(false);
		const newState = {
			...resolutionState,
			cIndex: containerIndex,
			index: index,
		};
		setResolutionState(newState);
		setUrlParameters({
			...urlParameters,
			width: width,
			height: height,
		});
		setResolutionTextValue(children);
	};

	return (
		<>
			<button
				type="button"
				height={height}
				width={width}
				index={index}
				containerindex={containerIndex}
				onClick={() => {
					handleSetFormatState(height, width, index, containerIndex);
				}}
				className={`text-[.7rem] mt-1 px-3 py-[.4rem] transition duration-200 ease-in-out hover:bg-main hover:bg-opacity-90 w-full text-start rounded-[5px] hover:text-white 
				${containerIndex === resolutionState.cIndex && index === resolutionState.index ? "bg-main text-white hover:bg-opacity-100" : "bg-transparent"}`}>
				{children}
			</button>
		</>
	);
};

export default Option;
