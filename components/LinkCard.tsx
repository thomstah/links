'use client';

import { useState } from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, XIcon, BriefcaseIcon, GalleryIcon, HouseIcon, ScrollIcon } from './Icons';
import { colors, fontSizes } from '../lib/tokens';
import type { LinkItem } from '../data/links';

const ICON_MAP = {
  github:    GitHubIcon,
  linkedin:  LinkedInIcon,
  instagram: InstagramIcon,
  x:         XIcon,
  briefcase: BriefcaseIcon,
  gallery:   GalleryIcon,
  house:     HouseIcon,
  scroll:    ScrollIcon,
};

export function LinkCard({ link, blurred = false }: { link: LinkItem; blurred?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Icon = ICON_MAP[link.icon];

  return (
    <a
      href={blurred ? undefined : link.href}
      target={blurred ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block', pointerEvents: blurred ? 'none' : 'auto' }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display:         'flex',
          alignItems:      'center',
          gap:             '14px',
          padding:         '14px 16px',
          backgroundColor: hovered ? colors.surfaceHover : colors.surface,
          border:          `1px solid ${hovered ? '#3a3a3a' : colors.rule}`,
          transition:      'background-color 200ms ease, border-color 200ms ease',
          cursor:          blurred ? 'default' : 'pointer',
        }}
      >
        <div style={{ color: hovered ? colors.text : colors.textMuted, transition: 'color 200ms ease', flexShrink: 0 }}>
          <Icon size={18} color="currentColor" />
        </div>

        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily:    'var(--font-pixel)',
            fontSize:      fontSizes.label,
            letterSpacing: '0.12em',
            color:         colors.text,
          }}>
            {link.label}
          </p>
          {link.sublabel && (
            <p style={{
              fontFamily:    'var(--font-pixel)',
              fontSize:      fontSizes.sublabel,
              letterSpacing: '0.08em',
              color:         colors.textMuted,
              marginTop:     '3px',
            }}>
              {link.sublabel}
            </p>
          )}
        </div>

        <span style={{
          fontFamily: 'var(--font-pixel)',
          fontSize:   '14px',
          color:      hovered ? colors.text : colors.textMuted,
          transition: 'color 200ms ease',
        }}>
          →
        </span>
      </div>
    </a>
  );
}
