import React, { useEffect, useState } from "react";
import HomeButton from "./HomeButton";
import { useHistory ,useParams } from "react-router-dom";

interface user {
    userID : string,
    name : {
        firstName : string,
        lastName : string
    }
}

interface LobbyInfo {
    lobbyID : string,
    owner : user,
    member : user[],
    maxMember : number,
    expireOn : string,
    dormName : string,
    roomType : string
}

const Lobby = () => {
    const history = useHistory();
    const mockup : LobbyInfo = {
        lobbyID : "1",
        owner : {
            userID : "1",
            name : {
                firstName : "Hee",
                lastName : "Kuy"
            }
        },
        member : [
            {
            userID : "0",
            name : {
                firstName : "Hee",
                lastName : "Kuy"
            }
            },
            {
                userID : "1",
                name : {
                    firstName : "Kuy",
                    lastName : "KuyKuy"
                }
            },
            {
                userID : "2",
                name : {
                    firstName : "KuyKuy",
                    lastName : "KuyKuyKuy"
                }
            }
        ],
        expireOn : new Date().toISOString(),
        dormName : "KuyKuy",
        maxMember : 4,
        roomType : "Normal"
    }
    const [lobbyInfo,setLobbyInfo] =  useState<LobbyInfo>()
    const [name,setName] = useState<string>("")
    const [total,setTotal] = useState<number>(0)
    const {lobbyID} : {lobbyID:string} = useParams();

    const handleGoHome = () => {
        history.push("/")
    }
    
    const getNameAndTotalUser = () => {

        var name = ""
        var total = 0
        if(lobbyInfo !== undefined) {
            lobbyInfo.member.forEach((member) => {
                name = name  + member.name.firstName + " , "
                total += 1;
            })
            name = name.slice(0,name.length - 2)
        }
        setName(name)
        setTotal(total)

    }
    useEffect(() => {

        console.log(mockup)
        setLobbyInfo(mockup)
        //getRequest with lobbyID
        //result form get request axios
        //setLobbyInfo(result)

    },[])
    useEffect(()=> {
        getNameAndTotalUser();
    },[lobbyInfo])
    return (
        <>

            <HomeButton handleGoHome={handleGoHome} />
            <h1>{lobbyInfo?.dormName} {lobbyInfo?.roomType}</h1>
            <p>Lobby ID {lobbyInfo?.lobbyID}</p>
            <p>Expire on {lobbyInfo?.expireOn}</p>
            <img style={{width:"300px",height:"300px"}} src="https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg" />
            <img style={{width:"300px",height:"300px"}} src="https://i.pinimg.com/originals/7a/f6/0b/7af60b2b6fa202db54f0aa275fee6e17.png" />
            <br />
            <img style={{width:"300px",height:"300px"}} src="https://static.pokemonpets.com/images/monsters-images-800-800/7-Squirtle.png" />
            <img style={{width:"300px",height:"300px"}} src="https://vignette.wikia.nocookie.net/pokemon-talk6406/images/4/43/Bulbasaur.png/revision/latest?cb=20170506185349" />
            <br />

        </>
    )
}

export default Lobby;