import { Component } from '@angular/core';
import { ModoOscuroService } from '../../services/darkmode/modo-oscuro.service'

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent {
  darkMode = false;
  isTransitioning = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this.isTransitioning = true;
    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }
}
