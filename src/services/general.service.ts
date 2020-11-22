import axios from "axios";
const API_URL = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/dorms`;

const getDorms = async () => {
  const result = await axios.get(`${API_URL}`);
  return result.data;
};

export default {
  getDorms,
};
