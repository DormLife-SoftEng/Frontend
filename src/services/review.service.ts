import axios from "axios";
import {tokenDto} from "../components/type"
const API_URL = "http://localhost:5000/api/v1/dorms/reviews";
const API_URL2 = "http://localhost:5000/api/v1/reviews";

const getdormId = async (props:string) =>{
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` }
        };
        try {
            const result = await axios.get(`${API_URL}/${props}`,config)
            return result.data
        } catch (err) {
            return "error"
        }
    }
    return "error"
}

const postReview = async (props : any) => {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` }
        };
        try {
            const result = await axios.post(`${API_URL2}`,props,config)
            return true
        } catch (err) {
            return false
        }
    }
    return false
}

// const getReview = async (props:string) =>{
//     const token = localStorage.getItem("token")
//     if (token) {
//         const tokenObj : tokenDto = JSON.parse(token)
//         const access_token = tokenObj.access_token
//         const config = {
//             headers: { Authorization : `Bearer ${access_token}` }
//         };
//         try {
//             const result = await axios.get(`${API_URL2}`,{ReviewCode:props},config)
//             return result.data
//         } catch (err) {
//             return "error"
//         }
//     }
//     return "error"
// }

export default{
    getdormId,
    postReview,
    // getReview
}