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
    const result = axios.get(`${API_URLAdmin}${urlPath}?offset=0&stop0`).then((res) => res.data);
    return result;
  } catch (err) {
    return false;
  }
}

async function adminChangeDormData(urlPath: string) {
  try {
    const result = axios.get(`${API_URLAdmin}${urlPath}`).then((res) => res.data);
    return result;
  } catch (err) {
    return false;
  }
}
async function adminDeleteDormData(urlPath: string) {
  const result = axios
    .delete(`${API_URLAdmin}${urlPath}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
    });
}

export default {
  adminListGetDormData,
  adminGetDormData,
  adminChangeDormData,
  adminDeleteDormData,
};
