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
    this.rentals = await this.getRentals('rental');

  }

  async getRentals(path: string) {
    const resp = await this.http.get(path);
    console.log('resp from getRentals()', resp);
    return resp;
  }

  async createRental(path: string, payload: any) {
    const resp = await this.http.post(path, payload);
    console.log('from createRental resp: ', payload);
  }

}
