export interface LinkItem {
  label: string;
  sublabel?: string;
  href: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'x' | 'briefcase' | 'gallery' | 'house' | 'scroll';
}

export interface FunFact {
  question: string;
  answer: string;
}

export const publicLinks: LinkItem[] = [
  { label: 'GITHUB',    sublabel: '@thomstah',              href: 'https://github.com/thomstah',             icon: 'github'    },
  { label: 'LINKEDIN',  sublabel: 'Thommy Xay',             href: 'https://linkedin.com/in/YOURHANDLE',      icon: 'linkedin'  },
  { label: 'INSTAGRAM', sublabel: '@YOURHANDLE',            href: 'https://instagram.com/YOURHANDLE',        icon: 'instagram' },
  { label: 'PORTFOLIO', sublabel: 'portfolio.thommyxay.com', href: 'https://portfolio.thommyxay.com',        icon: 'briefcase' },
  { label: 'GALLERY',   sublabel: 'gallery.thommyxay.com',  href: 'https://gallery.thommyxay.com',           icon: 'gallery'   },
  { label: 'HUB',       sublabel: 'thommyxay.com',          href: 'https://thommyxay.com',                   icon: 'house'     },
];

export const secretLinks: LinkItem[] = [
  { label: '???', href: 'https://REPLACE_ME', icon: 'scroll' },
  { label: '???', href: 'https://REPLACE_ME', icon: 'scroll' },
];

// Fill in your own questions + answers (answers are case-insensitive)
export const funFacts: FunFact[] = [
  { question: 'What country is my family from?',     answer: 'laos'  },
  { question: 'What is my GitHub username?',         answer: 'thomstah' },
  { question: 'What city did I grow up in?',         answer: 'REPLACE_ME' },
];
