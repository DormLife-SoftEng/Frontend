import axios from "axios";
import {tokenDto} from "../components/type"
const API_URL = "http://localhost:5000/api/v1/users";

const getUserInfo = async () => {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` }
        };
        const result = await axios.get(`${API_URL}`,config)
        if (result.status === 200) {
            return result.data 
        }
    }
}



