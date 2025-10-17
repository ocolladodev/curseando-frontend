import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseCatalogRoutingModule } from "@app/pages/course-catalog/course-catalog.routes";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CourseCatalogRoutingModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
