import { MenuIcon } from "./MenuIcon";
import { HomeIcon } from "./HomeIcon";
import { CloseIcon } from "./CloseIcon";
import { PenIcon } from "./PenIcon";
import { MapIcon } from "./MapIcon";

export const icons = {
	menuIcon: MenuIcon,
	homeIcon: HomeIcon,
	closeIcon: CloseIcon,
	penIcon: PenIcon,
	mapIcon: MapIcon,
};

export type IconsType = keyof typeof icons;
