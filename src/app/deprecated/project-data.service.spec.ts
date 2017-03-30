/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Project } from './project'
import { ProjectDataService } from './project-data.service';

describe('ProjectDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDataService]
    });
  });

  it('should ...', inject([ProjectDataService], (service: ProjectDataService) => {
    expect(service).toBeTruthy();
  }));

 describe('#getAllProjects()', () => {

    it('should return an empty array by default', inject([ProjectDataService], (service: ProjectDataService) => {
      expect(service.getAllProjects()).toEqual([]);
    }));

    it('should return all projects', inject([ProjectDataService], (service: ProjectDataService) => {
        let project1 = new Project({
              title: 'TestProject1',
              category: 'category1',
              link: 'http://link.com/1',
              thumbnail_url: 'http://placekitten.com/g/100/100',
              blurb: 'this is my test blurb1',
              content: '<p style="color:orange;">here is some html1</p>',
          });
          let project2 = new Project({
              title: 'TestProject2',
              category: 'category2',
              link: 'http://link.com/2',
              thumbnail_url: 'http://placekitten.com/g/200/200',
              blurb: 'this is my test blurb2',
              content: '<p style="color:orange;">here is some html2</p>',
          });
      service.addProject(project1);
      service.addProject(project2);
      expect(service.getAllProjects()).toEqual([project1, project2]);
    }));

  });

  describe('#save(project)', () => {


  });

  describe('#deleteProjectById(id)', () => {

    it('should remove project with the corresponding id', inject([ProjectDataService], (service: ProjectDataService) => {
            let project1 = new Project({
              title: 'TestProject1',
              category: 'category1',
              link: 'http://link.com/1',
              thumbnail_url: 'http://placekitten.com/g/100/100',
              blurb: 'this is my test blurb1',
              content: '<p style="color:orange;">here is some html1</p>',
          });
          let project2 = new Project({
              title: 'TestProject2',
              category: 'category2',
              link: 'http://link.com/2',
              thumbnail_url: 'http://placekitten.com/g/200/200',
              blurb: 'this is my test blurb2',
              content: '<p style="color:orange;">here is some html2</p>',
          });
      service.addProject(project1);
      service.addProject(project2);
      expect(service.getAllProjects()).toEqual([project1, project2]);
      service.deleteProjectById(1);
      expect(service.getAllProjects()).toEqual([project2]);
      service.deleteProjectById(project2.id);
      expect(service.getAllProjects()).toEqual([]);
    }));

    it('should not be removing anything if project with corresponding id is not found', inject([ProjectDataService], (service: ProjectDataService) => {
          let project1 = new Project({
              title: 'TestProject1',
              category: 'category1',
              link: 'http://link.com/1',
              thumbnail_url: 'http://placekitten.com/g/100/100',
              blurb: 'this is my test blurb1',
              content: '<p style="color:orange;">here is some html1</p>',
          });
          let project2 = new Project({
              title: 'TestProject2',
              category: 'category2',
              link: 'http://link.com/2',
              thumbnail_url: 'http://placekitten.com/g/200/200',
              blurb: 'this is my test blurb2',
              content: '<p style="color:orange;">here is some html2</p>',
          });
      service.addProject(project1);
      service.addProject(project2);
      expect(service.getAllProjects()).toEqual([project1, project2]);
      service.deleteProjectById(7);
      expect(service.getAllProjects()).toEqual([project1, project2]);
    }));

  });

  describe('#updateProjectById(id, values)', () => {

    it('should return project with the corresponding id and updated data', inject([ProjectDataService], (service: ProjectDataService) => {
      let project = new Project({
              title: 'TestProject1',
              category: 'category1',
              link: 'http://link.com/1',
              thumbnail_url: 'http://placekitten.com/g/100/100',
              blurb: 'this is my test blurb1',
              content: '<p style="color:orange;">here is some html1</p>',
          });
      service.addProject(project);
      let updatedProject = service.updateProjectById(1, {
        title: 'new title'
      });
      expect(updatedProject.title).toEqual('new title');
    }));

    it('should return null if project is not found', inject([ProjectDataService], (service: ProjectDataService) => {
      let project = new Project({
              title: 'TestProject1',
              category: 'category1',
              link: 'http://link.com/1',
              thumbnail_url: 'http://placekitten.com/g/100/100',
              blurb: 'this is my test blurb1',
              content: '<p style="color:orange;">here is some html1</p>',
          });
      service.addProject(project);
      let updatedProject = service.updateProjectById(2, {
        title: 'new title'
      });
      expect(updatedProject).toEqual(null);
    }));

  });


});
