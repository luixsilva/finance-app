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
            <S.Link href="#home">SOLUÇÕES</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link href="#projects">Sobre Nós</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link href="#projects">Sei lá</S.Link>
          </S.ListItem>
        </S.ContainerMenu>
        <S.ContainerButton>
          <Button
            boxShadow="2px 2px 5px rgba(0, 0, 0, 1)"
            border="solid 1px #1E1E1E"
            backgroundColor="inherit"
            color="#1E1E1E"
          >
            Sign In
          </Button>
          <Button
            boxShadow="2px 2px 5px rgba(0, 0, 0, 1)"
            backgroundColor="#1E1E1E"
          >
            Sign Up
          </Button>
        </S.ContainerButton>
      </S.ContainerHeader>
    </>
  );
};
export default Header;
