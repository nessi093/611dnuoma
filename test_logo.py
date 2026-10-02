import xml.etree.ElementTree as ET

svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <!-- Top Arc for DANUBE INSTITUTE OF NATIONAL UNIVERSITY (clockwise from 205 deg to 335 deg) -->
    <!-- Center (250,250), radius 190. At 205 deg: x=78, y=170. At 335 deg: x=422, y=170 -->
    <path id="topTextPath" d="M 72,175 A 190,190 0 0,1 428,175" fill="none" />
    
    <!-- Bottom Arc for "ODESSA MARITIME ACADEMY" (clockwise from 25 deg to 155 deg) -->
    <!-- Drawn left-to-right along bottom so letters are upright! -->
    <!-- At 150 deg: x=85, y=345. At 30 deg: x=415, y=345. -->
    <path id="bottomTextPath" d="M 95,350 A 190,190 0 0,0 405,350" fill="none" />

    <clipPath id="globeClip">
      <circle cx="250" cy="250" r="148" />
    </clipPath>
    
    <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="1" dy="2" stdDeviation="1.5" flood-color="#0e387a" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Base White Disc -->
  <circle cx="250" cy="250" r="246" fill="#ffffff" stroke="#0e387a" stroke-width="5" />

  <!-- Outer Braided/Rope Ring -->
  <circle cx="250" cy="250" r="238" fill="none" stroke="#0e387a" stroke-width="3" stroke-dasharray="7,4.5" />
  <circle cx="250" cy="250" r="230" fill="none" stroke="#0e387a" stroke-width="1.8" />

  <!-- Outer Ring Typography: Exact wording from official emblem -->
  <!-- Top: DANUBE INSTITUTE OF NATIONAL UNIVERSITY -->
  <text fill="#0e387a" font-family="'Arial Black', 'Trebuchet MS', Arial, sans-serif" font-weight="900" font-size="21.5" letter-spacing="2.2">
    <textPath href="#topTextPath" startOffset="50%" text-anchor="middle">
      DANUBE INSTITUTE OF NATIONAL UNIVERSITY
    </textPath>
  </text>

  <!-- Bottom: «ODESSA MARITIME ACADEMY» -->
  <text fill="#0e387a" font-family="'Arial Black', 'Trebuchet MS', Arial, sans-serif" font-weight="900" font-size="24.5" letter-spacing="3.5">
    <textPath href="#bottomTextPath" startOffset="50%" text-anchor="middle">
      «ODESSA MARITIME ACADEMY»
    </textPath>
  </text>

  <!-- Inner Concentric Circle Rim -->
  <circle cx="250" cy="250" r="150" fill="#ffffff" stroke="#0e387a" stroke-width="4" />

  <!-- Inner Globe & Marine Composition (Clipped) -->
  <g clip-path="url(#globeClip)">
    <!-- Globe Ocean Blue Sphere -->
    <circle cx="250" cy="250" r="148" fill="#1b7fc3" />

    <!-- Globe Parallels (Latitude Lines) -->
    <g stroke="#ffffff" stroke-width="1.8" fill="none" opacity="0.8">
      <line x1="102" y1="170" x2="398" y2="170" />
      <line x1="102" y1="210" x2="398" y2="210" />
      <line x1="102" y1="250" x2="398" y2="250" stroke-width="2.2" />
      <line x1="102" y1="290" x2="398" y2="290" />
      <line x1="102" y1="330" x2="398" y2="330" />
      
      <!-- Globe Meridians (Longitude Lines) -->
      <line x1="250" y1="102" x2="250" y2="398" stroke-dasharray="4,3" />
      <ellipse cx="250" cy="250" rx="138" ry="148" />
      <ellipse cx="250" cy="250" rx="95" ry="148" />
      <ellipse cx="250" cy="250" rx="50" ry="148" />
    </g>

    <!-- Ukrainian Flag Band Across Lower-Middle -->
    <!-- Sky Blue Top Stripe -->
    <rect x="100" y="240" width="300" height="34" fill="#58aee8" stroke="#0e387a" stroke-width="1.5" />
    <!-- Golden Yellow Bottom Stripe -->
    <rect x="100" y="274" width="300" height="34" fill="#ffd426" stroke="#0e387a" stroke-width="1.5" />

    <!-- Navy Anchor on Left Side (Over Ukrainian Ribbon) -->
    <g transform="translate(155, 275)" filter="url(#subtleShadow)">
      <!-- Anchor Ring/Shackle -->
      <circle cx="0" cy="-28" r="6" fill="none" stroke="#0e387a" stroke-width="3" />
      <!-- Anchor Crossbar (Stock) -->
      <path d="M -15,-18 L 15,-18" stroke="#0e387a" stroke-width="4.5" stroke-linecap="round" />
      <!-- Anchor Shank (Vertical Stem) -->
      <path d="M 0,-22 L 0,22" stroke="#0e387a" stroke-width="4.5" />
      <!-- Anchor Arms & Curved Flukes -->
      <path d="M -20,8 C -20,28 20,28 20,8" fill="none" stroke="#0e387a" stroke-width="4.5" stroke-linecap="round" />
      <!-- Triangular Palm Tips -->
      <polygon points="-21,6 -15,13 -25,12" fill="#0e387a" />
      <polygon points="21,6 15,13 25,12" fill="#0e387a" />
    </g>

    <!-- Sailing Tall Ship (Exact barque frigate with billowing white canvas sails) -->
    <g transform="translate(262, 138)" filter="url(#subtleShadow)">
      <!-- Jib Staysails at Bow (Pointing West/Left towards anchor) -->
      <path d="M -48,132 L -12,85 L -10,130 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M -72,135 L -15,62 L -15,128 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M -98,140 L -20,40 L -20,126 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Fore-Mast Square Sails (Left Mast) -->
      <path d="M -12,18 L 42,24 C 36,46 36,46 38,48 L -16,42 C -13,26 -13,26 -12,18 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M -16,52 L 44,58 C 38,80 38,80 40,82 L -20,76 C -18,60 -18,60 -16,52 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M -20,86 L 46,92 C 40,116 40,116 42,118 L -24,112 C -22,96 -22,96 -20,86 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M -24,122 L 50,128 C 42,154 42,154 44,156 L -30,148 C -26,132 -26,132 -24,122 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Main-Mast Square Sails (Tall Center Mast) -->
      <path d="M 52,8 L 102,14 C 96,36 96,36 98,38 L 48,32 C 50,18 50,18 52,8 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M 48,42 L 104,48 C 98,72 98,72 100,74 L 44,68 C 46,52 46,52 48,42 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M 44,78 L 108,84 C 100,110 100,110 102,112 L 38,106 C 40,90 40,90 44,78 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M 38,116 L 112,122 C 102,150 102,150 104,152 L 32,146 C 34,128 34,128 38,116 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Mizzen-Mast Square Sails (Right Mast) -->
      <path d="M 112,28 L 148,34 C 142,52 142,52 144,54 L 108,48 C 110,36 110,36 112,28 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M 108,58 L 152,64 C 146,84 146,84 148,86 L 104,80 C 106,66 106,66 108,58 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />
      <path d="M 104,90 L 156,96 C 148,118 148,118 150,120 L 98,114 C 100,100 100,100 104,90 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Ship Hull Structure -->
      <!-- Golden Waterline Stripe -->
      <path d="M -115,146 L -40,165 L 125,165 L 160,146 Z" fill="#ffd426" stroke="#0e387a" stroke-width="2.5" />
      <!-- White Upper Hull & Deck -->
      <path d="M -110,144 L -35,162 L 120,162 L 155,144 Z" fill="#ffffff" stroke="#0e387a" stroke-width="2" />
      <!-- Lower Curved Navy Keel / Underbody -->
      <path d="M -40,165 C -5,200 25,230 48,245 C 72,230 100,200 125,165 Z" fill="#ffffff" stroke="#0e387a" stroke-width="3.5" />
      <line x1="-38" y1="165" x2="123" y2="165" stroke="#0e387a" stroke-width="2" />
    </g>

    <!-- Open Nautical Book / Charter at the Base (Academy Symbol) -->
    <g transform="translate(250, 396)" filter="url(#subtleShadow)">
      <!-- White Curved Pages of Open Book -->
      <path d="M -85,-10 C -45,-26 -12,-12 0,0 C 12,-12 45,-26 85,-10 L 80,14 C 42,-2 12,-2 0,8 C -12,-2 -42,-2 -80,14 Z" fill="#ffffff" stroke="#0e387a" stroke-width="3.2" stroke-linejoin="round" />
      <path d="M -78,-2 C -42,-16 -12,-4 0,6 C 12,-4 42,-16 78,-2" fill="none" stroke="#0e387a" stroke-width="2" />
      <line x1="0" y1="0" x2="0" y2="18" stroke="#0e387a" stroke-width="3.2" />
    </g>
  </g>

  <!-- Inner Rim Border Clean Finish -->
  <circle cx="250" cy="250" r="150" fill="none" stroke="#0e387a" stroke-width="4.5" />
</svg>"""

try:
    tree = ET.fromstring(svg_content)
    print("XML IS 100% VALID!")
    with open("public/dnu-oma-logo.svg", "w") as f:
        f.write(svg_content)
    print("Wrote public/dnu-oma-logo.svg successfully!")
except Exception as e:
    print("XML Error:", e)
