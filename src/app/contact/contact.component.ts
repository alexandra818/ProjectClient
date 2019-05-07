import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
export interface IContact {
  id?: number;
  fullName: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Array<IContact> = [];
  myName = '';
  contact = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {

  }

  async createContact(contact) {
    const newContact = {
      fullName: contact.fullName,
      email: contact.email,
      message: contact.message
    };
    const resp = await this.http.post('contact', newContact);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Sent!');

    } else {
      this.toastService.showToast('danger', 3000, 'Unable to post.');
  }
  return resp;
}

// async updateContact(contact: any) {
//   const resp = await this.http.put(`contact/id/${contact.id}`, contact);
//   if (resp) {
//     this.toastService.showToast('success', 3000, 'Successfully updated.');
//   }
//   return resp;
// }

}


