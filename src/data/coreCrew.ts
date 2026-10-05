export type CrewCategory = 'leads' | 'all' | 'tech' | 'faculty';

export interface CrewMember {
  id: string;
  category: CrewCategory;
  role: string;
  name: string;
  secondary: string;
  image?: string;
  linkedin?: string;
  phone?: string;
}

export const CREW_CATEGORIES: Array<{ id: CrewCategory; label: string }> = [
  { id: 'leads', label: 'CORE LEADS' },
  { id: 'all', label: 'ALL CREW' },
  { id: 'tech', label: 'TECH & DEV' },
  { id: 'faculty', label: 'FACULTY COMMITTEE' },
];

const LINKEDIN = {
  praneel: 'https://www.linkedin.com/in/praneel-kulkarni?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  swati: 'https://www.linkedin.com/in/swati-hegde-205364319?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  hemanth: 'https://www.linkedin.com/in/hemanth-u-568458335?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  deekshitha: 'https://www.linkedin.com/in/deekshitha-j-a-2a86673b9?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  sumedha: 'https://www.linkedin.com/in/sumedha-bhat-372bb1343?utm_source=share_via&utm_content=profile&utm_medium=member_android',
};

export const CORE_LEADS: CrewMember[] = [
  { id: 'lead-praneel', category: 'leads', role: 'EVENT COORDINATOR', name: 'PRANEEL KULKARNI', secondary: '8660276040', phone: '8660276040', image: '/crew/praneel.jpeg', linkedin: LINKEDIN.praneel },
  { id: 'lead-open', category: 'leads', role: 'EVENT COORDINATOR', name: '', secondary: '' },
];

export const ALL_CREW: CrewMember[] = [
  { id: 'crew-keshav', category: 'all', role: 'CORE CREW', name: 'KESHAV SAVANTH S', secondary: 'TECH & DEV', image: '/crew/keshav.png', linkedin: LINKEDIN.praneel },
  { id: 'crew-chaya', category: 'all', role: 'CORE CREW', name: 'CHAYA R', secondary: 'CORE CREW', image: '/crew/chaya.png' },
  { id: 'crew-swati', category: 'all', role: 'CORE CREW', name: 'SWATI SHRIDHAR HEGDE', secondary: 'TECH & DEV', image: '/crew/swati.jpeg', linkedin: LINKEDIN.swati },
  { id: 'crew-hemanth', category: 'all', role: 'CORE CREW', name: 'HEMANTH U', secondary: 'TECH & DEV', image: '/crew/hemanth.png', linkedin: LINKEDIN.hemanth },
  { id: 'crew-deekshitha', category: 'all', role: 'CORE CREW', name: 'DEEKSHITHA J A', secondary: 'CORE CREW', image: '/crew/deekshitha.jpeg', linkedin: LINKEDIN.deekshitha },
  { id: 'crew-sumedha', category: 'all', role: 'CORE CREW', name: 'SUMEDHA BHAT', secondary: 'CORE CREW', image: '/crew/sumedha.png', linkedin: LINKEDIN.sumedha },
  { id: 'crew-praneel', category: 'all', role: 'CORE CREW', name: 'PRANEEL KULKARNI', secondary: 'EVENT COORDINATOR', image: '/crew/praneel.jpeg', linkedin: LINKEDIN.praneel },
  { id: 'crew-sushanth', category: 'all', role: 'CORE CREW', name: 'SUSHANTH N S', secondary: 'CORE CREW', image: '/crew/sushanth.jpeg', linkedin: LINKEDIN.swati },
];

export const TECH_AND_DEV: CrewMember[] = [
  { ...ALL_CREW[6], id: 'tech-praneel', category: 'tech', role: 'TECH & DEV' },
  { ...ALL_CREW[0], id: 'tech-keshav', category: 'tech', role: 'TECH & DEV' },
  { ...ALL_CREW[3], id: 'tech-hemanth', category: 'tech', role: 'TECH & DEV' },
  { ...ALL_CREW[7], id: 'tech-sushanth', category: 'tech', role: 'TECH & DEV' },
  { ...ALL_CREW[2], id: 'tech-swati', category: 'tech', role: 'TECH & DEV' },
];

export const FACULTY_COMMITTEE: CrewMember[] = [
  { id: 'faculty-pavitra', category: 'faculty', role: 'FACULTY COMMITTEE', name: 'DR. PAVITRA BAI S', secondary: 'DEPT. OF ISE' },
  { id: 'faculty-prarthana', category: 'faculty', role: 'FACULTY COMMITTEE', name: 'PROF. PRARTHANA J V', secondary: 'DEPT. OF ISE' },
  { id: 'faculty-gayathri', category: 'faculty', role: 'FACULTY COMMITTEE', name: 'PROF. GAYATHRI S', secondary: 'DEPT. OF ISE' },
];
