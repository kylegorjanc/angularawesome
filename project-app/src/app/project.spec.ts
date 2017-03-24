import {Project} from './project';

describe('Project', () => {
  it('should create an instance', () => {
    expect(new Project()).toBeTruthy();
  });

   it('should accept values in the constructor', () => {
    let project = new Project({
        project_title: 'TestProject',
        category: 'category',
        link: 'http://link.com',
        thumbnail_url: 'http://placekitten.com/g/300/200',
        blurb: 'this is my test blurb',
        content: '<p style="color:orange;">here is some html</p>',
    });
    expect(project.project_title).toEqual('TestProject');
    expect(project.category).toEqual('category');
    expect(project.link).toEqual('http://link.com');
    expect(project.thumbnail_url).toEqual('http://placekitten.com/g/300/200');
    expect(project.blurb).toEqual('this is my test blurb');
    expect(project.content).toEqual('<p style="color:orange;">here is some html</p>');
  });
});
