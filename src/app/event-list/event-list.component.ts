import { Component, OnInit } from '@angular/core';
import { IEventTicket } from './eventTicket';
import { EventTicketService } from './eventTicket.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventTicketService: EventTicketService) { }

  ngOnInit(): void {
    this.events = this.eventTicketService.getEventTickets();
    this.filteredEvents = this.events
  }

  pageTitel: string = 'test na page titele interpolation'

  events: IEventTicket[] = [];

  // filter implementation
  private _listFilter = '';
  filteredEvents: IEventTicket[] = []

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEvents = this.performFilter(value);
  }

  performFilter(filterBy: string): IEventTicket[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.events.filter((product: IEventTicket) =>
      product.name.toLocaleLowerCase().includes(filterBy));
  }
}
