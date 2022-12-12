import React, { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "@contexts";
import { ErrorView, HomeView, DistrictView, StoriesView } from "@views";
import { Layout } from "@components";

interface UserLayoutProps {}

export const UserLayout: FC<UserLayoutProps> = () => {
	const { isAuthenticated, user, district } = useAuth();

	if (!isAuthenticated) return <Navigate to="/login" />;
	if (isAuthenticated && !user && !district) return <ErrorView />;

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path={`${district?.zip_code}/home`} element={<HomeView />} />
				<Route path={`${district?.zip_code}/district`} element={<DistrictView />} />
				<Route path={`${district?.zip_code}/stories`} element={<StoriesView />} />
				<Route path="*" element={<HomeView />} />
				<Route
					index
					element={<Navigate to={`${district?.zip_code}/home`} replace={true} />}
				/>
			</Route>
		</Routes>
	);
};
