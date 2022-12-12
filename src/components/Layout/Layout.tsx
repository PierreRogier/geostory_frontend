import React, { FC } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

const LayoutWrapper = styled.div`
	flex: 1;
`;

const MainWrapper = styled.div`
	height: calc(100vh - 3rem);
	display: flex;
`;

const MainContainer = styled.main`
	flex: 1;
	height: 100%;
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.base[800]};
	}
	::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) => theme.colors.base[600]};
	}
`;

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
	return (
		<>
			<LayoutWrapper>
				<Header />
				<MainWrapper>
					<Sidebar />
					<MainContainer>
						<Outlet />
					</MainContainer>
				</MainWrapper>
			</LayoutWrapper>
		</>
	);
};
