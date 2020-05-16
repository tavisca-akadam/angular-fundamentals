import { Component } from "@angular/core";
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: 'events-details.component.html',
    styles: [
        `.container {
            padding-left: 20px;
            padding-right: 20px;
        }
        .event-image {
            height: 100px;
        }`
    ]
})

export class EventsDetailsComponent {
    event: any
    constructor(private eventService: EventService) {

    }
    ngOnInit() {
        this.event = this.eventService.getEvent(1);
    }
}