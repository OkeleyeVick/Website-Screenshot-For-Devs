import React from "react";

const Option = ({ children }) => {
	return (
		<button
			type="button"
			className="text-[.7rem] mt-1 p-1 py-[.4rem] transition duration-200 ease-in-out hover:bg-main hover:bg-opacity-90 w-full text-start rounded-[5px] hover:text-white">
			{children}
		</button>
	);
};

export default Option;
