import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import { IconsType, icons } from "@assets/Icons";
import { Color, Size, Shade } from "@styles";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
	size?: ButtonSize;
	style?: CSSProperties;
}

export const Button: FC<ButtonProps> = () => {
	return <div></div>;
};

const IconButtonWrapper = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: transparent;
`;

const IconContainer = styled.span<Pick<IconButtonProps, "size" | "color" | "shade">>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme, color = "primary", shade = 500 }) => theme.colors[color][shade]};
	& > svg {
		${({ theme, size = "md" }) => `
            width: ${theme.sizes[size]};
            height: ${theme.sizes[size]};
            color: inherit;
            cursor: pointer;
        `}
	}
`;

interface IconButtonProps {
	size?: Size;
	style?: CSSProperties;
	source: IconsType;
	onClick?: () => void;
	color?: Color;
	shade?: Shade;
}

export const IconButton: FC<IconButtonProps> = ({ source, size, style, onClick, color, shade }) => {
	const Icon = icons[source];

	return (
		<IconButtonWrapper onClick={onClick}>
			<IconContainer size={size} color={color} shade={shade}>
				<Icon />
			</IconContainer>
		</IconButtonWrapper>
	);
};
