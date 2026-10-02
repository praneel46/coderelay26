import founderImg from '../assets/images/founder-president.png';
import presidentImg from '../assets/images/president.png';
import mdImg from '../assets/images/managing-director.png';

export interface Leader {
  id: string;
  role: string;
  name: string;
  institution: string;
  image: string;
  imageAlt: string;
}

export const LEADERS: Leader[] = [
  {
    id: 'leader-founder',
    role: 'Founder President',
    name: 'His Divine Soul Jagadguru Padmabhushana Dr. Sri Sri Sri Balagangadharanatha Mahaswamiji',
    institution: 'Sri Adichunchanagiri Shikshana Trust®',
    image: founderImg,
    imageAlt: 'His Divine Soul Jagadguru Padmabhushana Dr. Sri Sri Sri Balagangadharanatha Mahaswamiji',
  },
  {
    id: 'leader-president',
    role: 'President',
    name: 'Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Maha Swamiji',
    institution: 'Sri Adichunchanagiri Shikshana Trust®',
    image: presidentImg,
    imageAlt: 'Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Maha Swamiji',
  },
  {
    id: 'leader-md',
    role: 'Managing Director',
    name: 'Sri Sri Dr. Prakashanatha Swamiji',
    institution: 'BGS & SJB Group of Institutions and Hospitals',
    image: mdImg,
    imageAlt: 'Sri Sri Dr. Prakashanatha Swamiji',
  },
];
