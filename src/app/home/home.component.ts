import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  rentals: Array<IRental> = [];
  myName = '';
  rental = [];
  loggedIn = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpService
  ) { }
  // if not logged in, route to login
  async ngOnInit() {
    await this.refresh();
    const token = localStorage.getItem('id_token');
    if (token == null) {
      this.loggedIn = false;
      this.router.navigate(['login']);
    } else {
      this.loggedIn = true;
    }


  }

  async refresh() {
    this.rentals = await this.getRentals('rental');
  }

  async getRentals(path: string) {
    const resp = await this.http.get(path);
    return resp;
  }
}
