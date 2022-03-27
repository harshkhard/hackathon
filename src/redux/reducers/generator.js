import {
  GET_TEMPLATES,
  HIDE_LOADER,
  SET_ACTIVE_TEMPLATE,
  SET_FONT_COLOR,
  SET_FONT_SIZE,
} from "../types";

const initialState = {
  templates: [],
  activeTemplate: [],
  loading: true,
  fontColor: "#000000",
  fontSize: 30,
};

export const generatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATES:
      return {
        ...state,
        templates: action.data,
      };

    case SET_ACTIVE_TEMPLATE:
      return {
        ...state,
        activeTemplate: action.data,
      };

    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    case SET_FONT_COLOR:
      return {
        ...state,
        fontColor: action.data,
      };

    case SET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
