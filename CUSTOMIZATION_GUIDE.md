# Customization Guide - God's Gifts Charity Website

This guide shows you how to customize the website with your own content, colors, and images.

## Quick Start Customization

### 1. Update Site Title and Description

**File:** `src/app/layout.js`

```javascript
export const metadata = {
  title: "Your Charity Name - Your Tagline",
  description: "Your charity's mission statement here.",
};
```

### 2. Change Color Scheme

**File:** `src/app/globals.css`

Find the `:root` section and update colors:

```css
:root {
  --lavender-primary: #9b87f5;  /* Change to your primary color */
  --lavender-light: #c4b5fd;    /* Lighter shade */
  --lavender-dark: #7c3aed;     /* Darker shade */
  --accent: #f59e0b;            /* Accent color */
  --soft-grey: #f5f5f7;         /* Background grey */
}
```

**Color Picker Tool:** Use https://coolors.co/ to generate harmonious palettes.

### 3. Update Logo/Brand Name

**File:** `src/app/components/Header.js`

Replace "God's Gifts" with your charity name:

```javascript
<button
  onClick={() => scrollToSection('hero')}
  className={/* ... */}
>
  Your Charity Name  {/* Change this */}
</button>
```

To add a logo image instead:
1. Place your logo in `/public` folder (e.g., `/public/logo.png`)
2. Import Image from Next.js:
```javascript
import Image from 'next/image';
```
3. Replace the button content:
```javascript
<Image
  src="/logo.png"
  alt="Your Charity Name"
  width={120}
  height={40}
/>
```

### 4. Update Hero Section

**File:** `src/app/components/Hero.js`

**Change headline:**
```javascript
<h1 className="...">
  Your Main Headline
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4b5fd] to-[#9b87f5]">
    Your Subheadline
  </span>
</h1>
```

**Change description:**
```javascript
<p className="...">
  Your charity's mission statement and call to action goes here.
</p>
```

**Change background image:**
```javascript
style={{
  backgroundImage: 'url(YOUR_IMAGE_URL_HERE)',
  // Or use a local image: 'url(/your-image.jpg)'
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
```

### 5. Update Mission Cards

**File:** `src/app/components/Mission.js`

Update the intro text:
```javascript
<p className="...">
  At Your Charity, we believe... [your mission statement]
</p>
```

Update each card's content:
```javascript
<h3 className="...">Your Card Title</h3>
<p className="...">
  Your description of this mission pillar...
</p>
```

### 6. Update Impact Statistics

**File:** `src/app/components/Impact.js`

Change the counter targets (line ~45):
```javascript
const targets = {
  people: 50000,      // Change to your actual number
  countries: 25,      // Change to your actual number
  projects: 150,      // Change to your actual number
  volunteers: 2000,   // Change to your actual number
};
```

Change the labels:
```javascript
<div className="...">Lives Impacted</div>  {/* Change label */}
<div className="...">People reached worldwide</div>  {/* Change description */}
```

Update impact story cards:
```javascript
<img
  src="YOUR_IMAGE_URL"  {/* Change image */}
  alt="Your program name"
  className="..."
/>
<h3 className="...">Your Program Name</h3>
<p className="...">Description of impact...</p>
```

### 7. Update Testimonials

**File:** `src/app/components/Testimonials.js`

Replace the testimonials array (line ~30):
```javascript
const testimonials = [
  {
    quote: "Your testimonial text here...",
    author: "Person Name",
    role: "Their role or location",
    image: "URL_TO_PHOTO",
  },
  // Add more testimonials...
];
```

**Getting Profile Images:**
- Use actual photos from your charity (get permission!)
- Or use https://www.pexels.com/ for free stock photos
- Recommended size: 200x200px minimum

### 8. Update Donation Amounts

**File:** `src/app/components/DonationCTA.js`

Change preset amounts (line ~40):
```javascript
const donationAmounts = [25, 50, 100, 250, 500];  // Change amounts
```

Update impact descriptions:
```javascript
<li className="...">
  <strong>$25</strong> provides YOUR IMPACT HERE
</li>
```

### 9. Connect Payment Processor

**File:** `src/app/components/DonationCTA.js`

Replace the `handleDonateClick` function (line ~43):

**For Stripe:**
```javascript
const handleDonateClick = async () => {
  const amount = customAmount || selectedAmount;
  
  // Redirect to Stripe checkout
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amount * 100 }), // Stripe uses cents
  });
  
  const { url } = await response.json();
  window.location.href = url;
};
```

**You'll need to:**
1. Sign up for Stripe: https://stripe.com
2. Create API endpoint in `/src/app/api/create-checkout-session/route.js`
3. Add Stripe publishable key to environment variables

### 10. Update Footer Content

**File:** `src/app/components/Footer.js`

**Update description:**
```javascript
<p className="...">
  Your charity's tagline and description...
</p>
```

**Update contact info:**
```javascript
<span>your-email@charity.org</span>
<span>+1 (555) 123-4567</span>
<span>Your Address<br />City, State ZIP</span>
```

**Update social media links:**
```javascript
<a href="https://facebook.com/yourcharity" ...>
<a href="https://twitter.com/yourcharity" ...>
<a href="https://instagram.com/yourcharity" ...>
<a href="https://linkedin.com/company/yourcharity" ...>
```

## Advanced Customization

### Add a New Section

1. Create new component file: `src/app/components/YourSection.js`

```javascript
'use client';
import { useEffect, useRef, useState } from 'react';

export default function YourSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl font-bold transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Your Section Title
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Import in `src/app/page.js`:
```javascript
import YourSection from './components/YourSection';

// Add to the page:
<YourSection />
```

### Change Fonts

**File:** `src/app/layout.js`

Replace Inter with another Google Font:

```javascript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
  display: "swap",
});
```

Browse fonts: https://fonts.google.com/

### Adjust Animation Speed

**File:** `src/app/globals.css`

Change duration values:

```css
@keyframes fadeInUp {
  /* Animation stays the same */
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s ease-out forwards;  /* Change 0.8s to 1.2s */
}
```

### Change Border Radius

Find all instances of `rounded-[0.625rem]` and replace with:
- `rounded-lg` (0.5rem / 8px)
- `rounded-xl` (0.75rem / 12px)
- `rounded-2xl` (1rem / 16px)

### Add More Hover Effects

Add to any element:
```javascript
className="... hover:scale-105 hover:shadow-xl transition-all duration-300"
```

## Image Guidelines

### Recommended Image Sizes

- **Hero Background**: 2000x1200px (landscape)
- **Impact Cards**: 1200x800px (landscape)
- **Profile Photos**: 400x400px (square)
- **Logo**: 240x80px (landscape) or 80x80px (square)

### Image Optimization

1. Use Next.js Image component:
```javascript
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // For above-fold images
/>
```

2. Use WebP format for better compression
3. Compress with: https://tinypng.com/

### Where to Get Images

**Free Stock Photos:**
- https://unsplash.com/ (high quality, free)
- https://pexels.com/ (diverse, free)
- https://pixabay.com/ (free for commercial use)

**Best Practices:**
- Use real photos from your charity when possible
- Get written permission from people in photos
- Show diverse representation
- Focus on impact, not poverty

## SEO Customization

**File:** `src/app/layout.js`

Add more metadata:

```javascript
export const metadata = {
  title: "Your Charity Name",
  description: "Your description",
  keywords: "charity, nonprofit, donations, helping",
  openGraph: {
    title: "Your Charity Name",
    description: "Your description",
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Charity Name",
    description: "Your description",
    images: ['/twitter-image.jpg'],
  },
};
```

## Testing Your Changes

### Local Development
```bash
npm run dev
# Visit http://localhost:3000
```

### Test on Different Devices
- Chrome DevTools (F12) → Device toolbar
- Test on actual phone/tablet
- Check all breakpoints: mobile, tablet, desktop

### Test Animations
- Scroll slowly through entire page
- Check animations trigger correctly
- Verify no janky/laggy animations

### Test Forms
- Try different donation amounts
- Test mobile keyboard on input fields
- Verify button states change correctly

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Sign up at https://vercel.com
3. Import repository
4. Deploy (automatic)

### Deploy to Other Platforms
- **Netlify**: Similar to Vercel
- **AWS Amplify**: Good for AWS users
- **Digital Ocean**: Traditional hosting

## Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

Never commit `.env.local` to git!

## Need Help?

**Documentation:**
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind: https://tailwindcss.com/docs

**Community:**
- Stack Overflow: Tag questions with 'nextjs'
- Next.js Discord: https://discord.gg/nextjs
- GitHub Issues: For bugs in dependencies

---

**Remember:** Always test changes in development before deploying to production!
