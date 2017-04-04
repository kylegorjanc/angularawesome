import { Component, Input } from '@angular/core';
import { Project } from './project';
import { ProjectDetailComponent } from './project-detail.component'

@Component({
  selector: 'project-html11',
  template: `
        <div *ngIf="project">Salty Running
        </div>
        
        `
})

@Component({
  selector: 'project-html12',
  template: `
        <div *ngIf="project">Tasty Trucks
        </div>
        
        `
})

@Component({
  selector: 'project-html13',
  template: `
        <div *ngIf="project">Salty Shop
        </div>
        
        `
})

export class ProjectHtmlComponent {
  @Input() project: Project;
}