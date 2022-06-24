import styled from "styled-components";

export const SubsContainer = styled.div`
  background-color: #dfe4de;
  height: 70vh;
  text-align: center;
  input {
    width: 35vw;
    height: 10vh;
    border: white;

    ::placeholder {
      font-size: 12px;
      padding-left: 20px;
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
  padding: 8%;
`;

export const DivSubimit = styled.h3`
  width: 10vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3%;
`;
