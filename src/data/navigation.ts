export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { number: '01', label: 'HOME', href: '#home' },
  { number: '02', label: 'LEADERS', href: '#leadership' },
  { number: '03', label: 'ABOUT', href: '#about' },
  { number: '04', label: 'WHY CODE RELAY?', href: '#why-relay' },
  { number: '05', label: 'COUNTDOWN', href: '#event-countdown' },
  { number: '06', label: 'REWARDS', href: '#prizes' },
  { number: '07', label: 'ROUNDS', href: '#rounds' },
  { number: '08', label: 'RULES', href: '#rules' },
  { number: '09', label: 'FAQ', href: '#faq' },
  { number: '10', label: 'VENUE', href: '#venue' },
  { number: '11', label: 'CONTACT', href: '#contact' },
];
