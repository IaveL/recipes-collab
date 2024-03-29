import styled from "styled-components";

export const RecipesContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 2rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 160vh;
    gap: 1.5rem;
  }
`;
export const RecipeCardContainer = styled.article`
  width: 24vw;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: fit-content;
  @media (max-width: 768px) {
    width: 250px;
    margin: 0;
  }
`;
export const RecipeImg = styled.img`
  width: 100%;
`;
export const RecipeName = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
  box-shadow: 0px 7px 6px #00000029;
  @media (max-width: 768px) {
    height: 15rem;
  }
`;
export const RecipeTitle = styled.h3`
  margin-top: 20px;
`;
export const Line = styled.hr`
  border-bottom: 3.5px solid #000;
  width: 3vw;
`;
export const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Latest = styled.h2`
  text-align: center;
  margin-bottom: 8px;
  margin-top: 100px;
`;
export const LineLatest = styled.hr`
  border-bottom: 3.5px solid #000;
  margin-left: 47.5%;
  width: 4.2vw;
`;
