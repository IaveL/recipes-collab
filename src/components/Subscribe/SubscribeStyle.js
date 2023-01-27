import styled from "styled-components";

export const SubsContainer = styled.div`
  background-color: #dfe4de;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  input {
    width: 35vw;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.5rem;
    height: 4rem;
    border: white;

    :active {
      border: none;
    }
  }
`;

export const Title = styled.h3`
  padding-top: 5%;
  font-size: 30px;
  padding-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 25px;
  padding-bottom: 15px;
`;

export const Subimit = styled.h3`
  font-size: 20px;
  border: solid black 2px;
  padding: 2rem;
`;

export const DivSubimit = styled.h3`
  margin: 0 auto;
  padding-top: 3%;
`;
