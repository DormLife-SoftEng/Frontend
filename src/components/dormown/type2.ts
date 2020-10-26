export interface dormUtil {
    type: string,
    distance: number|null,
    description: string
}

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

export interface propsDorm {
    _id: string,
    name: string,
    code: string|null,
    owner: string,
    contact: {
        telephone: string,
        email: string|null,
        lineID: string|null,
        website: string|null
    },
    location: {
        address: string,
        coordinate: { type: string, coordinates: [ number, number ] }
    },
    utility: dormUtil[],
    type: string,
    description: string,
    room: dormRoom[],
    allowedSex: string,
    avgStar: number,
    license: string[],
    image: string[],
    createdOn: any,
    modifiedOn: any,
    approved: string,
    approvedOn: any
}

export interface propsCarousel {
    images : string[]
}

export interface propsReview {
    dorm: string,
    user: string,
    star: number,
    comment: string|null,
    image: string[],
    createdOn: any
}