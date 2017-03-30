import { Component } from '@angular/core';
// import { Project } from './project';

const PROJECTS: Project[] = [
  { id: 11,
    title: 'Salty Running',
    category: 'design',
    link: 'https://www.saltyrunning.com',
    thumbnail_url: '../assets/img/sr-thumbnail.png',
    blurb: 'A collaborative blog and online community of women runners',
    content: '<p style="color:orange;">here is some html in the color orange!!!</p>'
  },
  { id: 12,
    title: 'Tasty Trucks',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/tt-thumbnail.png',
    blurb: 'A mobile app where users can find local food trucks, view the truck’s menu and place an order to be picked up.',
    content: '<p style="color:orange;">here is some html in the color orange!!!</p>'
  },
  { id: 13,
    title: 'Salty Running',
    category: 'design',
    link: 'https://www.saltyrunning.com',
    thumbnail_url: '../assets/img/ss-thumbnail.png',
    blurb: 'A collaborative blog and online community of women runners',
    content: '<p style="color:orange;">here is some html in the color orange!!!</p>'
  }
];

export class Project {
  id: number;
  title: string;
  category: string;
  link: string;
  thumbnail_url: string;
  blurb: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h2>Projects</h2>
    <ul class="projects nobullet inline" id="projects">
      <li *ngFor="let project of projects">
        <div class="project">
        <a href="{{project.link}}">
          <div class="proj-thumb"><img src="{{ project.thumbnail_url }}" alt=""></div>
          <h4 class="proj-title">{{project.title}}</h4>
          <p class="proj-blurb">{{project.blurb}}</p>
        </a>
        </div>
      </li>
    </ul>`
})

export class AppComponent {
  catTitle: 'Projects';
  projects = PROJECTS;
  // project: Project = {
  //   id: 1,
  //   title: 'Salty Running',
  //   category: 'design',
  //   link: 'http://www.saltyrunning.com',
  //   thumbnail_url: 'http://placekitten.com/g/200/150',
  //   blurb: 'A collaborative blog and online community of women runners',
  //   content: '<p style="color:orange;">here is some html in the color orange!!!</p>'
  // }
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



