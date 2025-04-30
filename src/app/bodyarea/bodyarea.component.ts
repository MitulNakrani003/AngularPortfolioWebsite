import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { MyphotoComponent } from '../myphoto/myphoto.component';

@Component({
  selector: 'app-bodyarea',
  imports: [AboutmeComponent, MyphotoComponent],
  templateUrl: './bodyarea.component.html',
  styleUrl: './bodyarea.component.scss'
})
export class BodyareaComponent {

}
