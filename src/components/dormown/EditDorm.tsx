import React , { useEffect, useState } from "react";
import { useHistory , useParams } from "react-router-dom";
import { withStyles, createStyles } from "@material-ui/core";
import { dialogProps, Style } from "../type";
import { AddDormMyFormProps, AddDormServiceProps, addRoomFormValue } from "./newType";
import dormownerService from "../../services/dormowner.service";
import AddDormPop from "./AddDormPop";
import Header from "./Header";
import { AddDormFormik } from "./AddDorm";
import { RoomContext, roomContextType, useRoom } from "../../contexts/room.context";
const styles = createStyles({
    black: {
      color: "black",
    },
    button: {
      marginRight: "10px",
    },
    textField: {
      width: "350px",
    },
    formLabel: {
      textAlign: "left",
      fontSize: "1.5rem",
      color: "black",
    },
    row: {
      marginBottom: "5%",
    },
});

const EditDorm = (props : Style) => {

    const history = useHistory()
    const {dormID}:{dormID:string} = useParams();
    const {classes} = props
    const initialState : dialogProps = {
        title : "",
        content : "",
    }
    const [allRoom,setAllRoom] = useState<addRoomFormValue[]>([])
    const [show,setShow] = useState<boolean>(false)
    const [modalProps , setModalProps] = useState<dialogProps>(initialState)
    const [dormsInfo,setDormsInfo] = useState<AddDormMyFormProps | null>(null)

    const getDormInfo = async () => {
        const dormInfo = await dormownerService.getSpecificDorm(dormID)
        if (dormInfo) {
            const rooms = dormInfo.room as any[]
            const roomsFormik : addRoomFormValue[] = rooms.map(room => {
                return {name:room.name,aircond:`${room.aircond}`,allowedSex:room.allowedSex,bathroom:`${room.bathroom}`,bedroom:`${room.bedroom}`,capacity:`${room.capacity}`,image:room.image,description:room.description,price:room.price.amount,kitchen:`${room.kitchen}`}
            })
            setAllRoom(roomsFormik)
            const utility = dormInfo.utility as any[]
            const con = utility.find(util => util.type === "convenienceStore") as any
            const internet = utility.find(util => util.type === "internet") as any
            const com = utility.find(util => util.type === "commonroom") as any
            const fit = utility.find(util => util.type === "fitness") as any
            const parki = utility.find(util => util.type === "parking") as any
            const laund = utility.find(util => util.type === "laundry") as any
            const pool = utility.find(util => util.type === "pool") as any
            const smok = utility.find(util => util.type === "smoking") as any
            const resta = utility.find(util => util.type === "restaurant") as any
            const restr = utility.find(util => util.type === "restroom") as any
            const pet = utility.find(util => util.type === "pet") as any
            const cook = utility.find(util => util.type === "cooking") as any
            const dormprops : AddDormMyFormProps = {
                dormName : dormInfo.name,
                classes : props.classes,
                dormLat :`${dormInfo.address.coordinate[0]}`,
                dormLong : `${dormInfo.address.coordinate[1]}`,
                dormPhone : dormInfo.contact.telephone,
                dormAddress : dormInfo.address.address,
                dormEmail : dormInfo.contact.email,
                dormWeb : dormInfo.contact.website,
                dormLine : dormInfo.contact.lineID,
                dormType : dormInfo.type,
                sex : dormInfo.allowedSex,
                handleSubmit : handleSubmit,
            
            }
            if (internet) {
                dormprops.haveinternet = true
                dormprops.internetDes = internet.description
                dormprops.internetDis = `${internet.distance}`
            }
            if (con) {
                dormprops.havecon = true
                dormprops.conDes = con.description
                dormprops.conDis = `${con.distance}`
            }
            if (com) {
                dormprops.havecom = true
                dormprops.comDes = com.description
                dormprops.comDis = `${com.distance}`
            }
            if (fit) {
                dormprops.havefit = true
                dormprops.fitDes = fit.description
                dormprops.fitDis = `${fit.distance}`
            }
            if (parki) {
                dormprops.havepark = true
                dormprops.parkDes = parki.description
                dormprops.parkDis = `${parki.distance}`
            }
            if (laund) {
                dormprops.havelaun = true
                dormprops.launDes = laund.description
                dormprops.launDis = `${laund.distance}`
            }
            if (pool) {
                dormprops.haveswim = true
                dormprops.swimDes = pool.description
                dormprops.swimDis = `${pool.distance}`
            }
            if (smok) {
                dormprops.havesmoke = true
                dormprops.smokeDes = smok.description
                dormprops.smokeDis = `${smok.distance}`
            }
            if (resta) {
                dormprops.haverest = true
                dormprops.restDes = resta.description
                dormprops.restDis = `${resta.distance}`
            }
            if (restr) {
                dormprops.haveres = true
                dormprops.resDes = restr.description
                dormprops.resDis = `${restr.distance}`
            }
            if (pet) {
                dormprops.pet = "yes"
            }
            if (cook) {
                dormprops.cook = "no"
            }
            setDormsInfo(dormprops)
            console.log(dormInfo)
        }
    }


    useEffect(() => {
        document.body.style.backgroundColor = "white";
        getDormInfo();
    }, []);

    const  handleSubmit = async (form : AddDormServiceProps) => {
        const result = await dormownerService.addDorm(form)
        if (result) {

            setModalProps({title:"AddDorm Success",content:""})
            setShow(true)
            setTimeout(() => {
                history.push("/dormowner/")
                setShow(false)
            },800)

        } else {

            setModalProps({title:"AddDorm Failed",content:""})
            setShow(true)
            setTimeout(() => {
                setShow(false)
            },800)

        }

        return result

    }
    return (
        <>
        {dormsInfo && 
        <>
            <RoomContext.Provider value={{allRoom,setAllRoom}}>
            <Header title="Edit Dorm" />
            <AddDormPop {...modalProps} open={show}  />
            <AddDormFormik {...dormsInfo} />
            </RoomContext.Provider>
        </>
        }
        </>
        
    )
}
export default withStyles(styles)(EditDorm);