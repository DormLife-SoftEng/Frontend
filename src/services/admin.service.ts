import axios from "axios";

const API_URLAdmin = "http://localhost:5000/api/v1/tickets/";

async function adminListGetDormData() {
  try {
    const result = axios.get(`${API_URLAdmin}`).then((res) => res.data);
    return result;
  } catch (err) {
    return false;
  }
}

async function adminGetDormData(urlPath: string) {
  try {
    const result = axios.get(`${API_URLAdmin}${urlPath}?offset=0&stop=0`).then((res) => res.data);
    return result;
  } catch (err) {
    return false;
  }
}

async function adminChangeDormData(urlPath: string) {
  try {
    const result = axios.patch(`${API_URLAdmin}${urlPath}`).then((res) => res.data);
    return result;
  } catch (err) {
    return false;
  }
}
async function adminDeleteDormData(urlPath: string) {
  axios
    .delete(`${API_URLAdmin}${urlPath}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
    });
}
async function adminListGetAllDorm() {
  const result = axios
    .get(`http://localhost:5000/api/v1/dorms`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return result;
}

async function adminGetApprovedDormData(dormID: string) {
  const result = axios
    .get(`http://localhost:5000/api/v1/dorms/${dormID}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
  return result;
}

export default {
  adminListGetAllDorm,
  adminListGetDormData,
  adminGetDormData,
  adminChangeDormData,
  adminDeleteDormData,
  adminGetApprovedDormData
};
