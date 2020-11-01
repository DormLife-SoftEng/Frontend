export interface dormRoom {
    name: string,
    capacity: number,
    image: string[],
    bathroom: number,
    aircond: number,
    kitchen: number,
    bedroom: number,
    description: string,
    price: {
        amount: number,
        pricePer: string
    },
    allowedSex: string
}
export interface Room {
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

export interface  Utilities {
    type : string,
    distance : number,
    description : string
}

export interface propsDorm {
    id: string,
    name: string,
    contact: {
        telephone: string,
        email: string,
        lineID: string,
        website: string
    },
    address: {
        address: string,
        coordinate: [
            number,
            number
        ]
    },
    utility:Utilities[],
    type: string,
    description: string,
    allowedSex: string,
    avgStar: number,
    image: string[],
    license: string[],
    room: Room[],
    code: string
}
export interface propsCarousel {
    images : string[],
    height?: string
}

export interface propsReview {
    dorm: {},
    user: {},
    star: number,
    comment: string|null,
    image: string[],
    createdOn: any
}