import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements AfterViewInit {
  classList: any;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.getYear();
    setTimeout(() => {
      this.removeElement();
    }, 3000);
  }

  // to get current year
  private getYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const displayYearElement = document.querySelector("#displayYear");
    if (displayYearElement) {
      displayYearElement.innerHTML = currentYear.toString();
    }
  }

  removeElement() {
    const loader = document.querySelector('.loader');
    if (loader) {
      this.renderer.removeChild(loader.parentNode, loader);
    }
  }
}
