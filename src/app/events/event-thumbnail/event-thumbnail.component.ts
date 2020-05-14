import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail-component.html'
})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClicked = new EventEmitter();
    handleClick() {
        console.log('clicked');
        this.eventClicked.emit(this.event.name);
    }
}