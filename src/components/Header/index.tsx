import Button from "../Button/index.tsx";
import * as S from "./index.ts";

const Header = () => {
  return (
    <>
      <S.ContainerHeader>
        <S.ContainerLogo>
          <div>logo</div>
        </S.ContainerLogo>
        <S.ContainerMenu>
          <S.ListItem>
            <a href="#home">Soluções</a>
          </S.ListItem>
          <S.ListItem>
            <a href="#projects">Sobre Nós</a>
          </S.ListItem>
          <S.ListItem>
            <a href="#projects">Sei lá</a>
          </S.ListItem>
        </S.ContainerMenu>
        <S.ContainerButton>
          <Button>Sign In</Button>
        </S.ContainerButton>
      </S.ContainerHeader>
    </>
  );
};
export default Header;
