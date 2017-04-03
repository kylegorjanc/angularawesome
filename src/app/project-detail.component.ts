import { Component, Input } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'project-detail',
  template: `
        <div *ngIf="project">
          <div class="project-header flex"> 
            <h3 class="project-header-title">{{ project.title }}</h3> 
            <span class="project-pdf-link"><a href="{{ project.content }}" >View PDF</a></span></div>
          
        </div>
        `
})

export class ProjectDetailComponent {
  @Input() project: Project;
}