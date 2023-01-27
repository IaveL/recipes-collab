import styled from "styled-components";

export const ContainerFooter = styled.div``;

export const BigFooter = styled.div`
  background-color: #f2f4f1;
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  padding: 8% 3% 0 3%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const FooterImg = styled.img`
  width: 3.5vw;
  height: 7vh;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3rem;
  }
`;
export const ListFooter = styled.ul`
  width: 35vw;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  display: flex;

  li {
    width: 25%;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
export const MiniFooter = styled.div`
  background-color: #446061;
  height: 10vh;
  font-size: 15px;
  color: #ffffff;

  p {
    padding-top: 2%;
    padding-left: 3%;
    opacity: 50%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  height: fit-content;

  @media (max-width: 768px) {
    margin: 2.5rem 0;
    width: 60vw;
    display: flex;
    justify-content: space-around;
  }
`;
