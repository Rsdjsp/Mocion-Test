import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getQuiz = createAsyncThunk("questions/all", async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
    {
      credentials: "omit",
    }
  ).then((response) => response.json());

  return response.results;
});

const questionSlice = createSlice({
  name: "questions",
  initialState: {
    loading: false,
    error: false,
    questions: [],
    currentCuestion: {},
    counter: 0,
    answers: [],
  },
  reducers: {
    changeCounter(state, action) {
      state.counter = action.payload;
    },
    addAnswer(state, action) {
      const newAnswer = action.payload;
      state.answers.push(newAnswer);
    },
    resetAnswer(state, action) {
      state.answers = [];
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuiz.rejected, (state) => {
        state.error = true;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.currentCuestion = action.payload[0];
      });
  },
});

const questionReducer = questionSlice.reducer;
export const { changeCounter, addAnswer,resetAnswer } = questionSlice.actions;
export default questionReducer;
