import jsIcon from '../assets/jsIcon.png'
import cppIcon from '../assets/cppIcon.png'
import htmlIcon from '../assets/htmlIcon.png'
import cssIcon from '../assets/cssIcon.png'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import { delay } from 'framer-motion'


export const TechStakeData=[
    {
        ImageTitle: 'javascript',
        ImageSrc: jsIcon,
        delay:0.8
    },
    {
        ImageTitle: 'c++',
        ImageSrc: cppIcon,
        delay:0.9
    },
    {
        ImageTitle: 'html',
        ImageSrc: htmlIcon,
        delay:1
    },
    {
        ImageTitle: 'css',
        ImageSrc: cssIcon,
        delay:1.1
    }
]

export const TechStakeData2=[
    {
        ImageTitle: 'c++',
        ImageSrc: cppIcon,
        delay:1.2
    },
    {
        ImageTitle: 'html',
        ImageSrc: htmlIcon,
        delay:1.3
    },
    {
        ImageTitle: 'css',
        ImageSrc: cssIcon,
        delay:1.4
    }
]


export const navItems = ['About','Tools','Experience','Projects']

export const NAV_TITLE = '<MSKN/>'

export const projectData = [
    {
      image: Project1,
      title: 'Blogging Website',
      sentences: [
        'Created a full-stack blog app using MongoDB, Express, React, and Node.',
        'Implemented user auth, CRUD blog post actions, and comment sections.',
        'Handled routing and state using React Router and Context API.',
        'Deployed the application live using Vercel hosting platform.'
      ],
      link: "https://blogging-frontend-navy.vercel.app/"
    },
    {
      image: Project2,
      title: 'Tic Tac Toe Game',
      sentences: [
        'Developed a simple tic-tac-toe game using React and useState hooks.',
        'Managed game logic, win conditions, and turn toggling with ease.',
        'Styled components to make the interface responsive and clean.',
        'Deployed on Netlify for easy sharing and mobile accessibility.'
      ],
      link: "https://gs-tic-tac-toe-game.netlify.app/"
    },
    {
      image: Project3,
      title: 'Youtube Clone',
      sentences: [
        'Built a static homepage of YouTube using pure HTML and CSS basics.',
        'Designed layout including sidebar, navbar, thumbnails, and videos.',
        'Focused mainly on design accuracy and pixel-perfect structuring.',
        'Deployed via GitHub Pages to make it accessible to everyone.'
      ],
      link: "https://gaurav-singh20.github.io/Youtube-Clone/"
    },
    {
      image: Project4,
      title: 'Car Rental Website',
      sentences: [
        'Created a responsive car rental site using HTML, CSS, and Bootstrap.',
        'Added components like navbar, featured cars, and contact section.',
        'Utilized Bootstrap grid and cards for clean layout and spacing.',
        'Hosted the frontend project on GitHub Pages with custom styling.'
      ],
      link: "https://gaurav-singh20.github.io/Car-Rental-Website/"
    }
];
  