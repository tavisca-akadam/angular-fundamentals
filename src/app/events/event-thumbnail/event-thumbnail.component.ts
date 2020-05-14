import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail-component.html'
})

export class EventThumbnailComponent {
    @Input() event: any;
    someProperty: any = "some value";
    logfoo() {
        console.log('foo');
    }
}