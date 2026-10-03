export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { number: '01', label: 'HOME', href: '#home' },
  { number: '02', label: 'LEADERS', href: '#leadership' },
  { number: '03', label: 'ABOUT', href: '#about' },
  { number: '04', label: 'COUNTDOWN', href: '#event-countdown' },
  { number: '05', label: 'REWARDS', href: '#prizes' },
  { number: '06', label: 'ROUNDS', href: '#rounds' },
  { number: '07', label: 'RULES', href: '#rules' },
  { number: '08', label: 'WHY CODE RELAY?', href: '#why-relay' },
  { number: '09', label: 'FAQ', href: '#faq' },
  { number: '10', label: 'VENUE', href: '#venue' },
  { number: '11', label: 'CONTACT', href: '#contact' },
];

export const HEADER_NAV_ITEMS: NavItem[] = [
  { number: '01', label: 'HOME', href: '#home' },
  { number: '02', label: 'ABOUT', href: '#about' },
  { number: '03', label: 'PRIZES', href: '#prizes' },
  { number: '04', label: 'ROUNDS', href: '#rounds' },
  { number: '05', label: 'RULES', href: '#rules' },
  { number: '06', label: 'WHY CODE RELAY?', href: '#why-relay' },
  { number: '07', label: 'FAQ', href: '#faq' },
  { number: '08', label: 'CONTACT', href: '#contact' },
];
