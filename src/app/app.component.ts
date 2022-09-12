// import { Component } from '@angular/core';

import { Component } from "@angular/core";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Eventster';
// }

@Component({
  selector: 'app-root',
  template: `
  <div><h1>{{title}}</h1>
  My first component
  <li><a routerLink='/events'>Events</a></li>
  <li><a>Event Details</a></li>
  </div>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: string = "Hello app world"
}
