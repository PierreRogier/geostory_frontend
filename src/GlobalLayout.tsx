import React, { FC } from "react";
import styled from "styled-components";
import { useAuth } from "@contexts";
import { Loader } from "@components";

const GlobalDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	color: ${({ theme }) => theme.colors.base[700]};
`;

interface GlobalLayoutProps {
	children: React.ReactNode;
}

export const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
	const { isLoading } = useAuth();

	return <GlobalDiv>{isLoading ? <Loader /> : children}</GlobalDiv>;
};
