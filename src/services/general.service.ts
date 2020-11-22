import axios from "axios";
import { QueryParams } from "../components/newType";
const API_URL = "http://localhost:5000/api/v1/dorms";


const getDorms = async () =>{
            
    const result = await axios.get(`${API_URL}`)
    return result.data

}

const getSearchDorm = async (query : QueryParams) => {
    const config = {
        params: query
    };
    const result = await axios.post(`${API_URL}`,{},config)
    return result.data
}


export default {
    getDorms,
    getSearchDorm
}