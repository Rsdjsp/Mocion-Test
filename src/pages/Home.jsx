import React from "react";
import Button from "../components/Button";
import { Cover, SubTitle, Title } from "../Style/StyledComponents";

export default function Home() {
  return (
    <Cover>
      <Title>Welcome to the Trivia Challenge</Title>
      <SubTitle>You will presented with 10 True or False questions</SubTitle>
      <SubTitle>Can you score 100% ?</SubTitle>
      <Button text={"BEGIN"}></Button>
    </Cover>
  );
}
