import React, { FC } from "react";
import { Text } from "@components";

interface HomeViewProps {}

export const HomeView: FC<HomeViewProps> = () => {
	return (
		<div>
			<Text variant="h1">Home View</Text>
		</div>
	);
};
