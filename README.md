# SK Crystals Website

Professional single-page website for SK Crystals (Pty) Ltd - Licensed Hazardous & Regulated Bulk Transport Infrastructure.

## 🎨 Design Specifications

### Color Palette
- **Deep Black**: `#0B0B0B` (Hero & Footer backgrounds)
- **Matte Gold**: `#C9A227` (Buttons, accents, dividers)
- **Deep Blue**: `#0E6BA8` (Minimal highlights)
- **White**: `#FFFFFF` (Content sections)

### Design Principles
- Clean, professional layout
- No gradients or shiny effects
- Matte, structured aesthetic
- Corporate with controlled authority
- Mobile-responsive design

## 📁 Files

- `index.html` - Main website HTML structure
- `styles.css` - Complete styling and responsive design

## 🚀 Quick Start

### Option 1: Open Locally
1. Double-click `index.html` to open in your default browser
2. The website will load immediately (no server required)

### Option 2: Local Development Server
If you want to test with a local server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 📤 Deployment Options

### Option A: Netlify (Recommended - Free & Easy)
1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for free account
3. Drag and drop the `skcrystals` folder onto Netlify
4. Get instant live URL (e.g., `skcrystals.netlify.app`)
5. Optional: Connect custom domain

### Option B: GitHub Pages (Free)
1. Create GitHub repository
2. Upload `index.html` and `styles.css`
3. Enable GitHub Pages in repository settings
4. Access at `username.github.io/repository-name`

### Option C: Traditional Web Hosting
1. Purchase hosting from provider (e.g., HostGator, Bluehost, SiteGround)
2. Upload files via FTP/cPanel File Manager
3. Connect domain: `www.skcrystals.co.za`

## ✏️ Customization

### Adding a Logo Image
Replace the text logo in `index.html` (line 19-21):
```html
<!-- Current -->
<div class="logo">
    <h1>SK CRYSTALS</h1>
</div>

<!-- Replace with -->
<div class="logo">
    <img src="logo.png" alt="SK Crystals Logo">
</div>
```

Add this CSS to `styles.css`:
```css
.logo img {
    max-width: 250px;
    height: auto;
    margin-bottom: 3rem;
}
```

### Updating Contact Information
Edit the footer section in `index.html` (lines 157-175)

### Modifying Colors
Update CSS variables in `styles.css` (lines 25-32)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✅ Features

- ✓ Fully responsive mobile-first design
- ✓ Smooth scroll navigation
- ✓ Semantic HTML5 structure
- ✓ SEO-optimized meta tags
- ✓ Professional typography (Inter font family)
- ✓ Accessible markup
- ✓ Fast loading (no heavy dependencies)
- ✓ Cross-browser compatible

## 📧 Contact Integration

The "Schedule a Consultation" buttons link to email (`ava@skcrystals.co.za`).

To add a contact form instead:
1. Use a service like Formspree, Netlify Forms, or Google Forms
2. Replace email links with form submission endpoint

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Sections

1. **Hero** - Black background with headline and CTA
2. **About** - Company overview and B-BBEE status
3. **Triple Crown System™** - Core operational framework
4. **Services** - Three main service offerings
5. **Compliance** - ISO certifications and governance
6. **Leadership** - Executive team information
7. **Footer** - Contact details and CTA

## 🎯 Next Steps

1. Add company logo image (if available)
2. Test on multiple devices
3. Deploy to hosting platform
4. Connect custom domain
5. Set up analytics (Google Analytics, etc.)
6. Consider adding contact form
7. Implement SSL certificate for HTTPS

## 📄 License

© SK Crystals (Pty) Ltd. All rights reserved.

---

**Website Version**: 1.0  
**Last Updated**: February 2026  
**Maintained by**: SK Crystals Marketing Team
