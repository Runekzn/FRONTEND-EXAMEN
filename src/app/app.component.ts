import { Component, OnInit } from '@angular/core';
import { ModoOscuroService } from './services/darkmode/modo-oscuro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'darkmodeangular-tailwindcss';

  loading: boolean = false;

  constructor() {}

  ngOnInit() {

  }

  
}
