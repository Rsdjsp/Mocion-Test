import React from "react";
import { List } from "../Style/StyledComponents";
import Container from "./Container";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const ResultsList = ({ questions, answers }) => {
  return (
    <List>
      {questions.map(({ question, correct_answer }, index) => {
        return (
          <Container
            key={index}
            question={question}
            checked={
              correct_answer === answers[index] ? (
                <AiOutlineCheck />
              ) : (
                <AiOutlineClose />
              )
            }
          />
        );
      })}
    </List>
  );
};

export default ResultsList;
