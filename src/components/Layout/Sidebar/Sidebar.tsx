import React, { FC, useState } from "react";
import styled from "styled-components";
// import { useAuth } from "@contexts";
import { IconButton } from "../../Button/Button";
// import { Text } from "../../Text/Text";

const MAX_WIDTH_SIDEBAR = 300;
const MIN_WIDTH_SIDEBAR = 50;

const SidebarWrapper = styled.aside<{ isSidebarOpen: boolean }>`
	background-color: ${({ theme }) => theme.colors.primary[500]};
	width: ${({ isSidebarOpen }) =>
		isSidebarOpen ? `${MAX_WIDTH_SIDEBAR}px` : `${MIN_WIDTH_SIDEBAR}px`};
	transition: width 0.4s ease-in-out;
	overflow: hidden;
`;

const SidebarHeader = styled.header<{ isSidebarOpen: boolean }>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	// const { district } = useAuth();

	const toggleSidebar = () => {
		setIsSidebarOpen((curr) => !curr);
	};
	return (
		<SidebarWrapper isSidebarOpen={isSidebarOpen}>
			<SidebarHeader isSidebarOpen={isSidebarOpen}>
				<IconButton
					onClick={toggleSidebar}
					source="menuIcon"
					color="base"
					shade={100}
					size="3xl"
				/>
			</SidebarHeader>
		</SidebarWrapper>
	);
};
