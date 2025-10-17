import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('@pages/course-catalog/course-catalog.routes').then(r => r.CourseCatalogRoutingModule)
      }
    ]
  }
]
