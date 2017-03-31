import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <h2>{{ title }}</h2>
       <a routerLink="/projects">Projects</a>
       <router-outlet></router-outlet>
       `
})
export class AppComponent {
  title: 'Projects';
}