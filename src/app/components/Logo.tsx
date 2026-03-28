export function Logo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* L */}
      <path 
        d="M10 10 L10 28 L16 28" 
        stroke="#1F2937" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* M */}
      <path 
        d="M19 28 L19 14 L24 22 L29 14 L29 28" 
        stroke="#1F2937" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* P */}
      <path 
        d="M33 28 L33 14 L38 14 Q40 14 40 17 Q40 20 38 20 L33 20" 
        stroke="#8B2626" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Decorative dot */}
      <circle cx="42" cy="26" r="2" fill="#8B2626"/>
    </svg>
  );
}
