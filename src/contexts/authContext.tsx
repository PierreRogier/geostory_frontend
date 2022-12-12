import React, { createContext, useContext, useState } from "react";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { UserModel, DistrictModel } from "@types";
import { authenticateUser, AuthKeys } from "@api/queries";

interface AuthContextInterface {
	user: UserModel | null;
	setUser: React.Dispatch<React.SetStateAction<UserModel | null>>;
	district: DistrictModel | null;
	setDistrict: React.Dispatch<React.SetStateAction<DistrictModel | null>>;
	isAuthenticated: boolean;
	setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextInterface>({
	user: null,
	setUser: () => {},
	district: null,
	setDistrict: () => {},
	isAuthenticated: false,
	setIsAuthenticated: () => {},
	isLoading: true,
});

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<UserModel | null>(null);
	const [district, setDistrict] = useState<DistrictModel | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useQuery({
		queryKey: AuthKeys.AUTHENTICATE,
		queryFn: authenticateUser,
		onSuccess: (data) => {
			const { district, ...user } = data;
			setIsLoading(false);
			setUser(user);
			setIsAuthenticated(true);
			setDistrict(district);
		},
		onError: (err: AxiosError) => {
			setIsLoading(false);
		},
		retry: false,
	});

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				user,
				setUser,
				isLoading,
				district,
				setDistrict,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth(): AuthContextInterface {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}

export function useIsAuthenticated(): boolean {
	const context = useAuth();
	return context.isAuthenticated;
}
