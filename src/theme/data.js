import comnet from '../utils/comnet.png';
import comnetComp from '../utils/comnetComp.png';
import conventer from '../utils/conventer.png';
import conventerComp from '../utils/conventerComp.png';
import weather from '../utils/weather.png';
import weatherComp from '../utils/weatherComp.png';
import grawernia from '../utils/grawernia.png';
import grawerniaComp from '../utils/grawerniaComp.png';

const data = [
  {
    id: 1,
    project: 'COMNET',
    number: '01',
    aboutProject:
      'Pierwszy komercyjny projekt strony-wizytówki z użyciem CRA. We współpracy z grafikiem podjęliśmy się stworzenia projektu od zera. Z pomocą przyszły również takie technologie jak React Router oraz biblioteki odpowiadające za animacje.',
    link: 'http://www.com-net.com.pl/',
    imageUrlDesktop: `url(${comnetComp})`,
    imageUrlMobile: `url(${comnet})`,
    technologies: 'ANIMATIONS | REACT | STYLED COMPONENTS',
    isActive1: 'active',
  },
  {
    id: 2,
    project: 'CONVERTER',
    number: '02',
    aboutProject:
      'Aplikacja stworzona w celu nauki korzystania z API ,ale sprawdza się również w praktycznym użyciu. Dobrze sprawdziła się tu składnia SCSS, która znacznie ułatwiła pisanie kodu.',
    link: 'https://github.com/marceleq27/CurrencyConverter',
    imageUrlMobile: `url(${conventer})`,
    imageUrlDesktop: `url(${conventerComp})`,
    technologies: 'SCSS | REACT | JAVASCRIPT | API',
    isActive2: 'active',
  },
  {
    id: 3,
    project: 'WEATHER',
    number: '03',
    aboutProject:
      'Prosta aplikacja pogodowa, umożliwia wpisanie danego miasta i sprawdzenie aktualnej pogody. GIFy pochodzą z zewnętrznego źródła na które dostałem pozwolenie. Do ostylowania świetnie sprawdziła się paczka styled components.',
    link: 'https://github.com/marceleq27/DzierzoniowWeatherApp',
    imageUrlMobile: `url(${weather})`,
    imageUrlDesktop: `url(${weatherComp})`,
    technologies: 'API | REACT | STYLED COMPONENTS',
    isActive3: 'active',
  },
  {
    id: 4,
    project: 'GRAWERNIA',
    number: '04',
    aboutProject:
      'Sklep utworzony na zlecenie klienta, powstał we współpracy ze znajomym grafikiem. Była to moja pierwsza stycznośc z tego typu systemami, natomiast szybka nauka pozwoliła na sprawne postawienie sklepu.',
    link: 'https://grawerniaddz.pl',
    imageUrlDesktop: `url(${grawerniaComp})`,
    imageUrlMobile: `url(${grawernia})`,
    technologies: 'PRESTASHOP | IDENTITY | BRANDING',
    isActive4: 'active',
  },
];

export default data;
