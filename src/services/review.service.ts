import axios from "axios";
import { tokenDto } from "../components/type";
const API_URL = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/dorms/reviews`;
const API_URL2 = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/reviews`;

const getdormId = async (props: string) => {
  const token = localStorage.getItem("token");
  if (token) {
    const tokenObj: tokenDto = JSON.parse(token);
    const access_token = tokenObj.access_token;
    const config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };
    try {
      const result = await axios.get(`${API_URL}/${props}`, config);
      return result.data;
    } catch (err) {
      return "error";
    }
  }
  return "error";
};

const postReview = async (props: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    const tokenObj: tokenDto = JSON.parse(token);
    const access_token = tokenObj.access_token;
    const config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };
    try {
      const result = await axios.post(`${API_URL2}`, props, config);
      return true;
    } catch (err) {
      return false;
    }
  }
  return false;
};

async function getReview(props: string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj: tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization: `Bearer ${access_token}` },
            params: { 'reviewCode': props,'userId': tokenObj.userId}, 
        }
        try {
            const result = await axios.get(`${API_URL2}`, config)
            return result.data
        } catch (err) {
            return {}
        }
    }


}
const patchReview = async (reviewId: any,reviewContent: any) => {
    const token = localStorage.getItem("token")
    console.log(reviewContent);
    if (token) {
        const tokenObj: tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization: `Bearer ${access_token}` },
            params: { 'reviewCode': reviewId,'userId': tokenObj.userId},
        };
        try {
            const result = await axios.patch(`${API_URL2}`, reviewContent, config)
            return true
        } catch (err) {
            return false
        }
    }
    return false
}
const deleteReview = async (props: any) => {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj: tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization: `Bearer ${access_token}` }
        };
        try {
            const result = await axios.delete(`${API_URL2}/${props}`, config)
            return true
        } catch (err) {
            return false
        }
    }
    return false
} 
export default {
    getdormId,
    postReview,
    getReview,
    patchReview,
    deleteReview,
}
