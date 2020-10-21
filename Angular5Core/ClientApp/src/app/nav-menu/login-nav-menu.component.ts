import { Component } from '@angular/core';

@Component({
  selector: 'app-loginnav-menu',
  templateUrl: './login-nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class LoginNavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
