import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  burgerMenu = false;
  toggleMenu(): void{
    this.burgerMenu = !this.burgerMenu;
    console.log(this.burgerMenu);
  }
}
