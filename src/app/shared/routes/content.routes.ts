import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/main/main.routes').then(r => r.MainRoutingModule)
      }
    ]
  }
]
