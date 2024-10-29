import styled from "styled-components";

interface TypographyProps {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
}

export const Typography = styled.text<TypographyProps>`
  font-size: ${(props) => props.fontSize || 20}px;
  font-weight: ${(props) => props.fontWeight || 400};
  font-family: ${(props) => props.fontFamily || "Arial"};
  color: ${(props) => props.color || "black"};
`;
