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
  (<any>Object).assign(project, values);
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


// var projectArr = [

  let saltyRunning = new Project({
        title: 'Salty Running',
        category: 'design',
        link: 'https://www.saltyrunning.com',
        thumbnail_url: 'http://placekitten.com/g/100/100',
        blurb: 'A collaborative blog and online community of women runners',
        content: '<p style="color:orange;">here is some html in the color orange!!!</p>',
    });

  let saltyRunning2 = new Project({
        title: 'Salty Running',
        category: 'design',
        link: 'https://www.saltyrunning.com',
        thumbnail_url: 'http://placekitten.com/g/100/100',
        blurb: 'A collaborative blog and online community of women runners',
        content: '<p style="color:orange;">here is some html in the color orange!!!</p>',
    });

  let saltyRunning3 = new Project({
        title: 'Salty Running',
        category: 'design',
        link: 'https://www.saltyrunning.com',
        thumbnail_url: 'http://placekitten.com/g/100/100',
        blurb: 'A collaborative blog and online community of women runners',
        content: '<p style="color:orange;">here is some html in the color orange!!!</p>',
    });




// ];




