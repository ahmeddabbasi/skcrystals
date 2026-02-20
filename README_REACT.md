# SK Crystals React + TypeScript Website

Professional single-page website for SK Crystals (Pty) Ltd - Licensed Hazardous & Regulated Bulk Transport Infrastructure.

Built with **React 18**, **TypeScript**, and **Vite** for optimal performance and developer experience.

---

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **CSS3** - Clean, professional styling
- **ESLint** - Code quality and consistency

---

## 📁 Project Structure

```
skcrystals/
├── public/
│   └── logo.jpeg           # Company logo
├── src/
│   ├── components/
│   │   ├── Hero.tsx        # Hero section with logo
│   │   ├── About.tsx       # Company overview
│   │   ├── TripleCrown.tsx # Triple Crown System™
│   │   ├── Services.tsx    # Service offerings
│   │   ├── Compliance.tsx  # Compliance & governance
│   │   ├── Leadership.tsx  # Leadership team
│   │   └── Footer.tsx      # Contact information
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite configuration
```

---

## 🎨 Design Specifications

### Color Palette
- **Deep Black**: `#0B0B0B` (Hero & Footer backgrounds)
- **Matte Gold**: `#C9A227` (Buttons, accents)
- **Deep Blue**: `#0E6BA8` (Highlights)
- **White**: `#FFFFFF` (Content sections)

### Design Principles
- Component-based architecture
- Type-safe development with TypeScript
- Fully responsive design
- Clean, professional aesthetics
- SEO-optimized

---

## 🏃 Getting Started

### Prerequisites
- **Node.js** 18+ (or latest LTS)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

---

## 🚢 Deployment Options

### Option A: Netlify (Recommended - Free & Easy)

1. **Install Netlify CLI (optional):**
```bash
npm install -g netlify-cli
```

2. **Deploy:**
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Or drag-and-drop:**
- Go to [netlify.com](https://www.netlify.com/)
- Drag the `dist` folder
- Get instant live URL

**Build settings for Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option B: Vercel (Optimized for React)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

### Option C: GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Configure vite.config.ts** - add base path:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

4. **Deploy:**
```bash
npm run deploy
```

### Option D: Traditional Hosting

1. Build the project:
```bash
npm run build
```

2. Upload contents of `dist/` folder to your hosting provider

3. Configure your web server to serve `index.html` for all routes

---

## 🔧 Customization Guide

### Updating Content

All content is componentized for easy editing:

**Services** - Edit in [src/components/Services.tsx](src/components/Services.tsx):
```typescript
const services = [
  {
    title: 'Your Service Title',
    description: 'Your service description'
  },
  // Add more services
]
```

**Team Members** - Edit in [src/components/Leadership.tsx](src/components/Leadership.tsx):
```typescript
const executiveTeam = [
  { name: 'Name', role: 'Role' },
  // Add more team members
]
```

### Changing Colors

Update CSS variables in [src/index.css](src/index.css):
```css
:root {
  --deep-black: #0B0B0B;
  --matte-gold: #C9A227;
  --deep-blue: #0E6BA8;
  /* Modify as needed */
}
```

### Replacing Logo

Replace [public/logo.jpeg](public/logo.jpeg) with your new logo (same filename).

Supported formats: `.jpeg`, `.jpg`, `.png`, `.svg`, `.webp`

If using a different format, update [src/components/Hero.tsx](src/components/Hero.tsx):
```typescript
<img src="/logo.png" alt="SK Crystals Logo" />
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px  
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

---

## ✅ Features

- ✓ **React 18** with hooks and modern patterns
- ✓ **TypeScript** for type safety
- ✓ **Vite** for fast HMR and builds
- ✓ **Component-based** architecture
- ✓ **Fully responsive** mobile-first design
- ✓ **SEO-optimized** meta tags
- ✓ **Professional typography** (Inter font)
- ✓ **Clean code** with ESLint
- ✓ **Fast loading** - optimized production builds
- ✓ **Cross-browser** compatible

---

## 🔄 Migrating from HTML Version

The React version maintains 100% design parity with the original HTML version while adding:

✓ Component reusability  
✓ Type safety with TypeScript  
✓ Modern development workflow  
✓ Faster builds and HMR  
✓ Better code organization  
✓ Scalability for future features  

---

## 📧 Contact Integration

Email links are configured throughout the site. To add a contact form:

1. **Install a form library:**
```bash
npm install @formspree/react
# or
npm install react-hook-form
```

2. **Create a Contact component** in `src/components/Contact.tsx`

3. **Add to App.tsx** before the Footer

---

## 🧪 Development Tips

### Type Checking
```bash
npx tsc --noEmit
```

### Code Formatting
Consider adding Prettier:
```bash
npm install --save-dev prettier
```

Create `.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

### VS Code Extensions (Recommended)
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Vite

---

## 📊 Performance

Vite provides:
- Fast HMR (Hot Module Replacement)
- Optimized production builds
- Code splitting
- Tree shaking
- Asset optimization

Typical build size: **< 200KB** (gzipped)

---

## 🤝 Support & Maintenance

### Updating Dependencies
```bash
npm update
```

### Security Audits
```bash
npm audit
npm audit fix
```

---

## 📄 License

© SK Crystals (Pty) Ltd. All rights reserved.

---

## 🎯 Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Start development server (`npm run dev`)
3. ⬜ Test on multiple devices
4. ⬜ Build for production (`npm run build`)
5. ⬜ Deploy to hosting platform
6. ⬜ Connect custom domain
7. ⬜ Set up analytics (optional)
8. ⬜ Add contact form (optional)

---

**Website Version**: 2.0 (React + TypeScript)  
**Last Updated**: February 2026  
**Built with**: React 18 + TypeScript + Vite
