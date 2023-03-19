import { Icon } from "@iconify/react";
import React, { useContext } from "react";
import { sizeContext } from "../../components/MainSection";

const Error = () => {
	const { error } = useContext(sizeContext);

	return (
		<div
			className="fixed top-2 right-2
		 md:top-2 md:right-2 py-3 px-3 shadow-custom_4 rounded-md flex items-center gap-x-4 bg-white z-40 w-52 xs:w-72 md:w-80">
			<Icon icon="icon-park-solid:caution" className="w-4 h-4 text-[#DD2E44]" />
			<span className="text-xs font-semibold leading-4 flex-1">{error}</span>
		</div>
	);
};

export default Error;
