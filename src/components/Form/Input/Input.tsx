import React, { CSSProperties, FC, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { Text } from "../../Text/Text";

const InputWrapper = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
`;

const StyledInput = styled.input<InputProps>`
	${({ theme, valid = false, error = undefined }) => `
        padding: ${theme.sizes["5xs"]};
        border: 1px solid ${
			error
				? theme.colors.danger[500]
				: valid
				? theme.colors.success[500]
				: theme.colors.base[200]
		};
        border-radius: ${theme.borderRadius.lg};
        font-size: ${theme.fontSizes.lg};
		outline: solid ${
			error
				? `${theme.colors.danger[400]}40`
				: valid
				? `${theme.colors.success[200]}40`
				: "transparent"
		};
    `}
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	register: UseFormRegister<any>;
	valid?: boolean;
	required?: boolean;
	style?: CSSProperties;
}

export const Input: FC<InputProps> = ({ label, required, register, ...props }) => {
	return (
		<InputWrapper>
			<Text variant="span" fontSize="md">
				{label}{" "}
				{required && (
					<Text variant="span" color="danger" shade={500}>
						*
					</Text>
				)}
			</Text>
			{/* @ts-ignore */}

			<StyledInput {...register(label, { required })} {...props} />
			{!!props.error && (
				<Text variant="span" color="danger" shade={500}>
					{props.error}
				</Text>
			)}
		</InputWrapper>
	);
};
