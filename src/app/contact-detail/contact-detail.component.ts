import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.contact = this.route.snapshot.data['contact'];
  }

}
