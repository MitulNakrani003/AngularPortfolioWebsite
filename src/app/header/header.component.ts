import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  personalInfo = {
    name: 'MITUL NAKRANI',
    title: 'Software Engineer',
    description: 'I am a software engineer with a passion for building scalable web applications and working across the full stack. I have experience in Angular, React, Node.js, and Python. I am always eager to learn new technologies and improve my skills.',
  }
}
