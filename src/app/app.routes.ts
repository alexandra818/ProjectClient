import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RentComponent } from './rent/rent.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'rent',
    component: RentComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'message',
    component: MessageComponent
  }, {
    path: '**',
    component: LoginComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
