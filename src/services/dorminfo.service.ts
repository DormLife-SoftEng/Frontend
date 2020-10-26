import axios from "axios";
const DORM_URL = "http://localhost:2000/dorms"
const REV_URL = "http://localhost:2000/dorms"

async function getOneDorm(dormID : string) {
    const result = await axios.get(`${DORM_URL}/${dormID}`)
    return result.data
}

async function getDormReviews(dormID : string) {
    const result = await axios.get(`${DORM_URL}`, {params:{
        'dormId': dormID
    }})
    return result.data
}

export default {
    getOneDorm,
    getDormReviews
}