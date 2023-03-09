import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() isActive: boolean = false

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
