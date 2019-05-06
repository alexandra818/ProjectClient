import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
export interface IRental {
  id?: number;
  image: string;
  price: number;
  location: string;
  cancellation: string;
  description: string;
}

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  rentals: Array<IRental> = [];
  myName = '';
  rental = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private http: HttpService
  ) { }

  async ngOnInit() {
    await this.refresh();
    // this.rentals = await this.getRentals('rental');

  }

  async refresh() {
    this.rentals = await this.getRentals('rental');
  }

  async getRentals(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getRentals()', resp);
    return resp;
  }

  async createRental() {
    const rental = {
      price: null,
      location: null,
      description: null,
      cancellations: null
    };
    const resp = await this.http.post('rental', rental);
    console.log('from createRental resp: ', resp);
    if (resp) {
      this.refresh();

    } else {
      this.toastService.showToast('danger', 3000, 'Unable to post.');
  }
  return resp;
}

  async updateRental(rental: any) {
    console.log('from updateRental rental: ', rental);
    const resp = await this.http.put(`rental/id/${rental.id}`, rental);
    if (resp) {
      this.toastService.showToast('success', 3000, 'Successfully updated.');
    }
    return resp;
  }

  async removeRental(rental: any, index: number) {
    console.log('from removeR...', index);
    // this.rentals.splice(index, 1);
    const resp = await this.http.delete(`rental/id/${rental.id}`);
    console.log('resp from removeR...', resp);
    if (resp) {
      this.refresh();
      this.toastService.showToast('success', 3000, 'Successfully deleted.');
    } else {
      this.toastService.showToast('danger', 3000, 'Delete failed!');

    }
  }


}
