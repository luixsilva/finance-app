import React, { ReactNode } from "react";
import * as S from "./index.ts";

interface TypographyProps {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
  return (
    <S.Typography
      color={props.color}
      fontFamily={props.fontFamily}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
    >
      {props.children}
    </S.Typography>
  );
};
export default Typography;
