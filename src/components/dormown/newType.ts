export interface AddDormFormValue {
    dormName : string,
    dormAddress : string,
    dormLong: string,
    dormLat : string,
    dormPhone : string,
    dormEmail : string,
    dormLine : string,
    dormWeb : string,
    license : [string],
    dormType : string,
    sex : string,
    havecon : boolean,
    conDis : string,
    conDes : string,
    havelaun : boolean,
    launDis : string,
    launDes : string,
    havepark : boolean,
    parkDis : string,
    parkDes : string,
    haveres : boolean,
    resDis : string,
    resDes : string,
    havesmoke : boolean,
    smokeDis : string,
    smokeDes : string,
    havefit : boolean,
    fitDis : string,
    fitDes : string,
    haveswim : boolean,
    swimDis : string,
    swimDes : string,
    havecom : boolean,
    comDis : string,
    comDes : string,
    haveinternet : boolean
    internetDis : string,
    internetDes : string,
    haverest : boolean,
    restDis : string,
    restDes : string,
    pet : string,
    cook : string,
    dormImage : [string],
    acceptTerm : boolean,
    room : addRoomFormValue[],
    dormDes : string
}
export interface AddDormMyFormProps {
    dormName? : string,
    dormAddress? : string,
    dormLong?: string,
    dormLat? : string,
    dormPhone? : string,
    dormEmail? : string,
    dormLine? : string,
    dormWeb? : string,
    license? : [string],
    dormType? : string,
    sex? : string,
    havecon? : boolean,
    conDis? : string,
    conDes? : string,
    havelaun? : boolean,
    launDis? : string,
    launDes? : string,
    havepark? : boolean,
    parkDis? : string,
    parkDes? : string,
    haveres? : boolean,
    resDis? : string,
    resDes? : string,
    havesmoke? : boolean,
    smokeDis? : string,
    smokeDes? : string,
    havefit? : boolean,
    fitDis? : string,
    fitDes? : string,
    haveswim? : boolean,
    swimDis? : string,
    swimDes? : string,
    havecom? : boolean,
    comDis? : string,
    comDes? : string,
    haveinternet? : boolean
    internetDis? : string,
    internetDes? : string,
    haverest? : boolean,
    restDis? : string,
    restDes? : string,
    pet? : string,
    cook? : string,
    dormImage? : [string],
    acceptTerm? : boolean,
    dormDes? : string,
    room? : addRoomFormValue[],
    classes : any,
    handleSubmit : (form : AddDormServiceProps) => Promise<boolean>

}

export interface addRoomFormValue {
    name: string,
    capacity: string,
    image: [string],
    bathroom: string,
    aircond: string,
    kitchen: string,
    bedroom: string,
    description: string,
    price: string,
    allowedSex: string
}

export interface addRoomMyFormProps {
    name?: string,
    capacity?: string,
    image?: any,
    bathroom?: string,
    aircond?: string,
    kitchen?: string,
    bedroom?: string,
    description?: string,
    price?: string,
    allowedSex?: string,
    classes : any,
    setAllRoom : React.Dispatch<React.SetStateAction<addRoomFormValue[]>>,
    handleClose : () => void,
    editPos : number | null
}

export interface RoomMethod {
    handleDelete: (i : number) => void,
    index : number,
    handleEdit:(i : number) => void
}

export interface RoomProps {
    name: string,
    capacity: number,
    image: [string],
    bathroom: number,
    aircond: number,
    kitchen: number,
    bedroom: number,
    description: string,
    price: {
        amount : number,
        pricePer : number
    },
    allowedSex: string
}

export interface  UtilitiesProps {
    type : string,
    distance : number,
    description : string
}

export interface AddDormServiceProps {
    name : string,
    telephone : string,
    email : string,
    lineID : string,
    website : string,
    address : string,
    coordinate : number[],
    utilities : UtilitiesProps[],
    type : string,
    description : string,
    rooms : RoomProps[],
    allowedSex: string,
    image: [string],
    license: [string]
}

// // const Dorm = {
// //   name : "1",
// //   telephone : "1",
// //   email : "hee@hee.com",
// //   lineID : "hee",
// //   website : "hee",
// //   address : "1",
// //   coordinate : [12,100],
// //   utilities : [{
// //     type:"1",
// //     distance:0,
// //     description:"1"
// //   }],
// //   type : "hee",
// //   description : "hee",
// //   rooms : [
// //     {
// //       name:"1",
// //       capacity:5,
// //       image:["hee"],
// //       bathroom:5,
// //       aircond:2,
// //       kitchen:2,
// //       bedroom:2,
// //       description: "Hee",
// //       price: {
// //         amount: 10,
// //         pricePer:10
// //       },
// //       allowedSex: "Hee"
// //     }
// //   ],
// //   allowedSex: "Hee",
// //   image: ["hee"],
// //   license: ["hee"]
// // }