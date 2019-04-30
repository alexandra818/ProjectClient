import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IContact {
  id?: number;
  email: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user: IContact = { email: null, message: null };
  currentUser = {};
  loggedIn = false;
  constructor(
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) {
  }

  async ngOnInit() {
    await this.refresh();
    // this.rentals = await this.getRentals('rental');

  }

  async refresh() {
  }

  async createMessage() {
    const contact = {
      email: null,
      message: null
    };
    const resp = await this.http.post('contact', contact);
    console.log('from createContact resp: ', resp);
    if (resp) {
      this.refresh();

    } else {
      this.toastService.showToast('danger', 3000, 'Unable to post.');
  }
  return resp;
}
}

