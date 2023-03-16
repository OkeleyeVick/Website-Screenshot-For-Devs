import React, { useContext } from "react";
import { sizeContext } from "../../components/MainSection";

const Option = ({ children }) => {
	const { screenSizeDropdown, setSecreenSizeDropdown, formatDropdown, setFormatDropdown } = useContext(sizeContext);

	return (
		<button
			type="button"
			className="text-[.7rem] mt-1 px-3 py-[.4rem] transition duration-200 ease-in-out hover:bg-main hover:bg-opacity-90 w-full text-start rounded-[5px] hover:text-white">
			{children}
		</button>
	);
};

export default Option;
