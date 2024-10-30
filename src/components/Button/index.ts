import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  padding?: number;
  width?: number;
  border?: string;
  boxShadow?: string;
}
export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || "#000"};
  color: ${(props) => props.color || "#fff"};
  width: ${(props) => props.width || 50}%;
  border-radius: 5rem;
  padding: 15px;
  border: ${(props) => props.border || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  font-weight: 700;
  font-size: 16px;
`;
