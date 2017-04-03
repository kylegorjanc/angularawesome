import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'my-projects',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
        <ul class="projects nobullet inline" id="projects">
          <li class="project" *ngFor="let project of projects" (click)="onSelect(project)">
            <div class="">
              <div class="proj-thumb"><img src="{{ project.thumbnail_url }}" alt=""></div>
              <h4 class="proj-title">{{project.title}}</h4>
              <p class="proj-blurb">{{project.blurb}}</p>
            </div>
          </li>
        </ul>
        <project-detail [project]="selectedProject"></project-detail>
    `,
    providers: [ProjectService],
})

export class ProjectsComponent {
  projects: Project[];
  selectedProject: Project;
  constructor(private projectService : ProjectService) { }

  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }
  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}





  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `ProjectDataService`
  // and assign it to a property called `projectDataService`
  // constructor(private projectDataService: ProjectDataService) {
  // }

  // addProject() {
  //   this.projectDataService.addProject(this.newProject);
  //   this.newProject = new Project();
  // }

  // removeProject(project) {
  //   this.projectDataService.deleteProjectById(project.id);
  // }

  // get projects() {
  //   return this.projectDataService.getAllProjects();
  // }

  // Service is now available as this.projectDataService
  // toggleProjectComplete(project) {
  //   this.projectDataService.toggleProjectComplete(project);
  // }



