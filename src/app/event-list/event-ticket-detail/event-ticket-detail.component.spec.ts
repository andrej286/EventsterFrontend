import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTicketDetailComponent } from './event-ticket-detail.component';

describe('EventTicketDetailComponent', () => {
  let component: EventTicketDetailComponent;
  let fixture: ComponentFixture<EventTicketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTicketDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
