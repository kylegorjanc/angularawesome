import { Component } from '@angular/core';

export class Skill {
  item: string
}

export class School {
  name: string;
  year: string;
  program: string
}

export class Job {
  title: string;
  company: string;
  dates: string;
  location: string;
  desc: string
}

export class Assn {
  item: string
}

const SKILLS: Skill[] = [
    { item: "User Surveys" },
   { item: "Content Analysis" },
   { item: "Competitive Analysis" },
   { item: "Interactive Prototyping" },
   { item: "User Testing" },
   { item: "Interviews" },
   { item: "User Flows" },
   { item: "Wireframes" },
   { item: "Sketch App" },
   { item: "Adobe CC: Photoshop, Illustrator, Indesign, etc." },
   { item: "InVision" },
   { item: "Balsamiq" },
   { item: "Agile Development" },
   { item: "HTML/CSS" },
   { item: "LESS/SASS" },
   { item: "JavaScript & JQuery" },
   { item: "Angular.js" },
   { item: "MEAN.js" },
   { item: "Ruby/Rails" },
   { item: "PHP" },
   { item: "Wordpress" },
   { item: "Video" },
   { item: "Focus Pulling" },
   { item: "Cinematography" },
   { item: "Photography" }
  ];
const SCHOOLS: School[] = [
    {
      name:"Bloc",
      year: "2017",
      program: "UX/UI Design Fundamentals Certificate"
    },
    {
      name:"General Assembly NYC",
      year: "2015",
      program: "Web Development Immersive Bootcamp"
    },
    {
      name: "The University of New Orleans",
      year: "2005",
      program: "B.A., Film History, Theory and Criticism"
    }
  ];
const JOBS: Job[] =  [
    {
      title: "Technical Co-Founder",
      company: "Salty Running",
      dates: "2015-",
      location: "Cleveland, OH",
      desc: "With no prior knowledge of design or development, I created an online community of 45 active contributors and 2k+ daily readers."
    },
    {
      title: "2nd Assistant Camera",
      company: "Freelance Film Production",
      dates: "2015-",
      location: "New York, NY",
      desc: "Managed daily operations of camera department, including coordinating daily hires and equipment rentals and managing lower ranking employees. Credits include My Friend Dahmer, The Wizard of Lies, Little Boxes, Saturday Night Live."
    },
    {
      title: "Camera Loader",
      company: "Freelance Film Production",
      dates: "2013-2015",
      location: "New York, NY",
      desc: "Transferred and checked quality of digital output for major contract motion pictures and television shows. Credits include Boardwalk Empire (HBO), The Unbreakable Kimmy Schmidt, Eye Candy, John Wick, Run All Night, Mozart in the Jungle, Person of Interest."
    },
    {
      title: "Production Assistant",
      company: "Freelance Film Production",
      dates: "2008-2013",
      location: "New York, NY",
      desc: "Assisted producers and Assistant Directors with day to day operations of film sets, including coordinating cast and crew schedules, liasing with cast, distribution of companywide information and generating daily reports. Credits include The Secret Life of Walter Mitty, The Wolf of Wall Street, Men in Black III, Tower Heist, The Other Guys, 30 Rock."
    },
    {
      title: "Admissions Counselor for Recruitment",
      company: "The University of New Orleans",
      dates: "2006-2007",
      location: "New Orleans, LA",
      desc: "Led recruitment effort for transfer students and students returning to New Orleans after displacement from Hurricane Katrina. Counseled students on admissions standards and transition into student life."
    },
    {
      title: "Owner, Photographer",
      company: "Kyle Gorjanc Photography",
      dates: "2004-2006",
      location: "New Orleans, LA",
      desc: "Created and operated a small business creating and selling Louisiana nature and wildlife photography in a French Quarter gallery"
    }
  ];
const ASSNS: Assn[] = [
   { item: "Women Who Code" },
   { item: "International Cinematographer's Guild, IATSE Local 600" },
   { item: "Women in Film and Television" },
   { item: "7-time Marathon Runner" },
   { item: "Hash House Harriers" },
   { item: "USATF Certified Track & Field Coach" },
   { item: "Nature and Garden Enthusiast" },
   { item: "Ornithology" },
   { item: "Nature and Event Photography" }
  ];

@Component({
  selector: 'resume',
  template: `
   <div class="resume flex">

    <div class="res-section skills">
    <h4>Skills</h4>
     <ul class="nobullet columns2">
      <li *ngFor="let skill of skills" class="res-item">
        {{ skill.item }}
      </li>
      </ul>
    </div>

    <div class="res-section schools">
    <h4>Education</h4>
     <ul class="nobullet">
      <li *ngFor="let school of schools" class="res-item">
        <div class="flex">
          <span class="school-name bold">{{ school.name }}</span>
          <span class="school-year">{{ school.year }}</span>
        </div> 
        <div>
          <span class="school-program">{{ school.program }}</span>
        </div>
      </li>
      </ul>
    </div>

    <div class="res-section jobs">
     <h4>Work History</h4>
     <ul class="nobullet">
      <li *ngFor="let job of jobs" class="res-item" >
        <div class="flex">
          <span class="job-title bold">{{ job.title }}</span>
          <span class="job-dates">{{ job.dates }}</span>
        </div>
        <div>
          <span class="job-company bold">{{ job.company }}</span>
        </div>
        <div>
          <span class="job-desc">{{ job.desc }}</span>
        </div>
      </li>
      </ul>
    </div>

    <div class="res-section assns">
     <h4>Associations & Interests</h4>
     <ul class="nobullet">
      <li *ngFor="let assn of assns" class="hanging-indent res-item">
        {{ assn.item }}
      </li>
      </ul>
    </div>

     </div>
   <div class="resume-pdf-link">
    <button class="nounderline" href="./assets/kylegorjancresume.pdf">Resume in PDF</button>
   </div>
  `
})
export class ResumeComponent { 
  skills = SKILLS;
  schools = SCHOOLS;
  jobs = JOBS;
  assns = ASSNS
}