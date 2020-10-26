
export interface user {
    name : {
        firstName : string,
        lastName : string
    }
    profilePic : number,
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