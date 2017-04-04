import { RouterModule }   from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './home.component';
import { ContactComponent }       from './contact.component';
import { ResumeComponent }        from './resume.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectsComponent }      from './project.component';
import { ProjectService }         from './project.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      { 
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ])
  ],
    declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ResumeComponent,
    ProjectDetailComponent,
    ProjectsComponent
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
