import React, { useState } from "react";
import { CardStyle, Faceoff, SubTitle2 } from "../Style/StyledComponents";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, changeCounter, getQuiz } from "../redux/questionSlice";
import { useNavigate } from "react-router-dom";

export default function Card({ question }) {
  const [face, setFace] = useState(true);
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.questions);
  const navigate = useNavigate();

  const answer = (boolean) => {
    dispatch(addAnswer(boolean));
    if (counter >= 9) {
      navigate("/results");
      dispatch(getQuiz());
    } else {
      dispatch(changeCounter(counter + 1));
      setFace(true);
    }
  };

  return (
    <CardStyle>
      {face && <SubTitle2>{question}</SubTitle2>}
      {!face && (
        <Faceoff>
          <button onClick={() => answer("True")}>True</button>
          <button onClick={() => answer("False")}>False</button>
        </Faceoff>
      )}
      <button onClick={() => setFace(!face)}>
        <RiArrowGoBackFill />
      </button>
    </CardStyle>
  );
}
