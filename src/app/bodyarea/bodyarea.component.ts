import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { MyphotoComponent } from '../myphoto/myphoto.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-bodyarea',
  imports: [AboutmeComponent, MyphotoComponent, SkillsComponent],
  templateUrl: './bodyarea.component.html',
  styleUrl: './bodyarea.component.scss'
})
export class BodyareaComponent {

}
