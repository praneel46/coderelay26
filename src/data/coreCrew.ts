export type CrewCategory = 'all' | 'leads' | 'faculty' | 'tech' | 'operations';

export interface CrewMember {
  id: string;
  category: Exclude<CrewCategory, 'all'>;
  role: string;
  name: string;
  secondary: string;
  phone?: string;
}

export interface CrewSlot {
  id: string;
  category: CrewCategory;
  role: string;
  name: string;
  secondary: string;
  phone?: string;
}

export const CREW_CATEGORIES: Array<{ id: CrewCategory; label: string }> = [
  { id: 'all', label: 'ALL CREW' },
  { id: 'leads', label: 'CORE LEADS' },
  { id: 'faculty', label: 'FACULTY COMMITTEE' },
  { id: 'tech', label: 'TECH & DEV' },
  { id: 'operations', label: 'OPERATIONS & MEDIA' },
];

export const ALL_CREW: CrewSlot[] = Array.from({ length: 6 }, (_, index) => ({
  id: `crew-slot-${index + 1}`,
  category: 'all',
  role: 'CREW SLOT',
  name: '',
  secondary: '',
}));

export const CORE_LEADS: CrewMember[] = [
  {
    id: 'lead-praneel',
    category: 'leads',
    role: 'EVENT COORDINATOR',
    name: 'PRANEEL KULKARNI',
    secondary: '8660276040',
    phone: '8660276040',
  },
  {
    id: 'lead-keshav',
    category: 'leads',
    role: 'EVENT COORDINATOR',
    name: 'KESHAV SAVANTH S',
    secondary: '7892586349',
    phone: '7892586349',
  },
];

export const FACULTY_COMMITTEE: CrewSlot[] = Array.from({ length: 3 }, (_, index) => ({
  id: `faculty-slot-${index + 1}`,
  category: 'faculty',
  role: 'FACULTY COMMITTEE',
  name: '',
  secondary: '',
}));

export const TECH_AND_DEV: CrewSlot[] = [];
export const OPERATIONS_AND_MEDIA: CrewSlot[] = [];
