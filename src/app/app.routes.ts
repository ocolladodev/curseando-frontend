import { Routes } from '@angular/router';
import { content } from './shared/routes/content.routes';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '', children: content}
];
