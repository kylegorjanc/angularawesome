import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectDataService {

  lastId: number = 0;
  // placeholder for projects
  projects: Project[] = [];

  constructor() { }




// Simulate POST /projects
addProject(project: Project): ProjectDataService {
  if (!project.id) {
      project.id = ++this.lastId;
    }
  this.projects.push(project);
  return this;
}

// simulate DELETE /projects/:id 
deleteProjectById(id: number): ProjectDataService {
  this.projects = this.projects
  .filter(project => project.id !== id);
  return this;
}

// Simulate PUT /projects/:id
updateProjectById(id: number, values: Object = {}): Project {
  let project = this.getProjectById(id);
  if (!project) {
    return null;
  }
  Object.assign(project, values);
    return project;
}

// Simulate GET /projects
getAllProjects(): Project[] {
  return this.projects;
}

// Simulate GET single /project/:id
getProjectById(id: number): Project {
  return this.projects
  .filter(project => project.id === id)
  .pop();
}

}



