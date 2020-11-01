import axios from "axios";
import { AddDormServiceProps } from "../components/dormown/newType";
import {tokenDto} from "../components/type"
const API_URL = "http://localhost:5000/api/v1/dorms";

const getMydorm = async () =>{
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` }
        };
        try {
            const result = await axios.get(`${API_URL}`,config)
            return result.data
        } catch (err) {
            return []
        }
    }
    return []
}

const uploadImage1 = async (file : any) => {
    const formData = new FormData();
    formData.append('image', file);
    const config = {     
        headers: {
            'Content-Type': 'multipart/form-data',
        }   
    }
    const result = await axios.post(`${API_URL}/images`,formData,config)
    return result

}
const uploadImageMany = async (file : any) => {

    const formData = new FormData();
    for ( let i = 0 ; i< file.length ; i++) {
        formData.append('image', file[i]);
    }
    const config = {     
        headers: {
            'Content-Type': 'multipart/form-data',
        }   
    }
    const result = await axios.post(`${API_URL}/images`,formData,config)
    return result

}

const addDorm = async (dorm : AddDormServiceProps) => {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` }
        };
        try {
            const result = await axios.post(`${API_URL}/newdorm`,dorm,config)
            return true
        } catch (err) {
            return false
        }
    }
    return false
}

export interface Ticket {
        target:{},
        newdata:{},
        type: string,
        request: string,
}

const deleteDorm = async (props:Ticket)=>{
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` }
        };
        try {
            const result = await axios.post("http://localhost:5000/api/v1/ticket",props,config)
            return true
        } catch (err) {
            return false
        }
    }
    return false
}

export default {
    uploadImage1,
    uploadImageMany,
    addDorm,
    getMydorm,
    deleteDorm
}