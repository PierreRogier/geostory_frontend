import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object({
	email: Yup.string().email("email non valide").required("ce champs est obligatoire"),
	password: Yup.string()
		.min(5, "le mot de passe doit contenir au moins 5 caractères")
		.required("ce champs est obligatoire"),
});