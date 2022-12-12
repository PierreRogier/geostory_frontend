import { Theme } from "./types";
import { tailwindColors } from "./colors";

export const theme: Theme = {
	colors: {
		white: "#ffffff",
		black: "#000000",
		base: tailwindColors.zinc,
		primary: tailwindColors.sky,
		secondary: tailwindColors.rose,
		danger: tailwindColors.red,
		success: tailwindColors.green,
		info: tailwindColors.blue,
		warning: tailwindColors.yellow,
	},
	sizes: {
		none: 0,
		"7xs": "0.125rem",
		"6xs": "0.25rem",
		"5xs": "0.375rem",
		"4xs": "0.5rem",
		"3xs": "0.625rem",
		"2xs": "0.675rem",
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "2rem",
		"4xl": "2.5rem",
		"5xl": "3rem",
		"6xl": "3.5rem",
		"7xl": "4rem",
	},
	fontSizes: {
		xs: "0.625rem",
		sm: "0.75rem",
		md: "0.875rem",
		default: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.375rem",
		"3xl": "1.5rem",
		"4xl": "2rem",
		"5xl": "3rem",
	},
	borderRadius: {
		none: 0,
		sm: "4px",
		md: "6px",
		lg: "8px",
		xl: "10px",
		"2xl": "12px",
		"3xl": "14px",
		"4xl": "20px",
		full: "50%",
	},
	boxShadow: {
		"shadow-sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
		shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
		"shadow-md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
		"shadow-lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		"shadow-xl": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
		"shadow-2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
		"shadow-inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
		"shadow-none": "0 0 #0000",
	},
};