import React, { ReactNode } from "react";
import * as S from "./index.ts";

interface ButtonProps {
  children?: ReactNode;
  backgroundColor?: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <S.Button backgroundColor={props.backgroundColor}>
        {props.children}
      </S.Button>
    </>
  );
};
export default Button;
