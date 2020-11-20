import axios from "axios";
const API_URL = "http://localhost:5000/api/v1/dorms";

const getDorms = async () =>{
            
    const result = await axios.get(`${API_URL}`)
    return result.data

}

export default {
    getDorms
}