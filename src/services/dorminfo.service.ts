<<<<<<< Updated upstream
import axios from "axios";
const DORM_URL = "http://localhost:5000/api/v1/dorms"
const REV_URL = "http://localhost:5000/api/v1/reviews"

async function getOneDorm(dormID : string) {
    const result = await axios.get(`${DORM_URL}/${dormID}`)
    return result.data
}

async function getDormReviews(dormID : string) {
    const result = await axios.get(`${REV_URL}`, {params:{
        'dormId': dormID
    }})
    return result.data
}

export default {
    getOneDorm,
    getDormReviews
=======
import axios from "axios";
import { tokenDto } from "../components/type";
const DORM_URL = "http://localhost:5000/api/v1/dorms"
const REV_URL = "http://localhost:5000/api/v1/reviews"

async function getOneDorm(dormID : string) {
    const result = await axios.get(`${DORM_URL}/${dormID}`)
    console.log(result.data)
    return result.data
}

async function getDormReviews(dormID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}`},
            params:{'dormId': dormID},
        }
    try{
    const result = await axios.get(`${REV_URL}`, config)
    return result.data
    } catch(err) {
        return {}
    }
}
}
export default {
    getOneDorm,
    getDormReviews
>>>>>>> Stashed changes
}