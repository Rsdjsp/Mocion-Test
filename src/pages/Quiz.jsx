import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

import { Cover, Number, Title } from "../Style/StyledComponents";

export default function Quiz() {
  const { questions, counter } = useSelector((state) => state.questions);
  const currentQuestion = questions[counter] ?? "";

  return (
    <Cover>
      <Title>{currentQuestion.category}</Title>
      <Card question={currentQuestion.question}></Card>
      <Number>{counter + 1}/10</Number>
    </Cover>
  );
}
