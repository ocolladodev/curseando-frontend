import { Routes } from '@angular/router';
import { content } from './shared/routes/content.routes';
import { MainComponent } from './pages/main/main.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/curseando', pathMatch: 'full' },
  { path: 'curseando', component: MainComponent, children: content},
  { path: '**', component: PageNotFoundComponent },
];
