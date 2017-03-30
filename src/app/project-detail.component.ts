import { Component, Input } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'project-detail',
  template: `
        <div *ngIf="project">
          <h2> {{ project.title }} </h2>
          <div><a href="{{ project.content }}" >GO HERE</a></div>
        </div>
        `
})

export class ProjectDetailComponent {
  @Input() project: Project;
}