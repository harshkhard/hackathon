import {
  GET_TEMPLATES,
  HIDE_LOADER,
  SET_ACTIVE_TEMPLATE,
  SET_FONT_COLOR,
  SET_FONT_SIZE,
} from "../types";
import { getTemplates } from "../../network";

export const getTemplatesStore = (data) => {
  return {
    type: GET_TEMPLATES,
    data: data,
  };
};

export const fetchTemplates = () => {
  return async (dispatch) => {
    const data = await getTemplates();
    dispatch(getTemplatesStore(data));
    dispatch(hideLoader());
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const setActiveTemplate = (template) => {
  return {
    type: SET_ACTIVE_TEMPLATE,
    data: template,
  };
};

export const setFontSize = (size) => {
  return {
    type: SET_FONT_SIZE,
    data: size,
  };
};

export const setFontColor = (color) => {
  return {
    type: SET_FONT_COLOR,
    data: color,
  };
};
