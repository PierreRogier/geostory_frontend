export enum UserRoles {
	ADMIN = "ADMIN",
	EDITOR = "EDITOR",
}

export type UserModel = {
	id: number;
	email: string;
	firstname: string;
	lastname: string;
	userRole: UserRoles;
};
