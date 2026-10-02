export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { number: '01', label: 'HOME', href: '#home' },
  { number: '02', label: 'ABOUT', href: '#about' },
  { number: '03', label: 'PRIZES', href: '#prizes' },
  { number: '04', label: 'ROUNDS', href: '#rounds' },
  { number: '05', label: 'RULES', href: '#rules' },
  { number: '06', label: 'WHY CODE RELAY?', href: '#why-relay' },
  { number: '07', label: 'FAQ', href: '#faq' },
  { number: '08', label: 'CONTACT', href: '#contact' },
];
