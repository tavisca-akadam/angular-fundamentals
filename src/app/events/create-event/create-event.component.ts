import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {
    constructor(private route: Router) { }
    ngOnInit() {

    }
    cancel() {
        this.route.navigate(['/events']);
    }
}