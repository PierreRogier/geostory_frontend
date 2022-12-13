import React, { FC, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@contexts";
import { SERVER_ERROR } from "@types";
import {LOGIN_SCHEMA} from "@validation"
import { loginUser, AuthKeys, LoginFormData } from "@api/queries";
import { Text, Input } from "@components";

const LoginFormWrapper = styled.div``;

const FormContainer = styled.form`
	width: 300px;
`;

const InputContainer = styled.div``;

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
	const [serverError, setServerError] = useState<SERVER_ERROR | null>(null);
	const navigate = useNavigate();
	const { setUser, setDistrict, setIsAuthenticated } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<LoginFormData>({
		resolver: yupResolver(LOGIN_SCHEMA),
	});

	const { mutate, isLoading, isError: isServerError } = useMutation({
		mutationKey: AuthKeys.LOGIN,
		mutationFn: (data: LoginFormData) => {
			return loginUser(data);
		},
		onSuccess(data) {
			const { district, ...user } = data;
			setUser(user);
			setDistrict(district);
			setIsAuthenticated(true);
			navigate("/", { replace: true });
		},
		onError: (err: AxiosError) => {
			const data = err?.response?.data as SERVER_ERROR;
			if (!!data) {
				setServerError(data);
			}
		},
	});

	const handleLogin: SubmitHandler<LoginFormData> = (data) => {
		mutate(data);
	};

	return (
		<LoginFormWrapper>
			<FormContainer onSubmit={handleSubmit(handleLogin)}>
				<InputContainer>
					<Input
						type="email"
						register={register}
						label="email"
						error={errors?.email?.message}
						required
					/>
				</InputContainer>
				<InputContainer>
					<Input
						type="password"
						register={register}
						label="password"
						error={errors?.password?.message}
						required
					/>
				</InputContainer>
				<div>
					{!!isServerError && (
						<Text color="danger" shade={500}>
							{serverError?.message}
						</Text>
					)}
				</div>
				<button disabled={isLoading || !isValid} type="submit">
					valider
				</button>
			</FormContainer>
		</LoginFormWrapper>
	);
};
