
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