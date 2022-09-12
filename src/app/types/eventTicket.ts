export interface IEventTicket {
    id : number,
    name : string,
    start_date : Date,
    end_date : Date,
    details : string,
    location : ILocation,
    price : number,
    score : number,
    type : string,
    cover_image : string,
}

interface ILocation {
    city: string,
    street: string,
}