import axios from "axios";
import { ObjectID } from "mongodb"
import {Token,tokenDto} from "../components/type"
const API_URL = "http://localhost:5000/api/v1/lobbies/"


interface propsCreateLobby {
    dormId : string,
    roomId : string
    //ควรเป็น dormName เพราะรับมาเป็น dormName
}

interface propsJoinLobby {
    id? : ObjectID
}

interface propsSendMessage {
    message : string,
}

async function getLobbys() {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
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
async function createLobby(form : propsCreateLobby) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            params: {
                dormId : form.dormId,
                roomId : form.roomId
            },
            headers: { Authorization : `Bearer ${access_token}` },

        };
        try {
            const result = await axios.post(`${API_URL}`,{},config)
            return result.data 
        } catch (err) {
            return {}
        }
    }
    return {}

}

async function joinLobby(form : propsJoinLobby) {

    const {id} = form
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        if (id) {
            const config = {
                headers: { Authorization : `Bearer ${access_token}` },
                params: {
                    id : id
                }
            };
            try {
                const result = await axios.put(`${API_URL}join`,{},config)
                return true
            } catch (err) {
                return false
            }
        }

    }
    return false
}

async function getSpecificLobby(lobbyID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
        };
        try {
            const result = await axios.get(`${API_URL}${lobbyID}`,config)
            return result.data 
        } catch (err) {
            return {}
        }
    }
    return {}
}
async function setReady(lobbyID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
        };
        try {
            const result = await axios.patch(`${API_URL}${lobbyID}/ready`,{},config)
            console.log(result)
            return result.data 
        } catch (err) {
            return {}
        }
    }
    return {}
}
async function sendMessage(lobbyID : string,form : propsSendMessage) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
        };
        try {
            const result = await axios.post(`${API_URL}${lobbyID}/chat`,form,config)
            return result.data 
        } catch (err) {
            return {}
        }
    }
    return {} 
}
async function getAllMessage(lobbyID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
        };
        try {
            const result = await axios.get(`${API_URL}${lobbyID}/chat`,config)
            return result.data 
        } catch (err) {
            return []
        }
    }
    return [] 
}
async function kickMember(lobbyID : string,userID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
            params: {
                userId: userID
            }
        };
        try {
            const result = await axios.put(`${API_URL}${lobbyID}/kick`,{},config)
            return result.data 
        } catch (err) {
            return {}
        }
    }
    return {} 
}
async function leaveLobby(lobbyID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
        };
        try {
            const result = await axios.put(`${API_URL}${lobbyID}/leave`,{},config)
            return result.data 
        } catch (err) {
            return {}
        }
    }
}
async function deleteLobby(lobbyID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
        };
        try {
            const result = await axios.delete(`${API_URL}${lobbyID}/delete`,config)
            return result.data 
        } catch (err) {
            return {}
        }
    }
}
async function closeLobby(lobbyID : string) {
    const token = localStorage.getItem("token")
    if (token) {
        const tokenObj : tokenDto = JSON.parse(token)
        const access_token = tokenObj.access_token
        const config = {
            headers: { Authorization : `Bearer ${access_token}` },
        };
        try {
            const result = await axios.delete(`${API_URL}${lobbyID}/close`,config)
            return result.data 
        } catch (err) {
            return {}
        }
    }
}

export default {
    getLobbys,
    createLobby,
    joinLobby,
    getSpecificLobby,
    setReady,
    sendMessage,
    getAllMessage,
    kickMember,
    leaveLobby,
    deleteLobby,
    closeLobby
}