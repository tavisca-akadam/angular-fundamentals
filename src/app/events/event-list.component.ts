import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/services/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-list-component.html'
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}