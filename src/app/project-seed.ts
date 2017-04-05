import { Project } from './project';

export const PROJECTS: Project[] = [
  { id: 11,
    title: 'Salty Running',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/sr-thumbnail.png',
    blurb: 'A collaborative blog and online community of women runners',
    pdf: '../assets/pdf/salty-running.pdf',
    html: `<div class="project-content">
  <div class="section intro">
    <p class="columns2"><a href="https://www.saltyrunning.com">Salty Running</a> is a collaborative blog for women runners that uses WordPress for its day-to-day content management. I built and styled the original site in 2012 (having no working knowledge of code) by using a theme with a WYSIWYG style editor. At the end of 2015 we decided to make a push for profitability. By this time I had learned enough HTML/CSS to get by, and decided I wanted to learn how to seriously build a new site. <br/><br/>I enrolled in a dev bootcamp and started learning development. Through that experience I learned how much I didn’t know about design, but the more I tried, the more I loved it. With the help of a branding firm we developed a color palette that felt bold, fast and strong. We updated our logo from a cute little cartoon snail to a cleaner, sleeker version. Then it was time for me to get to work on the details. Here’s what I did with the home page.</p>
  </div>

  <div class="section flex-tight bggrey" id="section-1">
    <div class="flex-item-2 cs-image"><img src="../assets/11/sr-screenshot.png" alt=""></div>
    <div class="flex-item-1 cs-text">
      <p>Our number 1 priority was fixing our navigation.</p>
      <p>Previously, SR navigation was two rows of links, all of which had dropdown submenus. After surveying users, I discovered that dropdowns added confusion to the experience instead of helping users find what they’re looking for. I elected to eliminate all dropdown menus in favor of a few simple links that explain what we are. I asked “what do we want to communicate?” Based on feedback from the other partners we decided that we wanted to say this: “Primarily this is a blog. It is written by a team of bloggers. It’s about training for runners. Here’s where you can learn more.”</p>
    </div>
  </div>

  <div class="section flex-tight" id="section-2">
    <div class="flex-item-1 cs-text">
      <h4>Easy to Find Features</h4>
      <p>SR has lots of regular features, but when we asked users they didn’t know what these were. I added a carousel to make them more accessible. For this, I had to design around development constraints of using the Flickety carousel API, since my stakeholders and I were committed to it. We chose this API after testing two other carousels that did not respond when mobile users tried to ‘flick’ the slides right and left. Integrating Flickety allowed me to have a touch-responsive carousel that was ready out of the box.</p>
    </div>
    <div class="flex-item-1 cs-image"><img src="../assets/11/sr-flickety.png" alt=""></div>
  </div>

  <div class="section flex-tight bggrey" id="section-3">
    <div class="flex-item-1 cs-text">
      <h4>Find Anything</h4>
      <p>A lot of users come to Salty Running for reference to find tips, race reports, reviews and training information. To help these users pinpoint what they’re looking for, I added a search bar. </p>
      <p>I tested the search bar in the header on mobile screens and found it confused users by disrupting the flow of their reading. So on smaller screens, the search bar disappears from the header and reappears in a menu drawer, as shown:</p>
    </div>
    <div class="flex-item-2 cs-image"><img src="../assets/11/sr-search.png" alt=""></div>
  </div>
</div>`
  },

  { id: 12,
    title: 'Tasty Trucks',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/tt-thumbnail.png',
    blurb: 'A mobile app where users can find local food trucks, view the truck’s menu and place an order to be picked up.',
    pdf: '../assets/pdf/tasty-trucks.pdf',
    html: `<div class="project-content">
    <div class="section intro">
  <p class="columns2">Tasty Trucks is a mobile app where users can search a map for nearby food trucks, view the trucks’ menus, place and pay for an order, and review their experience.<br/><br>This was my first time creating a brand identity, and the directive was to create something fun and friendly that would make people want to order lunch.</p>
</div>

<div class="section flex-tight bgblue" id="section-1">
  <div class="flex-item-2 cs-image"><img src="../assets/12/tt-moodboard.png" alt="Mood Board"></div>
  <div class="flex-item-1 cs-text">
    <p>I started by creating a mood board on Niice to find some color inspiration from food and really latched on to the colors and shapes of bell pepper ribs for a while, but ultimately when I started creating color palettes these felt too old world, and the shape of the bell pepper didn’t really translate when I digitized it, so I went back to square 1.</p>
  </div>
</div>

<div class="section flex-tight bgblue" id="section-2">
  <div class="flex-item-1 cs-text">
    <h4></h4>
    <p>I decided to just start sketching some things to see where that took me. Here you can see a few of my earliest ideas alongside my user flow- at this stage the app was called Truck Rally, and I kinda ran with it on a literal wavelength just to get started.</p>
    <p> While I didn’t stick with any of this, the checkered flag made me think of classic diners, which always feel fun and friendly to me, and always make me want to order lunch.</p>
  </div>
  <div class="flex-item-2 cs-image"><img src="../assets/12/tt-sketch-logo.png" alt="Sketches"></div>
</div>

<div class="section flex-tight" id="section-3">
  <div class="flex-item-2 cs-image"><img src="../assets/12/tt-palettes.png" alt="Color Palettes"></div>
  <div class="flex-item-1 cs-text">
    <h4>An Aha Moment!</h4>
    <p>From here I moved into back into color palette mode, but instead of using veggies and fruits as my inspiration I used photos of the shiniest diners I could find and found a great palette almost immediately.</p>
  </div>
</div>

<div class="section inset" id="section-4">
  <div class="cs-image"> <img src="../assets/12/tt-pencilsketch.png" alt="sketching">  <div class="cs-text bgblue">Meanwhile, back in my notebook I was sketching low-fi wireframes. I like to work in pencil in the early stages because it’s fast, and I think sketching by hand helps me intuit where page elements should be displayed.</div>
  </div>

</div>

<div class="section flex-tight skinnysection" id="section-5">
  <div class="flex-item-1 cs-image"><img src="../assets/12/tt-logo.png" alt="Tasty Trucks Logo">
  </div>
  <div class="flex-item-1 cs-text">
    <h4>In My Wheelhouse</h4>
    <p>I started playing around with the knife and fork from my original checkered-flag logo sketches. I made some vectors in Sketch and started moving them around on the canvas. Once I placed them into a traditional place setting with a plate between, the logo came into sight for me:</p>
  </div>
</div>

<div class="section flex-tight bgblue" id="section-6">
  <div class="flex-item-1 cs-text">
    <h4></h4>
    <p>Next it was about creating grayscale wireframes to get my placements and proportions right. Once I got feedback, I iterated over them with color to ensure a second pass on everything.  </p>
    <p>In a perfect world, I would have used these to create an early prototype and tested it with users before finalizing the frames and adding color. In this case, however, I was limited by time and tested with color frames.</p>
  </div>
  <div class="flex-item-2 cs-image"><img src="../assets/12/tt-b&wframes.png" alt="Wireframes"></div>
</div>

<div class="section flex-tight skinnysection" id="section-7">
  <div class="flex-item-1 cs-text">
    <h4></h4>
    <p>Through the process a couple things became clear: I needed to use my bright red color very sparingly. I adjusted my palette into analogous blues and used my bright red as a primary action color. Its brightness in contrast with the softer blue is a great attention grabber!</p>
  </div>
  <div class="flex-item-1 cs-image"><img src="../assets/12/tt-StyleGuide.png" alt="Style Guide"></div>
</div>

<div class="section flex-tight" id="section-8">
  <div class="flex-item-1 cs-image"><img src="../assets/12/tt-colorframes.png" alt="Color Wireframes">
  </div>
</div>

<div class="section flex-tight bgblue  skinnysection" id="section-9">
  <div class="flex-item-1 cs-text">
    <h4>Test and Iterate</h4>
    <p>Once I got user test feedback, I of course wound up making some changes in my design decisions. A good example is the checkout screen, where I had originally conceived of item quantities appearing as an input, allowing users to use the number keypad to make changes. After testing and getting feedback I shifted to a toggle system so users wouldn’t need any keypad. On my second pass, I found this solution allowed me to completely remove the “X” icon to delete the item from the cart. Instead, users can just toggle down to 0. A simpler design with fewer elements on the page is just more user friendly!</p>
  </div>
</div>

<div class="section flex-tight" id="section-10">
  <div class="flex-item-1 cs-image"><img src="../assets/12/tt-iterate.png" alt="Iterating over Check Out screen">
  </div>
</div>
</div>`
  },

  { id: 13,
    title: 'Salty Shop',
    category: 'design',
    link: '',
    thumbnail_url: '../assets/img/ss-thumbnail.png',
    blurb: 'An e-commerce platform for Salty Running that sells a curated selection of running related products',
    pdf: '../assets/pdf/salty-shop.pdf',
    html: `<div class="project-content">
  <div class="section intro">
    <p class="columns2">The Salty Shop is an online boutique I created on spec for Salty Running to try my hand at designing an e-commerce platform. Stay tuned for more info about my design process!</p>
  </div>
</div>`
  }
];