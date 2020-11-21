import axios from "axios";
const DORM_URL = "http://localhost:5000/api/v1/dorms"
const REV_URL = "http://localhost:5000/api/v1/reviews"

async function getOneDorm(dormID : string) {
    const result = await axios.get(`${DORM_URL}/${dormID}`)
    console.log(result.data)
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
}