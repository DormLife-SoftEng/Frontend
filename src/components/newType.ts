
export interface user {
    PictureProfile : number,
    name : {
        firstName : string,
        lastName : string
    }
    userId : string,
    telephone : string,
    email : string,
    email_verified: boolean,
    sex: string,
    createdOn: string,
    modifiedOn: null | string,
    userType: string
}
export interface address {
    address : string,
    coordinate : number[]
}

export interface room {
    name : string,
    price : {
        amount : number,
        pricePer : number
    }
}
export interface dorm { // use in home page ******
    address : address,
    avgStar : number,
    name : string,
    id : string,
    image : string[],
    room : room[]
}
export interface UserInfoProps {
    user : user | null
}

export interface chat {
    message : string,
    time : string,
    user : user,

}
export interface member {
    ready : boolean,
    user : user
}
export interface lobbyProps {
    _id : string,
    blacklist : user[],
    chat : chat[],
    code : string,
    dorm : any,
    expireOn : string,
    maxMember : number,
    member : member[],
    owner : user,
    room : any
}

export interface QueryParams {
    name? : string,
    distance? : string,
    avgStar? : string,
    allowedSex? : string,
    price?: string,
    maxperson?: string,
    kitchen?: string,
    type?: string,
    airCond?: string,
    bathroom?: string,
    bedroom?: string,
    restaurant? : string,
    commonroom? : string,
    restroom? : string,
    convenienceStore?: string,
    laundry?: string,
    parking?: string,
    pet?: string,
    internet?: string,
    smoking?: string,
    fitness?: string,
    pool?: string,
    cooking?: string,
    offset?: string,
    stop?: string,
}