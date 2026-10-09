# eRefill Landing Page (React + Tailwind CSS + Framer Motion)

Modern, high-converting product landing page for **eRefill: A Smart Order and Inventory Manager for Water Refilling Stations**, redesigned with premium React UI components and high-impact animations while maintaining a clean, professional water-refilling brand identity.

---

## 🌊 Tech Stack & Architecture

- **React 19** + **Vite 6/8**: Blazing-fast development and optimized production bundling.
- **Tailwind CSS**: Custom eRefill design tokens (`#0437F2` Electric Blue, `#0329B8` Deep Navy, `#E8EFFF` Soft Ice Blue, `#F8FAFC` Background, `#14213D` Text Primary).
- **Framer Motion**: Smooth entrance choreography, spring-based interactive tab transitions, floating glassmorphic badges, and animated accordions.
- **Lucide React**: Clean, modern icons for water, containers, dispatches, GPS pins, and status indicators.
- **Canvas Confetti**: Celebratory aquatic droplet animation triggered on APK download.

---

## 📁 Directory Structure

```text
erefill_landingpage/
├── index.html                       # HTML5 template with Inter font, OpenGraph & favicon tags
├── package.json                     # Scripts & modern dependencies
├── vite.config.js                   # Vite React configuration
├── tailwind.config.js               # eRefill brand theme, shadows, and keyframes
├── postcss.config.js                # PostCSS pipeline
├── public/
│   ├── favicon.png                  # Web favicon
│   ├── assets/images/               # App icons and graphics
│   └── downloads/
│       └── erefill.apk              # Hosted Android APK (100.1 MB)
├── src/
│   ├── main.jsx                     # React entrypoint
│   ├── index.css                    # Tailwind base and scroll behavior
│   ├── App.jsx                      # Main landing page coordinator
│   ├── data/
│   │   └── config.js                # Centralized APK metadata, features, roles & FAQs
│   ├── utils/
│   │   └── confetti.js              # Water confetti celebration animation
│   └── components/
│       ├── Navbar.jsx               # Glassmorphic header with active pill indicator
│       ├── WaterBackground.jsx      # Ambient animated aquatic radial glow
│       ├── Hero.jsx                 # High-impact hero with interactive 3D phone mockup
│       ├── LiveStatsBar.jsx         # Trust metrics (SQLite Offline, 3 Roles, Android 8.0+)
│       ├── AboutSection.jsx         # "What is eRefill?" overview & audience cards
│       ├── FeaturesSection.jsx      # 9-feature scan-friendly Bento grid
│       ├── HowItWorksSection.jsx    # 3-step connected workflow (Order → Manage → Deliver)
│       ├── InteractiveAppShowcase.jsx # Interactive smartphone simulator with 6 real views
│       ├── UserRolesSection.jsx     # Station Owner, Customer, and Rider capability cards
│       ├── DownloadSection.jsx      # Dedicated APK download command center with specs
│       ├── FaqSection.jsx           # Animated FAQ accordion
│       ├── FinalCtaSection.jsx      # Concluding call to action
│       ├── Footer.jsx               # Clean footer with quick links & version tags
│       ├── InstallModal.jsx         # Step-by-step visual APK installation guide
│       └── DownloadToast.jsx        # Notification alert on download trigger
└── dist/                            # Production build output
```

---

## 🚀 Development & Build Scripts

### 1. Start Development Server
```bash
npm run dev
```
Launches the Vite dev server with hot module replacement (HMR) at `http://localhost:5173`.

### 2. Build for Production
```bash
npm run build
```
Compiles and tree-shakes the application into the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```
Runs a local server previewing the generated `dist/` files.

---

## 🔄 Updating the APK Version

To release an updated version of the eRefill APK:
1. Replace `public/downloads/erefill.apk` with the new APK build.
2. Update the version string, file size, or release date in [`src/data/config.js`](file:///c:/Users/jheraldkim/Documents/capstone/erefill_landingpage/src/data/config.js):
   ```javascript
   export const EREFILL_CONFIG = {
     version: "v1.1.0",
     fileSize: "102.4 MB",
     releaseDate: "October 15, 2026",
     downloadUrl: "/downloads/erefill.apk",
     ...
   };
   ```
3. Run `npm run build` to update the production bundle.
All download links, version tags, and specs across the entire site update automatically.
