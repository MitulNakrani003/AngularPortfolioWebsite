import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyareaComponent } from './bodyarea/bodyarea.component';
import { BodyareaMainComponent } from "./bodyarea-main/bodyarea-main.component";

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BodyareaComponent, BodyareaMainComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {
    setTheme('bs5'); // or 'bs4'
  }
  title = 'Mitul Nakrani - Portfolio';
}
