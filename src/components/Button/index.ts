import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
}
export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor || "#000"};
  
`;
