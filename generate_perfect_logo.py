import math
import xml.etree.ElementTree as ET

def get_arc_svg_text(text, cx, cy, r, start_deg, end_deg, font_size, is_bottom=False):
    chars = list(text)
    n = len(chars)
    step = (end_deg - start_deg) / (n - 1) if n > 1 else 0
    lines = []
    for i, ch in enumerate(chars):
        if ch == ' ':
            continue
        angle = start_deg + i * step
        rad = math.radians(angle)
        x = cx + r * math.cos(rad)
        y = cy + r * math.sin(rad)
        rot = (angle - 90) if is_bottom else (angle + 90)
        lines.append(
            f'<text x="{x:.2f}" y="{y:.2f}" fill="#0d3570" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="{font_size}" text-anchor="middle" dominant-baseline="central" transform="rotate({rot:.2f}, {x:.2f}, {y:.2f})">{ch}</text>'
        )
    return "\n    ".join(lines)

top_text_svg = get_arc_svg_text("DANUBE INSTITUTE OF NATIONAL UNIVERSITY", 250, 250, 190, 202, 338, 20.5, False)
bot_text_svg = get_arc_svg_text("«ODESSA MARITIME ACADEMY»", 250, 250, 190, 142, 38, 23.5, True)

svg_body = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <clipPath id="innerGlobeClip">
      <circle cx="250" cy="250" r="148" />
    </clipPath>
  </defs>

  <!-- Outer Ring Base -->
  <circle cx="250" cy="250" r="245" fill="#ffffff" stroke="#0d3570" stroke-width="5" />
  
  <!-- Outer Rope / Braided Hatching Border -->
  <circle cx="250" cy="250" r="237" fill="none" stroke="#0d3570" stroke-width="3" stroke-dasharray="6,4" />
  <circle cx="250" cy="250" r="228" fill="none" stroke="#0d3570" stroke-width="1.8" />

  <!-- Circular Outer Typography (Precisely calculated coordinates, upright and straight!) -->
  <g id="topTypography">
    {top_text_svg}
  </g>
  <g id="bottomTypography">
    {bot_text_svg}
  </g>

  <!-- Inner Circle Border -->
  <circle cx="250" cy="250" r="150" fill="#ffffff" stroke="#0d3570" stroke-width="4" />

  <!-- Inner Marine Artwork (Clipped) -->
  <g clip-path="url(#innerGlobeClip)">
    <!-- Deep Blue Nautical Globe -->
    <circle cx="250" cy="250" r="148" fill="#1e81c9" />

    <!-- Globe Latitude Lines (Parallels) -->
    <g stroke="#ffffff" stroke-width="1.8" fill="none" opacity="0.85">
      <line x1="102" y1="165" x2="398" y2="165" />
      <line x1="102" y1="205" x2="398" y2="205" />
      <line x1="102" y1="245" x2="398" y2="245" stroke-width="2" />
      <line x1="102" y1="285" x2="398" y2="285" />
      <line x1="102" y1="325" x2="398" y2="325" />
      
      <!-- Globe Longitude Lines (Meridians) -->
      <line x1="250" y1="102" x2="250" y2="398" stroke-dasharray="4,3" />
      <ellipse cx="250" cy="250" rx="140" ry="148" />
      <ellipse cx="250" cy="250" rx="98" ry="148" />
      <ellipse cx="250" cy="250" rx="52" ry="148" />
    </g>

    <!-- Ukrainian Flag Band Across Middle -->
    <!-- Cyan Blue Top Half -->
    <rect x="100" y="238" width="300" height="36" fill="#52ade8" stroke="#0d3570" stroke-width="1.5" />
    <!-- Golden Yellow Bottom Half -->
    <rect x="100" y="274" width="300" height="36" fill="#fed727" stroke="#0d3570" stroke-width="1.5" />

    <!-- Dark Navy Anchor (Left Side over Ukrainian Band) -->
    <g transform="translate(158, 276)">
      <!-- Anchor Ring -->
      <circle cx="0" cy="-28" r="6" fill="none" stroke="#0d3570" stroke-width="3" />
      <!-- Anchor Crossbar -->
      <path d="M -16,-18 L 16,-18" stroke="#0d3570" stroke-width="4.5" stroke-linecap="round" />
      <!-- Anchor Vertical Shank -->
      <path d="M 0,-22 L 0,22" stroke="#0d3570" stroke-width="4.5" />
      <!-- Anchor Flukes -->
      <path d="M -20,8 C -20,28 20,28 20,8" fill="none" stroke="#0d3570" stroke-width="4.5" stroke-linecap="round" />
      <!-- Fluke Palms -->
      <polygon points="-21,6 -15,13 -25,12" fill="#0d3570" />
      <polygon points="21,6 15,13 25,12" fill="#0d3570" />
    </g>

    <!-- White Sailing Frigate (3-masted barque sailing forward) -->
    <g transform="translate(260, 140)">
      <!-- Jib Staysails at Bow (Pointing towards anchor) -->
      <polygon points="-45,128 -12,85 -12,126" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <polygon points="-68,131 -15,62 -15,124" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <polygon points="-92,135 -18,42 -18,122" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Foremast (Left Mast, 4 tiers of crisp white sails) -->
      <!-- Topgallant -->
      <polygon points="-12,18 40,24 36,46 -15,40" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Upper Topsail -->
      <polygon points="-15,49 42,55 38,77 -18,71" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Lower Topsail -->
      <polygon points="-18,81 44,87 40,109 -22,103" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Course Sail -->
      <polygon points="-22,113 46,119 41,143 -26,137" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Mainmast (Tall Center Mast, 4 tiers of crisp white sails) -->
      <!-- Topgallant -->
      <polygon points="50,8 98,14 94,36 46,30" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Upper Topsail -->
      <polygon points="46,39 100,45 96,69 42,63" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Lower Topsail -->
      <polygon points="42,73 102,79 97,105 38,99" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Main Course Sail -->
      <polygon points="38,109 104,115 99,141 33,135" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Mizzenmast (Right Mast, 3 tiers of crisp white sails) -->
      <!-- Topsail -->
      <polygon points="108,28 144,34 140,52 104,46" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Lower Topsail -->
      <polygon points="104,56 146,62 142,82 100,76" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Mizzen Course Sail -->
      <polygon points="100,86 148,92 143,114 96,108" fill="#ffffff" stroke="#0d3570" stroke-width="2.5" stroke-linejoin="round" />

      <!-- Ship Hull -->
      <!-- Golden Waterline Stripe -->
      <polygon points="-108,142 -35,160 120,160 152,142" fill="#fed727" stroke="#0d3570" stroke-width="2.5" />
      <!-- White Upper Hull -->
      <polygon points="-104,140 -32,158 116,158 148,140" fill="#ffffff" stroke="#0d3570" stroke-width="2" />
      <!-- Navy Lower Hull / Keel -->
      <path d="M -35,160 C -2,192 24,220 45,235 C 68,220 95,192 120,160 Z" fill="#ffffff" stroke="#0d3570" stroke-width="3" />
      <line x1="-33" y1="160" x2="118" y2="160" stroke="#0d3570" stroke-width="2" />
    </g>

    <!-- Open Navigation Book at Bottom Center (Academy Emblem) -->
    <g transform="translate(250, 396)">
      <path d="M -85,-10 C -45,-26 -12,-12 0,0 C 12,-12 45,-26 85,-10 L 80,14 C 42,-2 12,-2 0,8 C -12,-2 -42,-2 -80,14 Z" fill="#ffffff" stroke="#0d3570" stroke-width="3.2" stroke-linejoin="round" />
      <path d="M -78,-2 C -42,-16 -12,-4 0,6 C 12,-4 42,-16 78,-2" fill="none" stroke="#0d3570" stroke-width="2" />
      <line x1="0" y1="0" x2="0" y2="18" stroke="#0d3570" stroke-width="3.2" />
    </g>
  </g>

  <!-- Final Clean Inner Circle Ring Finish -->
  <circle cx="250" cy="250" r="150" fill="none" stroke="#0d3570" stroke-width="4.5" />
</svg>"""

try:
    tree = ET.fromstring(svg_body)
    print("VALID XML!")
    with open("public/dnu-oma-logo.svg", "w") as f:
        f.write(svg_body)
    print("SUCCESS: public/dnu-oma-logo.svg written!")
except Exception as e:
    print("ERROR:", e)
