/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				main: "#731DD8",
				bgColor: "#FAFBFB",
			},
			colors: {
				main: "#731DD8",
			},
			boxShadow: {
				custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
			},
		},
	},
	plugins: [],
};
