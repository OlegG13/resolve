import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';


import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routs';
import { ContactsService } from './contact.service';
import {ContactResolve} from './contact-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    ContactsService,
    ContactResolve
    // {
    //   provide: 'contactresolve',
    //   useValue: () => {
    //     return {
    //       id: 1,
    //       name: 'Oleg Gubich',
    //       twitter: '@PascalPrecht'
    //     }
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
