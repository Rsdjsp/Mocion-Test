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
  width: 50%;
  min-height: 150px;
  text-align: center;
  font-size: 3rem;
`;

export const SubTitle = styled.h2`
  color: #1e1e1e;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  width: 45%;
  text-align: center;
`;

export const SubTitle2 = styled.h2`
  color: #1e1e1e;
  margin: auto;
  font-size: 1.5rem;
  width: 80%;
  text-align: center;
`;

export const ButtonStyle = styled.button`
  margin-left: auto;
  margin-right: auto;
  color: #3e3e3e;
  font-size: 1.5rem;
  margin-top: 4.5%;
  margin-bottom: 3%;
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

export const CardStyle = styled.div`
  border: 2px solid #3e3e3e;
  width: 50%;
  height: 280px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  position: relative;

  & > button {
    position: absolute;
    top: 85%;
    right: 2%;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    background-color: transparent;
    :hover {
      color: #ff8552;
    }
  }
`;

export const Faceoff = styled.div`
  width: 100%;
  display: flex;
  & > button {
    margin: auto;
    background-color: #fafafa;
    color: #3e3e3e;
    font-size: 1.5rem;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    width: 30%;
    height: 15%;
    :hover {
      color: #fafafa;
      background-color: #3e3e3e;
    }
  }
`;

export const Number = styled.p`
  color: #3e3e3e;
  font-size: 1.2rem;
  margin: auto;
`;

export const List = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const CheckList = styled.div`
  color: #3e3e3e;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  & > h4 {
    font-size: 1.7rem;
    color: #3e3e3e;
    font-weight: 500;
    margin-right: 12px;
  }
`;
