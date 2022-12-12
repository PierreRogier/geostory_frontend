import { DistrictModel } from "../district/district";

export interface UserModel {
	id: number;
	email: string;
	firstname: string;
	lastname: string;
	userRole: "Admin" | "Editor";
}

export interface UserWithDistrict extends UserModel {
	district: DistrictModel;
}
