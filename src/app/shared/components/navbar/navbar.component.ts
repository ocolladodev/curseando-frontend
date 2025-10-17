import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseCatalogRoutingModule } from "@app/pages/course-catalog/course-catalog.routes";

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [CourseCatalogRoutingModule, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDropdownOpen = false;
  private closeTimeout: any;

  openDropdown() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    this.closeTimeout = setTimeout(() => {
      this.isDropdownOpen = false;
      this.closeTimeout = null;
    }, 150);
  }

}
