import { Component } from '@angular/core';
import { Bodyarea2Component } from '../bodyarea2/bodyarea2.component';
import { BodyareaComponent } from '../bodyarea/bodyarea.component';

@Component({
  selector: 'app-bodyarea-main',
  imports: [Bodyarea2Component, BodyareaComponent],
  templateUrl: './bodyarea-main.component.html',
  styleUrl: './bodyarea-main.component.scss'
})
export class BodyareaMainComponent {

}
