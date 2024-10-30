import React, { ReactNode } from "react";
import * as S from "./index.ts";

interface ButtonProps {
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
  padding?: number;
  width?: number;
  border?: string;
  boxShadow?: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <S.Button
        color={props.color}
        width={props.width}
        border={props.border}
        backgroundColor={props.backgroundColor}
        boxShadow={props.boxShadow}
      >
        {props.children}
      </S.Button>
    </>
  );
};
export default Button;
