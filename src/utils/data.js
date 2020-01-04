import comnet from './comnet.png';
import comnetComp from './comnetComp.png';
import conventer from './conventer.png';
import conventerComp from './conventerComp.png';
import weather from './weather.png';
import weatherComp from './weatherComp.png';
import grawernia from './grawernia.png';
import grawerniaComp from './grawerniaComp.png';

const data = [
  {
    project: 'COMNET',
    number: '01',
    aboutProject:
      "First commercial project wrote in CRA. In cooperation with my friend(UI Desiger) we've created this project from scratch. To make fast navigation I decided to use React Router. We also made some animations. This was an amazing experience to learn how animation works in React.",
    link: 'http://www.com-net.com.pl/',
    imageUrlDesktop: `url(${comnetComp})`,
    imageUrlMobile: `url(${comnet})`,
    technologies: 'ANIMATIONS | REACT | STYLED COMPONENTS',
  },
  {
    project: 'CONVERTER',
    number: '02',
    aboutProject:
      'Application created to learn how to use API. It also works in daily use. Writing code in SCSS sytax was much better and it helped me with keep my code clean. ',
    link: 'https://github.com/marceleq27/CurrencyConverter',
    imageUrlMobile: `url(${conventer})`,
    imageUrlDesktop: `url(${conventerComp})`,
    technologies: 'SCSS | REACT | JAVASCRIPT | API',
  },
  {
    project: 'WEATHER',
    number: '03',
    aboutProject:
      'Simple weather app, it allows enter your city and check current weather. This was first expierience with Styled Components, and now I really love this package :)',
    link: 'https://github.com/marceleq27/DzierzoniowWeatherApp',
    imageUrlMobile: `url(${weather})`,
    imageUrlDesktop: `url(${weatherComp})`,
    technologies: 'API | REACT | STYLED COMPONENTS',
  },
  {
    project: 'GRAWERNIA',
    number: '04',
    aboutProject:
      'Shop created for my client with UI Designer. It was my first contact with e-commerce system like Prestashop, but if you read previous section you know that - I really like improvising :)',
    link: 'https://grawerniaddz.pl',
    imageUrlDesktop: `url(${grawerniaComp})`,
    imageUrlMobile: `url(${grawernia})`,
    technologies: 'PRESTASHOP | IDENTITY | BRANDING',
  },
];

export default data;
