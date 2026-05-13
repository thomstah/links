export interface LinkItem {
  label: string;
  sublabel?: string;
  href: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'youtube' | 'portfolio' | 'gallery' | 'hub' | 'secret';
}

export interface FunFact {
  question: string;
  answer: string;
}

export const publicLinks: LinkItem[] = [
  { label: 'GITHUB',    sublabel: '@thomstah',               href: 'https://github.com/thomstah',           icon: 'github'    },
  { label: 'LINKEDIN',  sublabel: 'Thommy Xay',              href: 'https://linkedin.com/in/thommyxay',     icon: 'linkedin'  },
  { label: 'INSTAGRAM', sublabel: '@thommy_xay',             href: 'https://instagram.com/thommy_xay',      icon: 'instagram' },
  { label: 'YOUTUBE',   sublabel: 'thomster',                href: 'https://www.youtube.com/@thomster8319', icon: 'youtube'   },
  { label: 'PORTFOLIO', sublabel: 'portfolio.thommyxay.com', href: 'https://portfolio.thommyxay.com',       icon: 'portfolio' },
  { label: 'GALLERY',   sublabel: 'gallery.thommyxay.com',   href: 'https://gallery.thommyxay.com',         icon: 'gallery'   },
  { label: 'HUB',       sublabel: 'thommyxay.com',           href: 'https://thommyxay.com',                 icon: 'hub'       },
];

export const secretLinks: LinkItem[] = [
  { label: '???', href: 'https://REPLACE_ME', icon: 'secret' },
  { label: '???', href: 'https://REPLACE_ME', icon: 'secret' },
];

export const funFacts: FunFact[] = [
  { question: 'How many baby teeth do I still have?', answer: '1'         },
  { question: 'What brand is my camera?',             answer: 'Panasonic' },
  { question: 'How old am I?',                        answer: '21'        },
];
