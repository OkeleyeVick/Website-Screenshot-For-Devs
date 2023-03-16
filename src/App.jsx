import MainSection from "./components/MainSection";
import OtherSection from "./components/OtherSection";

function App() {
	return (
		<div className="p-4 md:8">
			<div className="title-container flex flex-col items-center justify-center my-4 gap-x-5">
				<h1 className="font-extrabold text-main text-2xl md:text-4xl">Take a Shot 📸</h1>
				<span className="text-base block">An easy way to capture a screenshot of a full webpage</span>
			</div>
			<MainSection />
			<OtherSection />
		</div>
	);
}

export default App;
