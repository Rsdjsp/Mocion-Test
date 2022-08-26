import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeCounter, getQuiz, resetAnswer } from "../redux/questionSlice";

import { ButtonStyle } from "../Style/StyledComponents";

export default function Button({ text, navigates }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reset = (url) => {
    navigate(`${url}`);
    if ((url = "/")) {
      dispatch(getQuiz());
      dispatch(changeCounter(0));
      dispatch(resetAnswer());
    }
  };

  return <ButtonStyle onClick={() => reset(navigates)}>{text}</ButtonStyle>;
}
