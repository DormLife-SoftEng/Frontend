import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../mainLobbyPage/BackButton";
import LobbyService from "../../../services/lobby.service";
import { token1 } from "../../test";
import { Nav, Navbar, Row, Col ,Button} from "react-bootstrap";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField"
import generalService from "../../../services/general.service";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const CreatePage = () => {

    const history = useHistory();
    const [value, setValue] = React.useState<string | null>(null);
    const [createProps , setCreateProps] = useState<any>({dormId:"",roomId:""})
    const [nameDorm  , setNameDorm] = useState<string[]>([])
    const [allDorm , setAllDorm] = useState<any[]>([])
    const [roomType , setRoomType] = useState<string>("")
    const [alllRoomType , setAllRoomType] = useState<string[]>([])
    const mapNameDorm = (dorms : any[]) => {
        dorms.map((dorm , index) => {
            setNameDorm((prev) => {
                return [...prev , dorm.name]
            })
        })
    }
    const handleSubmit = async () => {
        const lobbyID = await LobbyService.createLobby(createProps) as { id : string}
        history.push(`/lobby/${lobbyID.id}`);
      };
    const mapRoomType = (rooms : any[]) => {
        rooms.map((room , index) => {
            setAllRoomType((prev) => {
                return [...prev , room.name]
            })
        })
    }
    const handleGoBack = () => {
        history.goBack();
      };
    const handleRoomType = (e : React.ChangeEvent<{ value: unknown }>) => {
        setRoomType(e.target.value as string)
    }
    const handleForm = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
    };
    const getDorm = async () => {
        const dorms = await generalService.getDorms();
        console.log(dorms)
        setAllDorm(dorms)
        mapNameDorm(dorms)
    }

    const findRoomID = (roomType : string) => {
        if (value) {
            const rooms = findDormID(value).room as any[]
            const currentRoom = rooms.find((room,index) => {
                return room.name === roomType
            })
            setCreateProps((prev : any) => {
                return {...prev , roomId : currentRoom.id}
            })
        }
    }
    
    const findDormID = (dormName : string) => {
        const dorm = allDorm.find((dorm,index) => {
            console.log(dorm.name)
            return dorm.name === dormName
        })
        setCreateProps((prev : any) => {
            return {...prev, dormId : dorm.id }
        })
        return dorm
    }

    useEffect(() => {
        getDorm();
    },[])

    useEffect(() => {
        setRoomType(alllRoomType[0])
    },[alllRoomType])

    useEffect(() => {
        findRoomID(roomType)
    },[roomType])

    useEffect(() => {
        console.log(createProps)
    },[createProps])

    return (
        <>
        <form onSubmit={handleForm} >
        <Autocomplete
            value={value}
            onChange={(event,newValue: string | null) => {
                if (newValue) {
                    const dorm =  findDormID(newValue)
                    mapRoomType(dorm.room)
                }
                setValue(newValue);
            }}
            options={nameDorm}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params}  variant="outlined" />}
        />
        <FormControl variant="outlined" >
            <Select
            value={roomType}
            onChange={handleRoomType}
            >
            {alllRoomType.map((room,index) => {
                return <MenuItem key={index} value={room} >{room}</MenuItem>
            })}
            </Select>
        </FormControl>
        <Row style={{
          paddingTop:"5%"
        }}>
          <Col style={{
            marginLeft:"30%"
          }}>
            <Button variant="danger" type="submit" >Create</Button>
          </Col>
          <Col style={{
            marginRight:"30%"
          }}>
            <Button variant="secondary" onClick={handleGoBack}>Cancel</Button>
          </Col>
        </Row>
        </form>
        </>
    )
}

export default CreatePage