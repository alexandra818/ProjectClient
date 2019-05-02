import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  contact = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {

  }

  async createContact() {
    const contact = {
      fullName: null,
      email: null,
      message: null
    };
    const resp = await this.http.post('contact', contact);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Sent!');

    } else {
      this.toastService.showToast('danger', 3000, 'Unable to post.');
  }
  return resp;
}


}


