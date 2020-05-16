import { Routes } from '@angular/router';
import { EventsListComponent } from './events/event-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './common/error/error-404.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resovler.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]