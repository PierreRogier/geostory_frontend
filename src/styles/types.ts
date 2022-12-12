type MainColor = {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
};

export type Color = "primary" | "secondary" | "base" | "danger" | "success";

export type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Size =
	| "none"
	| "7xs"
	| "6xs"
	| "5xs"
	| "4xs"
	| "3xs"
	| "2xs"
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl"
	| "7xl";

export type FontSize = "xs" | "sm" | "md" | "default" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

export type BorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";

export type BoxShadow =
	| "shadow-sm"
	| "shadow"
	| "shadow-md"
	| "shadow-lg"
	| "shadow-xl"
	| "shadow-2xl"
	| "shadow-inner"
	| "shadow-none";

export interface Theme {
	colors: {
		white: string;
		black: string;
		primary: MainColor;
		secondary: MainColor;
		base: MainColor;
		danger: MainColor;
		success: MainColor;
		info: MainColor;
		warning: MainColor;
	};
	sizes: {
		none: number;
		"7xs": string;
		"6xs": string;
		"5xs": string;
		"4xs": string;
		"3xs": string;
		"2xs": string;
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		"2xl": string;
		"3xl": string;
		"4xl": string;
		"5xl": string;
		"6xl": string;
		"7xl": string;
	};
	fontSizes: {
		xs: string;
		sm: string;
		md: string;
		default: string;
		lg: string;
		xl: string;
		"2xl": string;
		"3xl": string;
		"4xl": string;
		"5xl": string;
	};
	borderRadius: {
		none: number;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		"2xl": string;
		"3xl": string;
		"4xl": string;
		full: string;
	};
	boxShadow: {
		"shadow-sm": string;
		shadow: string;
		"shadow-md": string;
		"shadow-lg": string;
		"shadow-xl": string;
		"shadow-2xl": string;
		"shadow-inner": string;
		"shadow-none": string;
	};
}
