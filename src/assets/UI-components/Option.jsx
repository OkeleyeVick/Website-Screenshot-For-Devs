import React, { useContext } from "react";
import { sizeContext } from "../../components/MainSection";

const Option = ({ children, area }) => {
	const { screenSizeDropdown, setSecreenSizeDropdown, formatDropdown, setFormatDropdown } = useContext(sizeContext);
	const { width, height, index, containerIndex } = area;

	return (
		<button
			type="button"
			height={height}
			width={width}
			index={index}
			containerindex={containerIndex}
			onClick={() => {
				console.log(width, height, index, containerIndex);
			}}
			className="text-[.7rem] mt-1 px-3 py-[.4rem] transition duration-200 ease-in-out hover:bg-main hover:bg-opacity-90 w-full text-start rounded-[5px] hover:text-white">
			{children}
		</button>
	);
};

export default Option;
