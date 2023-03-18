import About from "./components/About";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import OtherSection from "./components/OtherSection";
import { useIsOnline } from "react-use-is-online";
import { Icon } from "@iconify/react";

function App() {
	const { isOnline } = useIsOnline();
	return (
		<div className="px-3 md:8">
			<div
				className={`fixed z-50 inset-0 flex items-center justify-center transition duration-300 ease-linear ${
					isOnline ? "pointer-events-none opacity-0 delay-[1s]" : "glassmorphism opacity-100"
				}`}>
				<div
					className={`bg-white rounded-md transition duration-300 ease-in-out w-3/5 ${
						!isOnline ? "" : "delay-700 translate-y-12 opacity-0"
					}`}>
					<div className="border-b py-4 px-5 flex items-center">
						<span className="text-base font-extrabold">Status: </span>
						<span className={`flex-grow text-lg font-extrabold uppercase text-center ${!isOnline ? "text-[#DD2E44]" : "text-[#2a954a]"}`}>
							{isOnline ? "Online" : "Offline"}
						</span>
					</div>
					<div className="flex items-center flex-col justify-center gap-y-8 p-5">
						<div className="bg-slate-200 rounded-full p-3 glassmorphism">
							<Icon
								icon={`${!isOnline ? "ph:wifi-slash" : "ph:wifi-high"}`}
								className={`w-8 h-8 flex text ${!isOnline ? "text-[#DD2E44]" : "text-[#2a954a]"}`}
							/>
						</div>
						<div>
							<span className="text-xl">You are currently {isOnline ? "Online 😁" : "Offline 😥"}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="title-container flex flex-col items-center justify-center my-8 gap-x-5">
				<h1 className="font-extrabold text-main text-2xl md:text-4xl">Take a Shot 📸</h1>
				<span className="text-base block text-center">An easy way to capture a screenshot of a full webpage</span>
			</div>
			<MainSection />
			<OtherSection />
			<About />
			<Footer />
		</div>
	);
}

export default App;
