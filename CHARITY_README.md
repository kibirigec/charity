# God's Gifts Charity Website

A modern, elegant charity website built with Next.js, React, and Tailwind CSS featuring smooth animations, parallax effects, and an Apple-inspired design aesthetic.

## 🎨 Design Features

### Visual Design
- **Clean, Apple-like aesthetic**: Generous white space, refined typography, minimal visual clutter
- **Lavender color theme**: Primary lavender (#9b87f5) with soft greys, white, and amber accent (#f59e0b)
- **Subtle gradients**: Smooth color transitions throughout the design
- **Responsive layout**: Optimized for desktop, tablet, and mobile devices

### Interactive Elements
- **Parallax hero**: Hero section background moves at 50% scroll speed
- **Scroll animations**: Sections fade and slide into view using Intersection Observer API
- **Animated counters**: Impact statistics count up when scrolled into view
- **Smooth hover effects**: Buttons and cards transform smoothly on interaction
- **Sticky header**: Navigation bar adapts appearance on scroll

### Key Sections
1. **Hero Section**: Full-width image with compelling headline and prominent "Donate Now" CTA
2. **Mission**: Three-column grid showcasing core values with icon cards
3. **Impact Statistics**: Animated counters showing reach and effectiveness
4. **Testimonials**: Personal stories from beneficiaries and volunteers
5. **Donation CTA**: Interactive donation form with preset amounts and custom input
6. **Footer**: Comprehensive links, contact info, and social media

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd charity
```

2. Install dependencies (already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
charity/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Header.js          # Sticky navigation with scroll effects
│       │   ├── Hero.js            # Parallax hero section
│       │   ├── Mission.js         # Mission statement with cards
│       │   ├── Impact.js          # Animated statistics
│       │   ├── Testimonials.js    # User testimonials
│       │   ├── DonationCTA.js     # Donation form section
│       │   └── Footer.js          # Site footer
│       ├── globals.css            # Global styles & animations
│       ├── layout.js              # Root layout with metadata
│       └── page.js                # Main homepage
├── public/                        # Static assets
├── package.json                   # Dependencies
└── next.config.mjs               # Next.js configuration
```

## 🎯 Key Features

### 1. Prominent Donation CTAs
- Hero section: Primary CTA button above the fold
- Sticky header: "Donate Now" button always visible
- Dedicated donation section: Full interactive donation form
- Multiple CTA placements following best practices for charity websites

### 2. Scroll-Based Animations
All sections use Intersection Observer to trigger animations when scrolled into view:
- Fade-in effects
- Slide-in from left/right
- Scale animations
- Staggered delays for sequential appearance

### 3. Custom Animations
Defined in `globals.css`:
- `fadeInUp`: Fade in while moving up
- `fadeIn`: Simple opacity transition
- `slideInLeft`: Slide from left with fade
- `slideInRight`: Slide from right with fade
- `scaleIn`: Scale up with fade

### 4. Responsive Design
- Mobile-first approach using Tailwind CSS
- Hamburger menu for mobile navigation
- Flexible grid layouts that adapt to screen size
- Optimized images from Unsplash (placeholder images)

### 5. Performance Optimizations
- Next.js automatic code splitting
- React Server Components for faster initial load
- Optimized fonts (Inter font family)
- Client-side state management only where needed

## 🎨 Color Palette

```css
Primary Lavender:   #9b87f5
Light Lavender:     #c4b5fd
Dark Lavender:      #7c3aed
Accent (Amber):     #f59e0b
Soft Grey:          #f5f5f7
White:              #ffffff
Dark Text:          #1f1f1f
```

## 🖼️ Images Used

All images are sourced from Unsplash (free high-quality stock photos):
- Hero: Community support image
- Impact section: Education and healthcare programs
- Testimonials: Portrait photos

**Note**: Replace these placeholder images with your own charity's photography for production.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **Next.js 16.0.0**: React framework with App Router
- **React 19.2.0**: UI library
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features

## 📝 Customization Guide

### Changing Colors
Edit `src/app/globals.css`:
```css
:root {
  --lavender-primary: #9b87f5;  /* Change to your color */
  --accent: #f59e0b;            /* Change accent color */
}
```

### Updating Content
1. **Hero Section**: Edit `src/app/components/Hero.js`
2. **Mission Cards**: Modify array in `src/app/components/Mission.js`
3. **Statistics**: Update counter targets in `src/app/components/Impact.js`
4. **Testimonials**: Edit testimonials array in `src/app/components/Testimonials.js`

### Adding Your Logo
1. Place logo image in `/public` folder
2. Update Header component to use your logo image

### Connecting Donation Form
The donation form currently shows an alert. To integrate with a payment processor:
1. Sign up for Stripe, PayPal, or similar service
2. Update `handleDonateClick` function in `src/app/components/DonationCTA.js`
3. Add API route for processing payments

## 🔒 Security Notes

For production deployment:
- Implement proper payment gateway integration
- Add HTTPS/SSL certificate
- Set up CSRF protection for forms
- Implement rate limiting on donation endpoints
- Add input validation and sanitization

## 📄 License

This project is provided as-is for God's Gifts Charity. Customize and deploy as needed.

## 🤝 Contributing

To improve the website:
1. Test all animations across devices
2. Optimize images for web delivery
3. Add real charity content and photos
4. Integrate with donation payment system
5. Set up analytics tracking (Google Analytics, etc.)

## 📞 Support

For technical questions about this implementation, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

Built with ❤️ for God's Gifts Charity
