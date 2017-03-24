import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectDataService } from './project-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectDataService]
})
export class AppComponent {
  title ='Projects';
  newProject: Project = new Project();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `ProjectDataService`
  // and assign it to a property called `projectDataService`
  constructor(private projectDataService: ProjectDataService) {
  }

  addProject() {
    this.projectDataService.addProject(this.newProject);
    this.newProject = new Project();
  }

  removeProject(project) {
    this.projectDataService.deleteProjectById(project.id);
  }

  get projects() {
    return this.projectDataService.getAllProjects();
  }

  // Service is now available as this.projectDataService
  toggleProjectComplete(project) {
    this.projectDataService.toggleProjectComplete(project);
  }


}
