import { Routes } from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {ContactResolve} from './contact-resolve.service';

export const AppRoutes: Routes = [
  { path: '', component: ContactListComponent },
  {
    path: 'contact/:id',
    component: ContactDetailComponent,
    resolve: {
      contact: 'contactresolve'
      //contact: ContactResolve
    }
  }
];
