import { Component } from '@angular/core';
import { Project } from './project';

const PROJECTS: Project[] = [
  { id: 11,
    title: 'Salty Running',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/sr-thumbnail.png',
    blurb: 'A collaborative blog and online community of women runners',
    content: '../assets/pdf/salty-running.pdf'
  },
  { id: 12,
    title: 'Tasty Trucks',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/tt-thumbnail.png',
    blurb: 'A mobile app where users can find local food trucks, view the truck’s menu and place an order to be picked up.',
    content: '../assets/pdf/tasty-trucks.pdf'
  },
  { id: 13,
    title: 'Salty Shop',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/ss-thumbnail.png',
    blurb: 'An e-commerce platform for Salty Running that sells a curated selection of running related products',
    content: '../assets/pdf/salty-shop.pdf'
  }
];



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
    `
})

export class AppComponent {
  catTitle: 'Projects';
  projects = PROJECTS;
  selectedProject: Project;
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



