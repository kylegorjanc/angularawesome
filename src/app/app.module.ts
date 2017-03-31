import { RouterModule }   from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent }           from './app.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectsComponent }      from './project.component';
import { ProjectService }         from './project.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'projects',
        component: ProjectsComponent
      }
    ])
  ],
    declarations: [
    AppComponent,
    ProjectDetailComponent,
    ProjectsComponent
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
