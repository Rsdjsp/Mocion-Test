import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import ResultsList from "../components/ResultsList";
import { Cover, Title } from "../Style/StyledComponents";

export default function Results() {
  const { answers, questions } = useSelector((state) => state.questions);
  let score = 0;
  if (questions) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === questions[i].correct_answer) {
        score = score + 1;
      }
    }
  }

  return (
    <Cover>
      <Title>
        Your Scored <br />
        {score}/10
      </Title>
      <ResultsList questions={questions} answers={answers} />
      <Button text={"PLAY AGAIN?"} navigates={"/"} />
    </Cover>
  );
}
