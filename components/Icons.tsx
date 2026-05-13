interface P { size?: number; color?: string }

export function GitHubIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      {/* ears */}
      <rect x="3" y="0" width="2" height="2"/>
      <rect x="11" y="0" width="2" height="2"/>
      {/* head outline */}
      <rect x="5" y="1" width="6" height="1"/>
      <rect x="3" y="2" width="2" height="1"/>
      <rect x="11" y="2" width="2" height="1"/>
      <rect x="2" y="3" width="1" height="6"/>
      <rect x="13" y="3" width="1" height="6"/>
      <rect x="3" y="9" width="2" height="1"/>
      <rect x="11" y="9" width="2" height="1"/>
      <rect x="5" y="10" width="6" height="1"/>
      {/* eyes */}
      <rect x="5" y="5" width="2" height="2"/>
      <rect x="9" y="5" width="2" height="2"/>
      {/* tentacle base */}
      <rect x="5" y="11" width="6" height="1"/>
      {/* tentacles */}
      <rect x="4" y="12" width="2" height="3"/>
      <rect x="7" y="12" width="2" height="3"/>
      <rect x="10" y="12" width="2" height="3"/>
    </svg>
  );
}

export function LinkedInIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      {/* box */}
      <rect x="1" y="1" width="14" height="1"/>
      <rect x="1" y="14" width="14" height="1"/>
      <rect x="1" y="1" width="1" height="14"/>
      <rect x="14" y="1" width="1" height="14"/>
      {/* "i" */}
      <rect x="4" y="4" width="1" height="1"/>
      <rect x="4" y="6" width="1" height="6"/>
      {/* "n" */}
      <rect x="7" y="6" width="1" height="6"/>
      <rect x="8" y="6" width="3" height="1"/>
      <rect x="10" y="6" width="1" height="1"/>
      <rect x="9" y="7" width="2" height="1"/>
      <rect x="10" y="8" width="1" height="4"/>
    </svg>
  );
}

export function InstagramIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      {/* outer rounded square */}
      <rect x="2" y="1" width="12" height="1"/>
      <rect x="1" y="2" width="14" height="1"/>
      <rect x="1" y="13" width="14" height="1"/>
      <rect x="2" y="14" width="12" height="1"/>
      <rect x="1" y="3" width="1" height="10"/>
      <rect x="14" y="3" width="1" height="10"/>
      {/* lens ring */}
      <rect x="6" y="5" width="4" height="1"/>
      <rect x="6" y="10" width="4" height="1"/>
      <rect x="5" y="6" width="1" height="4"/>
      <rect x="10" y="6" width="1" height="4"/>
      {/* lens inner dot */}
      <rect x="7" y="7" width="2" height="2"/>
      {/* flash dot top right */}
      <rect x="11" y="3" width="2" height="2"/>
    </svg>
  );
}

export function XIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      <rect x="1"  y="1"  width="2" height="2"/>
      <rect x="3"  y="3"  width="2" height="2"/>
      <rect x="5"  y="5"  width="2" height="2"/>
      <rect x="7"  y="7"  width="2" height="2"/>
      <rect x="9"  y="9"  width="2" height="2"/>
      <rect x="11" y="11" width="2" height="2"/>
      <rect x="13" y="13" width="2" height="2"/>
      <rect x="13" y="1"  width="2" height="2"/>
      <rect x="11" y="3"  width="2" height="2"/>
      <rect x="9"  y="5"  width="2" height="2"/>
      <rect x="5"  y="9"  width="2" height="2"/>
      <rect x="3"  y="11" width="2" height="2"/>
      <rect x="1"  y="13" width="2" height="2"/>
    </svg>
  );
}

export function BriefcaseIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="6" height="1"/>
      <rect x="5" y="2" width="1" height="3"/>
      <rect x="10" y="2" width="1" height="3"/>
      <rect x="7" y="3" width="2" height="3"/>
      <rect x="0" y="5" width="16" height="2"/>
      <rect x="0" y="13" width="16" height="2"/>
      <rect x="0" y="5" width="2" height="10"/>
      <rect x="14" y="5" width="2" height="10"/>
      <rect x="2" y="10" width="12" height="1"/>
    </svg>
  );
}

export function GalleryIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="14" height="2"/>
      <rect x="1" y="13" width="14" height="2"/>
      <rect x="1" y="1" width="2" height="14"/>
      <rect x="13" y="1" width="2" height="14"/>
      <rect x="10" y="4" width="2" height="2"/>
      <rect x="7" y="6" width="2" height="1"/>
      <rect x="6" y="7" width="4" height="1"/>
      <rect x="5" y="8" width="6" height="1"/>
      <rect x="3" y="9" width="10" height="4"/>
    </svg>
  );
}

export function HouseIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="1" width="3" height="2"/>
      <rect x="6" y="3" width="4" height="1"/>
      <rect x="5" y="4" width="6" height="1"/>
      <rect x="4" y="5" width="8" height="1"/>
      <rect x="3" y="6" width="10" height="1"/>
      <rect x="2" y="7" width="12" height="1"/>
      <rect x="3" y="8" width="2" height="7"/>
      <rect x="11" y="8" width="2" height="7"/>
      <rect x="3" y="14" width="10" height="1"/>
      <rect x="7" y="11" width="2" height="4"/>
    </svg>
  );
}

export function ScrollIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="16" height="2"/>
      <rect x="1" y="2" width="14" height="1"/>
      <rect x="2" y="3" width="1" height="10"/>
      <rect x="13" y="3" width="1" height="10"/>
      <rect x="4" y="5" width="8" height="1"/>
      <rect x="4" y="7" width="7" height="1"/>
      <rect x="4" y="9" width="5" height="1"/>
      <rect x="4" y="11" width="6" height="1"/>
      <rect x="1" y="13" width="14" height="1"/>
      <rect x="0" y="14" width="16" height="2"/>
    </svg>
  );
}

export function LockIcon({ size = 18, color = 'currentColor' }: P) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill={color} shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
      {/* shackle */}
      <rect x="5" y="1" width="6" height="1"/>
      <rect x="4" y="2" width="1" height="4"/>
      <rect x="11" y="2" width="1" height="4"/>
      <rect x="5" y="5" width="2" height="1"/>
      <rect x="9" y="5" width="2" height="1"/>
      {/* body */}
      <rect x="2" y="6" width="12" height="1"/>
      <rect x="2" y="14" width="12" height="1"/>
      <rect x="2" y="6" width="1" height="9"/>
      <rect x="13" y="6" width="1" height="9"/>
      {/* keyhole */}
      <rect x="7" y="9" width="2" height="2"/>
      <rect x="6" y="10" width="4" height="1"/>
      <rect x="7" y="11" width="2" height="2"/>
    </svg>
  );
}
