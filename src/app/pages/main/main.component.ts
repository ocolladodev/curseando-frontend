import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "@app/shared/components/navbar/navbar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
