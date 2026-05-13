'use client';

import { useState, useEffect, useRef } from 'react';
import { LinkCard } from './LinkCard';
import { LockIcon } from './Icons';
import { colors, fontSizes } from '../lib/tokens';
import { secretLinks, funFacts } from '../data/links';

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function SecretZone() {
  const [unlocked, setUnlocked]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [fact, setFact]           = useState(() => pickRandom(funFacts));
  const [input, setInput]         = useState('');
  const [shake, setShake]         = useState(false);
  const [wrong, setWrong]         = useState(false);
  const inputRef                  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem('links-unlocked') === '1') setUnlocked(true);
  }, []);

  function handleOpen() {
    setFact(pickRandom(funFacts));
    setInput('');
    setWrong(false);
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim().toLowerCase() === fact.answer.toLowerCase()) {
      sessionStorage.setItem('links-unlocked', '1');
      setUnlocked(true);
      setOpen(false);
    } else {
      setWrong(true);
      setShake(true);
      setInput('');
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setFact(pickRandom(funFacts)), 600);
    }
  }

  return (
    <div style={{ marginTop: '8px' }}>
      {/* divider */}
      <div style={{
        display:        'flex',
        alignItems:     'center',
        gap:            '10px',
        marginBottom:   '8px',
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: colors.rule }} />
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '8px', letterSpacing: '0.15em', color: colors.textMuted }}>
          SECRET
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: colors.rule }} />
      </div>

      {/* blurred cards + lock overlay */}
      <div
        style={{ position: 'relative', cursor: unlocked ? 'default' : 'pointer' }}
        onClick={unlocked ? undefined : handleOpen}
      >
        <div style={{ filter: unlocked ? 'none' : 'blur(6px)', transition: 'filter 400ms ease', pointerEvents: 'none' }}>
          {secretLinks.map((link, i) => (
            <div key={i} style={{ marginBottom: i < secretLinks.length - 1 ? '8px' : 0 }}>
              <LinkCard link={link} blurred={!unlocked} />
            </div>
          ))}
        </div>

        {!unlocked && (
          <div style={{
            position:       'absolute',
            inset:          0,
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            '8px',
          }}>
            <LockIcon size={22} color={colors.textMuted} />
            <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '9px', letterSpacing: '0.15em', color: colors.textMuted }}>
              CLICK TO UNLOCK
            </span>
          </div>
        )}
      </div>

      {/* quiz modal */}
      {open && !unlocked && (
        <div
          style={{
            position:        'fixed',
            inset:           0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex:          100,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            padding:         '24px',
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            style={{
              backgroundColor: colors.surface,
              border:          `1px solid ${colors.rule}`,
              padding:         '28px 24px',
              width:           '100%',
              maxWidth:        '360px',
              animation:       shake ? 'shake 0.4s ease' : 'none',
            }}
          >
            <p style={{
              fontFamily:    'var(--font-pixel)',
              fontSize:      fontSizes.label,
              letterSpacing: '0.1em',
              color:         colors.textMuted,
              marginBottom:  '6px',
            }}>
              PROVE YOU KNOW ME
            </p>
            <p style={{
              fontFamily:    'var(--font-pixel)',
              fontSize:      fontSizes.label,
              letterSpacing: '0.08em',
              color:         colors.text,
              marginBottom:  '20px',
              lineHeight:    1.6,
            }}>
              {fact.question}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => { setInput(e.target.value); setWrong(false); }}
                placeholder="your answer..."
                autoComplete="off"
                style={{
                  fontFamily:      'var(--font-pixel)',
                  fontSize:        fontSizes.label,
                  letterSpacing:   '0.08em',
                  backgroundColor: colors.background,
                  border:          `1px solid ${wrong ? '#ef4444' : colors.rule}`,
                  color:           colors.text,
                  padding:         '10px 12px',
                  outline:         'none',
                  width:           '100%',
                  transition:      'border-color 200ms ease',
                }}
              />
              {wrong && (
                <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '9px', letterSpacing: '0.1em', color: '#ef4444' }}>
                  WRONG. TRY AGAIN ↺
                </p>
              )}
              <button
                type="submit"
                style={{
                  fontFamily:      'var(--font-pixel)',
                  fontSize:        fontSizes.label,
                  letterSpacing:   '0.12em',
                  backgroundColor: colors.text,
                  color:           colors.background,
                  border:          'none',
                  padding:         '10px',
                  cursor:          'pointer',
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
