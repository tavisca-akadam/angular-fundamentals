import { Routes } from '@angular/router';
import { EventsListComponent } from './events/event-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'event/:id', component: EventsDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]