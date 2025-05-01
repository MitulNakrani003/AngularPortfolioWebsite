import { Component } from '@angular/core';
import { ProjectareaLeftComponent } from "../projectarea-left/projectarea-left.component";
import { ProjectareaRightComponent } from "../projectarea-right/projectarea-right.component";

@Component({
  selector: 'app-projectarea-main',
  imports: [ProjectareaLeftComponent, ProjectareaRightComponent],
  templateUrl: './projectarea-main.component.html',
  styleUrl: './projectarea-main.component.scss'
})
export class ProjectareaMainComponent {

}
