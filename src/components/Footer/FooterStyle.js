import styled from "styled-components";

export const ContainerFooter = styled.div``;

export const BigFooter = styled.div`
  background-color: #f2f4f1;
  height: 40vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  text-align: center;

  padding: 8% 3% 0 3%;
`;
export const FooterImg = styled.img`
  width: 3.5vw;
  height: 7vh;
  margin-left: 0.5rem;
`;
export const ListFooter = styled.ul`
  width: 35vw;
  height: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  display: flex;
  margin-left: 40%;

  li {
    width: 25%;
    text-align: center;
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
