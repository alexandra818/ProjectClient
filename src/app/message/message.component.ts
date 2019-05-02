import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';

export interface IContact {
  id?: number;
  fullName: string;
  email: string;
  message: string;

}
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

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
    await this.refresh();


  }

  async refresh() {
    this.contacts = await this.getContacts('contact');
  }

  async getContacts(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getRentals()', resp);
    return resp;
  }

  async removeContact(contact: any, index: number) {
    console.log('from removeR...', index);
    const resp = await this.http.delete(`contact/id/${contact.id}`);
    if (resp) {
      this.refresh();
      this.toastService.showToast('success', 3000, 'Successfully deleted.');
    } else {
      this.toastService.showToast('danger', 3000, 'Delete failed!');

    }
  }


}


