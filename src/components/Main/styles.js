import styled from "styled-components";
import MainBackground from "../../assets/Inicio.png";
import BackgroundMobile from "../../assets/InicioMobile.png";
export const MainContainer = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${MainBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    background-image: url(${BackgroundMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
export const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  width: 100%;
  padding: 0 5rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
export const HeaderNavBar = styled.ul`
  width: 35vw;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;

  @media (max-width: 1024px) {
    padding: 1rem;
  }

  @media (max-width: 500px) {
    padding: 0;
    margin: 4rem 0 0 4rem;
    gap: 0.8rem;
    flex-direction: column;
  }
`;
export const NavItem = styled.li`
  width: 25%;
  text-align: center;
  text-transform: uppercase;
`;
export const HighlightNavItem = styled.li`
  border: solid black;
  text-align: center;
  padding: 0.8rem;
  text-transform: uppercase;
  @media (max-width: 500px) {
    /* padding: 0.7rem; */
  }
`;
export const MainTitle = styled.h1`
  font-size: 5em;
  /* width: fit-content; */
  margin: 0 auto;
  letter-spacing: 7px;
  @media (max-width: 500px) {
    font-size: 3em;
    position: relative;
    bottom: 3rem;
  }
`;
export const TitleWrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
  }
`;
