import axios from "axios";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";

export function moveClockwise() {
  return function (dispatch) {
    dispatch({ type: MOVE_CLOCKWISE });
  };
}

export function moveCounterClockwise() {
  return function (dispatch) {
    dispatch({ type: MOVE_COUNTERCLOCKWISE });
  };
}

export function selectAnswer(answer_id) {
  return function (dispatch) {
    dispatch({ type: SET_SELECTED_ANSWER, payload: answer_id });
  };
}

export function setMessage(message) {
  return function (dispatch) {
    dispatch({
      type: SET_INFO_MESSAGE,
      payload: message,
    });
  };
}

export function inputChange(name, value) {
  return function (dispatch) {
    dispatch({
      type: INPUT_CHANGE,
      payload: {
        name,
        value,
      },
    });
  };
}

export function resetForm() {
  return function (dispatch) {
    dispatch({ type: RESET_FORM });
  };
}

// ❗ Async action creators
export function fetchQuiz() {
  return async function (dispatch) {
    try {
      dispatch({ type: SET_QUIZ_INTO_STATE, payload: null });
      const response = await axios.get("http://localhost:9000/api/quiz/next");
      dispatch({ type: SET_QUIZ_INTO_STATE, payload: response.data });
    } catch (error) {
      console.error("Error fetching quiz: ", error);
      dispatch({
        type: SET_INFO_MESSAGE,
        payload: "Failed to fetch quiz. Please try again.",
      });
    }
  };
}
export function postAnswer(answer) {
  return function (dispatch) {
    // Simulate an API call to post the answer
    // In a real application, you would make an actual HTTP request here
    setTimeout(() => {
      // Assuming 'answer' is successfully posted

      // Dispatch an action to reset the selected answer state
      dispatch(resetSelectedAnswer());

      // Dispatch an action to set the server message to state
      dispatch(setServerMessage("Answer posted successfully!"));

      // Dispatch the fetching of the next quiz
      dispatch(fetchQuiz());
    }, 1000); // Simulating a delay (replace with actual API call)
  };
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
