import { Routes } from '@angular/router';
import { EventsListComponent } from './events/event-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EventsDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]