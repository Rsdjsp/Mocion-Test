import styled from "styled-components";

export const Cover = styled.div`
  margin: 0;
  background-color: #e0e0e0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #1e1e1e;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  text-align: center;
  font-size: 3.5rem;
`;

export const SubTitle = styled.h2`
  color: #1e1e1e;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  width: 45%;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: #3e3e3e;
  font-size: 1.5rem;
  margin-top: 4.5%;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  width: 20%;
  border-radius: 5px;
  border: 2px solid #3e3e3e;
  background-color: #fafafa;
  :hover {
    color: #fafafa;
    background-color: #3e3e3e;
  }
`;
