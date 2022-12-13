import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts";
import { Text } from "@components";
import { LoginForm } from "./LoginForm";

interface LoginViewProps {}

export const LoginView: FC<LoginViewProps> = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	return (
		<div>
			<Text variant="h1">Geostory</Text>
			<LoginForm />
		</div>
	);
};
