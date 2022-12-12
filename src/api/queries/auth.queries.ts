import { UserWithDistrict } from "@types";
import { instance } from "./default.query";

export type LoginFormData = {
	email: string;
	password: string;
};

export const AuthKeys = {
	AUTHENTICATE: ["auth", "authenticate"],
	LOGIN: ["auth", "login"],
	LOGOUT: ["auth", "logout"],
};

export const authenticateUser = async (): Promise<UserWithDistrict> => {
	const res = await instance.get(`/auth/authenticate`);
	return res.data;
};

export const loginUser = async (data: LoginFormData): Promise<UserWithDistrict> => {
	const res = await instance.post(`/auth/login`, data);
	return res.data;
};

export const logoutUser = async () => {
	const res = await instance.post(`auth/logout`);
	return res.data;
};
