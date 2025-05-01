import { Component } from '@angular/core';
import { ProjectPaneComponent } from "../project-pane/project-pane.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projectarea-right',
  imports: [ProjectPaneComponent, CommonModule],
  templateUrl: './projectarea-right.component.html',
  styleUrl: './projectarea-right.component.scss'
})
export class ProjectareaRightComponent {
  projectInfo = 
  [
    {
      off: false,
      title: 'Project Title',
      description: {
        text: 'This is a brief description of the project. It highlights the main features and functionalities of the project. This is a brief description of the project. It highlights the main features and functionalities of the project.',
        details: 'Detailed information about the project, including its objectives, technologies used, and any challenges faced during development.',
        technologies: {
          'angular': 'https://angular.io/',
          'typescript': 'https://www.typescriptlang.org/',
          'html': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          'css': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          'bootstrap': 'https://getbootstrap.com/',
        }
      },
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://example.com'
    },

    {
      off: false,
      title: 'Project Title',
      description: {
        text: 'This is a brief description of the project. It highlights the main features and functionalities of the project. This is a brief description of the project. It highlights the main features and functionalities of the project.',
        details: 'Detailed information about the project, including its objectives, technologies used, and any challenges faced during development.',
        technologies: {
          'angular': 'https://angular.io/',
          'typescript': 'https://www.typescriptlang.org/',
          'html': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          'css': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          'bootstrap': 'https://getbootstrap.com/',
        }
      },
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://example.com'
    }
  ];
}
