import React from "react";
import { CheckList } from "../Style/StyledComponents";

const Container = ({ question, checked }) => {
  return (
    <CheckList>
      <h4>{checked}</h4>
      <p>{question}</p>
    </CheckList>
  );
};

export default Container;
