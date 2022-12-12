import React, { CSSProperties, FC } from "react";
import styled from "styled-components";
import { FontSize, Color, Shade } from "@styles";

type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "span" | "p";

const getSemanticTag = (
	variant: TextVariant | undefined,
	children: React.ReactNode,
	props: TextProps
) => {
	switch (variant) {
		case "h1":
			return (
				<StyledH1 variant={variant} {...props}>
					{children}
				</StyledH1>
			);
		case "h2":
			return (
				<StyledH2 variant={variant} {...props}>
					{children}
				</StyledH2>
			);
		case "h3":
			return (
				<StyledH3 variant={variant} {...props}>
					{children}
				</StyledH3>
			);
		case "h4":
			return (
				<StyledH4 variant={variant} {...props}>
					{children}
				</StyledH4>
			);
		case "h5":
			return (
				<StyledH5 variant={variant} {...props}>
					{children}
				</StyledH5>
			);
		case "span":
			return (
				<StyledSpan variant={variant} {...props}>
					{children}
				</StyledSpan>
			);
		default:
			return (
				<StyledP variant={variant} {...props}>
					{children}
				</StyledP>
			);
	}
};

interface TextProps {
	variant?: TextVariant;
	children?: React.ReactNode;
	fontSize?: FontSize;
	color?: Color;
	shade?: Shade;
	style?: CSSProperties;
	align?: "left" | "center" | "right" | "justify";
}

export const Text: FC<TextProps> = ({ children, variant, ...props }) => {
	return <>{getSemanticTag(variant, children, props)}</>;
};

const StyledH1 = styled.h1<TextProps>`
	${({ theme, color, shade, fontSize = "5xl", align = "start" }) => `
        color: ${color && shade ? theme.colors[color][shade] : "inherit"};
		text-align: ${align};
		font-size: ${theme.fontSizes[fontSize]}
    `}
`;

const StyledH2 = styled.h2<TextProps>`
	${({ theme, color, shade, fontSize = "3xl", align = "start" }) => `
        color: ${color && shade ? theme.colors[color][shade] : "inherit"};
		text-align: ${align};
		font-size: ${theme.fontSizes[fontSize]}
    `}
`;

const StyledH3 = styled.h3<TextProps>`
	${({ theme, color, shade, fontSize = "2xl", align = "start" }) => `
        color: ${color && shade ? theme.colors[color][shade] : "inherit"};
		text-align: ${align};
		font-size: ${theme.fontSizes[fontSize]}
    `}
`;

const StyledH4 = styled.h4<TextProps>`
	${({ theme, color, shade, fontSize = "xl", align = "start" }) => `
        color: ${color && shade ? theme.colors[color][shade] : "inherit"};
		text-align: ${align};
		font-size: ${theme.fontSizes[fontSize]}
    `}
`;

const StyledH5 = styled.h5<TextProps>`
	${({ theme, color, shade, fontSize = "lg", align = "start" }) => `
        color: ${color && shade ? theme.colors[color][shade] : "inherit"};
		text-align: ${align};
		font-size: ${theme.fontSizes[fontSize]}
    `}
`;

const StyledSpan = styled.span<TextProps>`
	${({ theme, color, shade, fontSize = "md", align = "start" }) => `
        color: ${color && shade ? theme.colors[color][shade] : "inherit"};
		text-align: ${align};
		font-size: ${theme.fontSizes[fontSize]}
    `}
`;

const StyledP = styled.p<TextProps>`
	${({ theme, color, shade, fontSize = "md", align = "start" }) => `
        color: ${color && shade ? theme.colors[color][shade] : "inherit"};
		text-align: ${align};
		font-size: ${theme.fontSizes[fontSize]}
    `}
`;
