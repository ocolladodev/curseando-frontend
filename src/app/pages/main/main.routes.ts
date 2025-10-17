import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const main: Routes = [
  {
    path: 'main',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./main.component').then((m) => m.MainComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(main)],
  exports: [RouterModule],
})
export class MainRoutingModule {
  static routes = main;
}
