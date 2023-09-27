// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  INPUT_CHANGE,
  RESET_FORM,
} from "./action-types";
const initialWheelState = {
  activeCog: 0,
};
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return {
        ...state,
        activeCog: (state.activeCog + 1) % 6,
      };
    case MOVE_COUNTERCLOCKWISE:
      return {
        ...state,
        activeCog: (state.activeCog - 1 + 6) % 6,
      };
    default:
      return state;
  }
}
const initialQuizState = {
  quiz: '',
  loading: false,
  selectedAnswer: '',
  message: "",
};

function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
        quiz: action.payload,
        loading: !action.payload,
      };
    case SET_SELECTED_ANSWER:
      return {
        ...state,
        message: "",
        selectedAnswer: action.payload,
      };
    default:
      return state;
  }
}

const initialMessageState = {
  message: "",
};

function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return { message: action.payload };
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value.trim(),
      };
    case RESET_FORM:
      return {
        newQuestion: "",
        newTrueAnswer: "",
        newFalseAnswer: "",
      };
    default:
      return state;
  }
}

export default combineReducers({ wheel, quiz, form, infoMessage });
