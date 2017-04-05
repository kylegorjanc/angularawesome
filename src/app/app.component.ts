import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <header class="main-header">
         <div class="logo-wrap"><a class="nounderline" routerLink="/"><div class="logo"></div></a></div>
         <div class="main-nav">
         <ul class="nobullet inline nav-list header-nav">
           <li><a class="nounderline" routerLink="/projects">Portfolio</a></li>
           <li><a class="nounderline" routerLink="/resume">Resume</a></li>
           <li><a class="nounderline" routerLink="/contact">Contact</a></li>
         </ul>
           
         </div>
       </header>
       
              <main>
              <router-outlet></router-outlet>
              </main>
       
         <footer class="main-footer">
           <ul class="nobullet inline nav-list footer-nav">
             <li>
               <a class="nounderline" href="https://www.linkedin.com/in/kylegorjanc"><i class="fa fa-linkedin-square" aria-hidden="true"></i><span class="screen-reader-text">Linkedin</span></a>
             </li>
             <li>
               <a class="nounderline" href="https://github.com/kylegorjanc"><i class="fa fa-github-square" aria-hidden="true"></i><span class="screen-reader-text">GitHub</span></a>
             </li>
             <li>
               <a class="nounderline" href="https://www.behance.net/kylegorjanc"><i class="fa fa-behance-square" aria-hidden="true"></i><span class="screen-reader-text">Behance</span></a>
             </li>
             <li>
               <a class="nounderline" href="mailto:kylegorjanc@gmail.com"><i class="fa fa-envelope-square" aria-hidden="true"></i><span class="screen-reader-text">Email</span></a>
             </li>
           </ul>
             
         
           <span class="copyright">©2017 Kyle Gorjanc</span>
         </footer>
       `
})
export class AppComponent {
  title: 'Stuff';
}