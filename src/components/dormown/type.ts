import { propsDorm } from "./type2";

export interface propsSuggestItem  {
    dorm : propsDorm,
    setdorm: React.Dispatch<React.SetStateAction<number>>,
    index : number
}

export interface DormInform {
    dormId?: string,
    name?: string,
    code?: string,
    owner?: {
        userId?: string,
        name?: {
            firstName?: string,
            lastName?: string
        },
        profilePic?: string
    },
    contact?: {
        telephone?: string,
        email?:     string,
        lineID?:    string,
        website?:   string,
    },
    address?: {
        address?: string,
        coordiante?: {}
    },
    utility?: [
        {
            type?: string,
            distance?: number,
            description?: string
        }
    ],
    room: [
        {
            roomid?: number,
            name?: string,
            capacity?: number,
            image?: [
                string
            ],
            bathroom?: number,
            aircond?: number,
            kitchen?: number,
            bedroom?: number,
            description?: string,
            price?: {
                amount?: number,
                pricePer?: number
            },
            allowedSex?: any
        }
    ],
    allowedSex?: string,
    avgStar?: number,
    license?: [
        string
    ],
    createdOn?: string,
    modifiedOn?: string,
    approved?: boolean,
    approvedOn?: string
}