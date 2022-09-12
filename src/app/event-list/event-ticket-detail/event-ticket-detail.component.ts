import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './event-ticket-detail.component.html',
  styleUrls: ['./event-ticket-detail.component.css']
})
export class EventTicketDetailComponent implements OnInit {

  pageTitle: string = "Product Detail"

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/events']);
  }
}
