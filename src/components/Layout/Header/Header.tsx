import React, { FC } from "react";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";
import { useAuth } from "@contexts";
import { logoutUser, AuthKeys } from "@api/queries";
import { Text } from "../../Text/Text";

const HeaderWrapper = styled.nav`
	height: 3rem;
	background-color: ${({ theme }) => theme.colors.primary[500]};
`;

const HeaderContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
`;

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
	const { setDistrict, setUser, setIsAuthenticated, district } = useAuth();
	const { mutate } = useMutation({
		mutationKey: AuthKeys.LOGOUT,
		mutationFn: logoutUser,
		onSuccess: () => {
			setDistrict(null);
			setUser(null);
			setIsAuthenticated(false);
		},
	});

	const handleLogout = () => {
		mutate();
	};

	return (
		<HeaderWrapper>
			<HeaderContainer>
				<Text variant="h2">Geostory</Text>
				<Text variant="h2">{district?.districtName}</Text>
				<div>
					<button onClick={handleLogout}>logout</button>
				</div>
			</HeaderContainer>
		</HeaderWrapper>
	);
};
