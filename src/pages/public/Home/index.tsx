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
            fontSize={55}
            fontWeight={700}
            color="#1E1E1E"
          >
            Explore Novas
          </Typography>
          <Typography
            fontSize={55}
            fontWeight={700}
            color="#1E1E1E"
          >
            Soluções Financeiras
          </Typography>
        </S.ContainerTitle>
      </S.Container>
    </>
  );
};

export default Home;
