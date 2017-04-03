import { Project } from './project';

export const PROJECTS: Project[] = [
  { id: 11,
    title: 'Salty Running',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/sr-thumbnail.png',
    blurb: 'A collaborative blog and online community of women runners',
    pdf: '../assets/pdf/salty-running.pdf',
    html:'./project-views/sr.html'
  },
  { id: 12,
    title: 'Tasty Trucks',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/tt-thumbnail.png',
    blurb: 'A mobile app where users can find local food trucks, view the truck’s menu and place an order to be picked up.',
    pdf: '../assets/pdf/tasty-trucks.pdf',
    html:'./project-views/tt.html'
  },
  { id: 13,
    title: 'Salty Shop',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/ss-thumbnail.png',
    blurb: 'An e-commerce platform for Salty Running that sells a curated selection of running related products',
    pdf: '../assets/pdf/salty-shop.pdf',
    html:'./project-views/ss.html'
  }
];