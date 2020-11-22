import axios from "axios";
const DORM_URL = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/dorms`;
const REV_URL = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/reviews`;

async function getOneDorm(dormID: string) {
  const result = await axios.get(`${DORM_URL}/${dormID}`);
  console.log(result.data);
  return result.data;
}

async function getDormReviews(dormID: string) {
  const result = await axios.get(`${REV_URL}`, {
    params: {
      dormId: dormID,
    },
  });
  return result.data;
}

export default {
  getOneDorm,
  getDormReviews,
};
