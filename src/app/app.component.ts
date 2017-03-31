import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
       <h2>Projects</h2>
        <ul class="projects nobullet inline" id="projects">
          <li *ngFor="let project of projects" (click)="onSelect(project)">
            <div class="project">
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

export class AppComponent {
  catTitle: 'Projects';
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



