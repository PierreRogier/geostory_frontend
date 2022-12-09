import React, { createContext, useContext, useState, useEffect } from "react";
import { UserModel, DistrictModel, UserRoles } from "@types";

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

	const fakeFetch = () => {
		setIsLoading(false);
		setUser({
			id: 1,
			email: "user1@gmail.com",
			firstname: "pierre",
			lastname: "rogier",
			userRole: UserRoles.ADMIN,
		});
		setIsAuthenticated(true);
		setDistrict({ id: 1, districtName: "Yvelines", zip_code: "78" });
	};

	useEffect(() => {
		setTimeout(() => {
			fakeFetch();
		}, 3000);
	}, []);

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
