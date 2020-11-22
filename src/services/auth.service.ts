import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  LoginForm,
  RegisterDormFinderForm,
  RegisterDormOwnerForm,
  tokenDto,
} from "../components/type";

const API_URL = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/users/`;

const API_URLSignin = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/oauth/`;

async function RegisterDormFinder(form: RegisterDormFinderForm) {
  try {
    await axios.post(`${API_URL}sign-up`, form);
    const loginForm: LoginForm = {
      username: form.email,
      password: form.password,
    };
    const resultLogin = await Login(loginForm);
    return resultLogin;
  } catch (err) {
    return { isAuthError: true };
  }
}
async function RegisterDormOwner(form: RegisterDormOwnerForm) {
  try {
    await axios.post(`${API_URL}sign-up`, form);
    const loginForm: LoginForm = {
      username: form.email,
      password: form.password,
    };
    const resultLogin = await Login(loginForm);
    return resultLogin;
  } catch (err) {
    return { isAuthError: true };
  }
}
async function Login(form: LoginForm) {
  try {
    const response = await axios.post(`${API_URLSignin}sign-in`, form);
    if (response.data.access_token) {
      var decodedtoken = jwt_decode<tokenDto>(response.data.access_token);
      decodedtoken = {
        ...decodedtoken,
        refresh_token: response.data.refresh_token,
        access_token: response.data.access_token,
      };
      localStorage.setItem("token", JSON.stringify(decodedtoken));
      return { token: decodedtoken, isAuthError: false };
    }
    return { isAuthError: false };
  } catch (err) {
    return { isAuthError: true };
  }
}
async function Logout() {
  const token = localStorage.getItem("token");
  if (token) {
    const tokenObj: tokenDto = JSON.parse(token);
    const access_token = tokenObj.access_token;
    const config = {
      headers: { Authorization: `Bearer ${access_token}` },
    };
    try {
      await axios.post(`${API_URLSignin}sign-out`, null, config);
      localStorage.removeItem("token");
      return true;
    } catch (err) {
      localStorage.removeItem("token");
      return true;
    }
  } else {
    return false;
  }
}
// function getCurrentUser() {

//     const token  = localStorage.getItem("token")
//     if (typeof token === 'string') {
//         const user = JSON.parse(token);
//         return user
//     } else {
//         return null
//     }
// }

const isExpired = (decodeToken: tokenDto) => {
  const expdate = decodeToken.exp * 1000;
  return expdate < Date.now();
};

const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenObj: tokenDto = JSON.parse(token);
  if (isExpired(tokenObj)) {
  }
  return tokenObj;
};

export default {
  RegisterDormFinder,
  RegisterDormOwner,
  Login,
  Logout,
  isExpired,
  getToken,
};
