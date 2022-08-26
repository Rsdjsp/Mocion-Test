import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import { getQuiz } from "./redux/questionSlice";
import { useDispatch } from "react-redux";
import Results from "./pages/Results";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}
