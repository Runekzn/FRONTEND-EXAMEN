import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModoOscuroService {

  private isDarkMode = false;

  constructor() {
    this.detectSystemDarkMode();
  }

  private detectSystemDarkMode(): void {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = darkModeQuery.matches;
    darkModeQuery.addListener((event) => {
      this.isDarkMode = event.matches;
    });
  }

  public toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  public isDarkModeEnabled(): boolean {
    return this.isDarkMode;
  }
}
