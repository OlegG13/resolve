import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[];

  constructor(
    private contactSerce: ContactsService
  ) { }

  ngOnInit() {
    this.contacts = this.contactSerce.getContacts();
  }

}
