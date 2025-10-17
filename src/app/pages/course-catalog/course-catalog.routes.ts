import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const courseCatalog: Routes = [
  {
    path: 'course-catalog',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/course-catalog/course-catalog.component').then((m) => m.CourseCatalogComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(courseCatalog)],
  exports: [RouterModule],
})
export class CourseCatalogRoutingModule {
  static routes = courseCatalog;
}
