import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-pane',
  imports: [],
  templateUrl: './project-pane.component.html',
  styleUrl: './project-pane.component.scss'
})
export class ProjectPaneComponent {
  @Input() project!: any;
}
