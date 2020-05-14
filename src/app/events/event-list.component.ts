import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './event-list-component.html'
})
export class EventsListComponent {
  eventData = {
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
  handleEventClicked(data) {
    console.log(`recieved : ` + data);
  }
}