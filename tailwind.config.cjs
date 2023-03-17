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
				custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
				custom_2: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
				custom_3: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
				custom_4: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			},
		},
	},
	plugins: [],
};
