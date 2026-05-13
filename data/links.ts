export interface LinkItem {
  label: string;
  sublabel?: string;
  href: string;
  icon: 'github' | 'linkedin' | 'instagram' | 'youtube' | 'tiktok' | 'portfolio' | 'gallery' | 'hub' | 'spotify' | 'roblox' | 'steam';
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
  { label: 'SPOTIFY', href: 'https://open.spotify.com/user/ilaos_?si=f031d270988a4a8f', icon: 'spotify' },
  { label: 'ROBLOX',  href: 'https://www.roblox.com/users/1731783985/profile',          icon: 'roblox'  },
  { label: 'STEAM',   href: 'https://steamcommunity.com/profiles/76561199228009953/',    icon: 'steam'   },
  { label: 'TIKTOK',  href: 'https://www.tiktok.com/@thomzillaster',                    icon: 'tiktok'  }
];

export const funFacts: FunFact[] = [
  { question: 'How many baby teeth do I still have?', answer: '1'         },
  { question: 'What brand is my camera?',             answer: 'Panasonic' },
  { question: 'What day of the month is my birthday?', answer: '17'        },
  { question: 'Who is my favorite artist?',            answer: 'Drake'    },

];
