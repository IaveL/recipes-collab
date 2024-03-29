import styled from "styled-components";

export const AboutContainer = styled.main`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8%;
`;

export const Line = styled.hr`
  border-bottom: 5px solid #000;
  width: 5vw;
`;

export const AboutTitle = styled.h2`
  font-size: 35px;
  padding-bottom: 3%;
`;

export const AboutText = styled.p`
  padding: 10% 18% 0 18%;
  font-size: 14.5px;
  line-height: 1.5;
`;

export const IMG = styled.img`
  width: 50vw;
  height: 100vh;
  @media (max-width: 1024px) {
    height: 60vh;
  }

  @media (max-width: 767px) {
    height: 30vh;
    width: 50vw;
  }
`;
