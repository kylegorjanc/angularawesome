import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from './project-seed';

@Injectable()
export class ProjectService {
  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }
}