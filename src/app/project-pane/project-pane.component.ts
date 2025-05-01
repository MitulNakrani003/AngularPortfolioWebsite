import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-pane',
  imports: [CommonModule],
  templateUrl: './project-pane.component.html',
  styleUrl: './project-pane.component.scss'
})
export class ProjectPaneComponent {
  @Input() project!: any;


  getTechList(): string[] {
    if (this.project && this.project.description && this.project.description.technologies) {
      return Object.keys(this.project.description.technologies);
    }
    return [];
  }
}
