import Typography from "../../../components/Typography/index.tsx";
import Header from "../../../components/Header/index.tsx";
import * as S from "./index";

const Home = () => {
  return (
    <>
      <S.Container>
        <S.ContainerHeader>
          <Header />
        </S.ContainerHeader>
        <S.ContainerTitle>
          <Typography
            fontSize={65}
            fontFamily="Inter, sans-serif"
            fontWeight={700}
          >
            Explore Novas
          </Typography>
          <Typography
            fontSize={65}
            fontFamily="Inter, sans-serif"
            fontWeight={700}
          >
            Soluções Financeiras
          </Typography>
        </S.ContainerTitle>
      </S.Container>
    </>
  );
};

export default Home;
