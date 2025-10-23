# Visual Design Guide - God's Gifts Charity Website

## Color Palette

### Primary Colors
```
Lavender Primary: #9b87f5 ████████
Lavender Light:   #c4b5fd ████████
Lavender Dark:    #7c3aed ████████
Accent (Amber):   #f59e0b ████████
Soft Grey:        #f5f5f7 ████████
```

### Neutral Colors
```
White:           #ffffff ████████
Dark Text:       #1f1f1f ████████
Grey 600:        #4b5563 ████████
Grey 400:        #9ca3af ████████
```

## Typography

### Font Family
- **Primary**: Inter (Google Font)
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Font Sizes
```
Hero Headline:    text-5xl to text-7xl (3rem - 4.5rem)
Section Titles:   text-4xl to text-5xl (2.25rem - 3rem)
Subsection:       text-2xl to text-3xl (1.5rem - 1.875rem)
Body Large:       text-xl (1.25rem)
Body Regular:     text-base (1rem)
Small Text:       text-sm (0.875rem)
```

## Layout Structure

```
┌─────────────────────────────────────────┐
│  HEADER (Sticky)                        │
│  [Logo]  Mission Impact Stories [Donate]│
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  HERO (Full Screen with Parallax)       │
│                                          │
│     Transforming Lives Through          │
│          Compassion                     │
│                                          │
│     Join us in our mission...           │
│                                          │
│   [Donate Now] [Learn More]            │
│            ↓ (scroll)                   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  MISSION SECTION                         │
│                                          │
│           Our Mission                   │
│     Belief statement text...            │
│                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │ Heart  │  │  Book  │  │ Globe  │    │
│  │Empower │  │Educate │  │ Global │    │
│  │Commun. │  │for All │  │ Impact │    │
│  └────────┘  └────────┘  └────────┘    │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  IMPACT STATISTICS                       │
│                                          │
│          Our Impact                     │
│     Achievement statement...            │
│                                          │
│  ┌────────┐┌────────┐┌────────┐┌──────┐│
│  │ 50,000+││   25+  ││  150+  ││2,000+││
│  │  Lives ││Country ││Project ││Volun.││
│  │Impacted││        ││        ││      ││
│  └────────┘└────────┘└────────┘└──────┘│
│                                          │
│  ┌──────────────────┐┌─────────────────┐│
│  │  Education       ││   Healthcare    ││
│  │  [Image]         ││   [Image]       ││
│  └──────────────────┘└─────────────────┘│
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  TESTIMONIALS                            │
│                                          │
│       Stories of Hope                   │
│     Hear from people touched...         │
│                                          │
│  ┌────────┐  ┌────────┐  ┌────────┐    │
│  │ Quote  │  │ Quote  │  │ Quote  │    │
│  │        │  │        │  │        │    │
│  │[Photo] │  │[Photo] │  │[Photo] │    │
│  │ Name   │  │ Name   │  │ Name   │    │
│  └────────┘  └────────┘  └────────┘    │
│                                          │
│  ┌──────────────────────────────────┐   │
│  │  "Alone we can do so little;     │   │
│  │   together we can do so much."   │   │
│  │         — Helen Keller            │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  DONATION CTA                            │
│  ┌──────────────────────────────────┐   │
│  │ Make a Difference Today          │   │
│  │ Your donation provides hope...   │   │
│  ├──────────────────────────────────┤   │
│  │ Choose an amount:                │   │
│  │ [$25] [$50] [$100] [$250] [$500] │   │
│  │                                   │   │
│  │ Or enter custom: [$ _________]   │   │
│  │                                   │   │
│  │ Your Impact:                     │   │
│  │ • $25 provides...                │   │
│  │ • $50 feeds...                   │   │
│  │                                   │   │
│  │    [Donate $50 Now]              │   │
│  │    🔒 Secure, encrypted          │   │
│  └──────────────────────────────────┘   │
│                                          │
│       Other Ways to Help                │
│  ┌─────────┐┌─────────┐┌─────────┐     │
│  │Volunteer││  Share  ││ Partner │     │
│  └─────────┘└─────────┘└─────────┘     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  FOOTER                                  │
│                                          │
│  God's Gifts Charity                    │
│  Description text...                    │
│  [f] [t] [i] [in]                       │
│                                          │
│  Quick Links    Contact                 │
│  • Mission      ✉ info@...              │
│  • Impact       ☎ +1 555...             │
│  • Stories      📍 123 Charity Lane     │
│  • Donate                               │
│                                          │
│  © 2024 God's Gifts Charity             │
│  Privacy | Terms | Reports              │
└─────────────────────────────────────────┘
```

## Component Breakdown

### 1. Header Component
**Features:**
- Transparent initially, white on scroll
- Text color changes: white → lavender
- Mobile hamburger menu
- Smooth scroll to sections
- Sticky positioning

**Breakpoints:**
- Mobile: Hamburger menu
- Desktop (md+): Full navigation

### 2. Hero Component
**Features:**
- Full viewport height (100vh)
- Parallax background (50% scroll speed)
- Dual gradient overlays
- Staggered animation delays (0.2s, 0.4s, 0.6s)
- Two CTA buttons
- Animated scroll indicator

**Image:**
- Unsplash: Community/helping hands
- Overlay: Black gradient + lavender tint

### 3. Mission Component
**Features:**
- Three equal-width cards
- Icon in gradient circle
- Hover shadow increase
- Icon scale on hover (1.1x)
- Decorative background blobs

**Cards:**
1. Heart icon → Empower Communities
2. Book icon → Education for All
3. Globe icon → Global Impact

### 4. Impact Component
**Features:**
- Four animated counters
- Counts up from 0 to target over 2 seconds
- Two large image cards
- Image scales on hover (1.1x)
- Background pattern overlay

**Statistics:**
- 50,000+ Lives Impacted
- 25+ Countries
- 150+ Active Projects
- 2,000+ Volunteers

### 5. Testimonials Component
**Features:**
- Three testimonial cards
- Quote icon at top
- Profile image with gradient border
- Featured quote card with gradient background
- Decorative background blobs

**Layout:**
- 3 columns on desktop
- Stack on mobile

### 6. Donation CTA Component
**Features:**
- Gradient header section
- Five preset amount buttons
- Custom amount input
- Impact bullet points
- "Other ways to help" cards
- Security badge

**Interaction:**
- Selected amount highlights
- Custom input overrides selection
- Form submission shows alert (placeholder)

### 7. Footer Component
**Features:**
- Dark gradient background
- Four column layout
- Social media icons
- Gradient logo text
- Icon hover color change → lavender

**Sections:**
- Brand + social
- Quick links
- Contact info
- Bottom bar with legal links

## Animation Details

### Scroll Animations
**Trigger:** Intersection Observer at 20% visibility

**Effects:**
1. **Fade In Up**
   - Starts: opacity 0, translateY(30px)
   - Ends: opacity 1, translateY(0)
   - Duration: 0.8s

2. **Slide In Left/Right**
   - Starts: opacity 0, translateX(±50px)
   - Ends: opacity 1, translateX(0)
   - Duration: 0.8s

3. **Scale In**
   - Starts: opacity 0, scale(0.95)
   - Ends: opacity 1, scale(1)
   - Duration: 0.8s

### Hover Effects
- **Buttons**: scale(1.05), shadow increase
- **Cards**: shadow increase (lg → 2xl)
- **Icons**: scale(1.1), color shift
- **Images**: scale(1.1) with overflow hidden

### Transitions
- All: duration-300 (0.3s)
- Smooth easing function
- Transform + opacity + shadow

## Spacing System (Tailwind)

```
Padding:
- Section: py-24 sm:py-32 (6rem - 8rem vertical)
- Container: px-6 sm:px-8 lg:px-12
- Cards: p-6 to p-8

Margins:
- Section titles: mb-6 to mb-16
- Elements: mb-4 to mb-8
- Grids: gap-6 to gap-12

Border Radius:
- Buttons: rounded-[0.625rem] (10px)
- Cards: rounded-2xl (16px)
- Large: rounded-3xl (24px)
```

## Shadow System

```
Buttons:
- Default: shadow-lg shadow-[#9b87f5]/30
- Hover: shadow-xl shadow-[#9b87f5]/40
- Donation: shadow-2xl shadow-[#9b87f5]/50

Cards:
- Default: shadow-lg
- Hover: shadow-2xl
```

## Responsive Breakpoints

```
sm:  640px  (Tablet portrait)
md:  768px  (Tablet landscape)
lg:  1024px (Desktop)
xl:  1280px (Large desktop)
2xl: 1536px (Extra large)
```

## Grid Layouts

```
Mission Cards:     md:grid-cols-3
Statistics:        grid-cols-2 lg:grid-cols-4
Impact Stories:    md:grid-cols-2
Testimonials:      md:grid-cols-3
Help Options:      sm:grid-cols-3
Footer:            md:grid-cols-4
```

---

This design achieves a perfect balance of:
- **Elegance**: Apple-inspired minimalism
- **Emotion**: Compelling imagery and stories
- **Functionality**: Clear CTAs and easy navigation
- **Performance**: Smooth animations without lag
- **Accessibility**: Semantic HTML and proper contrast
