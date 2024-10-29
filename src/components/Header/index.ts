import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  height: 5%;
  width: 90%; // Diminui a largura para centralizar melhor
  max-width: 1200px; // Limite de largura para evitar expansão total em telas grandes
  align-items: center;
  justify-content: space-between; // Distribui logo, menu e botão com espaçamento entre eles
  margin: 0 auto; // Centraliza o header horizontalmente
  padding: 1rem 0; // Adiciona um pequeno padding vertical
`;

export const ContainerLogo = styled.div``;

export const ContainerMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 3rem;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  cursor: pointer;
  color: #000;
  &:hover {
    color: #8f43ee;
    transform: scale(1.1);
  }
  font-size: 20px;
  transition: 0.3s ease;
  /* box-shadow: 0px 0px 2px 2px lightblue; */
`;
