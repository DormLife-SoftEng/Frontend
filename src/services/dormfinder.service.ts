import axios from "axios";
import { tokenDto } from "../components/type";
import { user } from "../components/newType";
const API_URL = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/users`;

const getUserInfo = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const tokenObj: tokenDto = JSON.parse(token);
    const access_token = tokenObj.access_token;
    const config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };
    try {
      const result = await axios.get(`${API_URL}`, config);
      return result.data as user;
    } catch (err) {
      return null;
    }
  }
  return null;
};
export default {
  getUserInfo,
};
