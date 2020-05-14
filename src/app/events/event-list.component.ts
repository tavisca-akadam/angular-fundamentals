import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="well hoverwell thumbnail">
      <h2> {{event.name}} </h2>
      <div>{{event.date}}</div>
      <div>{{event.time}}</div>
      <div>\${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div>
        <img src={{event.imageUrl}} alt="avatar" height="100" width="80"/>
      </div>
   </div> 
  `
})
export class EventsListComponent {
  event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    price: 599.00,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA'
    }
  }
}