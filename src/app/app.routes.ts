import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Igor Popovic' },
  { path: 'services', component: Services, title: 'Services | Igor Popovic' },
  { path: 'about', component: About, title: 'About | Igor Popovic' },
  { path: 'contact', component: Contact, title: 'Contact | Igor Popovic' },
  { path: '**', redirectTo: '' }
];
