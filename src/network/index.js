import axios from "axios";

const API_URL = "https://api.memegen.link/templates/";

export const getTemplates = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
