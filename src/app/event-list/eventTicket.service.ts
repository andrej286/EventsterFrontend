import { Injectable } from "@angular/core";
import { IEventTicket } from "./eventTicket";

@Injectable({
    providedIn: 'root'
})
export class EventTicketService {

    getEventTickets(): IEventTicket[] {
        
        return [
            {
              "id" : 1,
              "name" : "pivolend",
              "start_date" : new Date("01-02-2000"),
              "end_date" : new Date("01-02-2000"),
              "details" : "neshto po dolgo",
              "location" : {
                  city: "Skopje",
                  street: "Zenicka",
              },
              "price" : 1000,
              "score" : 5.0,
              "type" : "Sport",
              "cover_image" : "",
            },
            {
              "id" : 2,
              "name" : "vinofest",
              "start_date" : new Date("01-02-2000"),
              "end_date" : new Date("01-02-2000"),
              "details" : "neshto po dolgo od pivofest",
              "location" : {
                  city: "Skopje",
                  street: "Vlada",
              },
              "price" : 1000,
              "score" : 5.0,
              "type" : "Sport",
              "cover_image" : "",
            },
          ]
    }
}