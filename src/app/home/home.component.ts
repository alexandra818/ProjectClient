import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loggedIn = false;
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  // if not logged in, route to login
  ngOnInit() {
  //   const token = localStorage.getItem('id_token');
  //   if (token == null) {
  //     this.loggedIn = false;
  //     this.router.navigate(['login']);
  //   } else {
  //     this.loggedIn = true;
  //   }

  // }

}
}
