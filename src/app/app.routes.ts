import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'cart',
    component: CartComponent
  }, {
    path: 'home',
    component: HomeComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
