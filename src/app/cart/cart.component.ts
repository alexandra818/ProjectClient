import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { HttpService } from '../../shared-service/http.service';
export interface IBike {
  id?: number;
  image: string;
  price: number;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<IBike> = [];
  myName = '';
  rentals = [];
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
}
