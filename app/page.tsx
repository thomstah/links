import { publicLinks } from '../data/links';
import { LinkCard } from '../components/LinkCard';
import { SecretZone } from '../components/SecretZone';
import { colors, fontSizes } from '../lib/tokens';

export default function Home() {
  return (
    <main style={{
      minHeight:      '100dvh',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '48px 24px',
    }}>
      <div style={{ width: '100%', maxWidth: '380px' }}>

        {/* header */}
        <header style={{ marginBottom: '36px', textAlign: 'center' }}>
          <h1 style={{
            fontFamily:    'var(--font-pixel)',
            fontSize:      fontSizes.heading,
            fontWeight:    700,
            color:         colors.text,
            letterSpacing: '0.08em',
          }}>
            THOMMY XAY
          </h1>
          <p style={{
            fontFamily:    'var(--font-pixel)',
            fontSize:      fontSizes.sublabel,
            color:         colors.textMuted,
            letterSpacing: '0.15em',
            marginTop:     '8px',
          }}>
            DEVELOPER · PHOTOGRAPHER
          </p>
        </header>

        {/* public links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
          {publicLinks.map((link) => (
            <LinkCard key={link.label} link={link} />
          ))}
        </div>

        {/* secret zone */}
        <SecretZone />

      </div>
    </main>
  );
}
