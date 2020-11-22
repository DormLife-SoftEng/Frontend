import axios from "axios";
import { QueryParams } from "../components/newType";
const API_URL = `http://${process.env.REACT_APP_BACKEND_BASE_URL}:${process.env.REACT_APP_BACKEND_URL_PORT}/api/v1/dorms`;
const getDorms = async () =>{
            
    const result = await axios.get(`${API_URL}`)
    return result.data

}

const getSearchDorm = async (query : QueryParams) => {
    const config = {
        params: query
    };
    console.log(query)
    const result = await axios.post(`${API_URL}`,{},config)
    console.log(result)
    return result.data
}


export default {
    getDorms,
    getSearchDorm
}
