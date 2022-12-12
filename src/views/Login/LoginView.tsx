import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@contexts";
import { loginUser, AuthKeys } from "@api/queries";
import { Text } from "@components";

interface LoginViewProps {}

export const LoginView: FC<LoginViewProps> = () => {
	const [theError, setTheError] = useState<AxiosError | null>(null);
	const navigate = useNavigate();
	const { setUser, setDistrict, setIsAuthenticated, isAuthenticated } = useAuth();
	const { mutate, isLoading, isError } = useMutation({
		mutationKey: AuthKeys.LOGIN,
		mutationFn: () => {
			return loginUser({ email: "admin78@gmail.com", password: "motdepasse78" });
		},
		onSuccess(data) {
			const { district, ...user } = data;
			setUser(user);
			setDistrict(district);
			setIsAuthenticated(true);
			navigate("/", { replace: true });
		},
		onError: (err: AxiosError) => {
			setTheError(err);
		},
	});

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	return (
		<div>
			<Text variant="h1">Login View</Text>
			<button onClick={() => mutate()} disabled={isLoading}>
				login
			</button>
			{!!isError && <div>{JSON.stringify(theError?.response?.data)}</div>}
		</div>
	);
};
