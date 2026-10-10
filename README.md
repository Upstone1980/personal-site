# Chris Upstone — Personal Website

A premium executive reputation site for a board-ready operator-investor in Australian telecommunications, ICT, infrastructure, and resources.

---

## File Structure

```
upstone-site/
├── index.html          → Homepage
├── about.html          → About / Biography
├── track-record.html   → Track Record (two-lane layout)
├── board.html          → Board & Governance
├── thinking.html       → Articles & Thinking
├── contact.html        → Contact page
├── base.css            → CSS reset (do not edit)
├── style.css           → All design and layout styles
├── components.js       → Shared header, footer, nav, settings
├── assets/
│   └── images/
│       ├── hero-infrastructure.png   → Homepage hero background
│       ├── about-portrait.png        → About page portrait
│       ├── thinking-datacentre.png   → Article: AI data centres
│       ├── thinking-privatenetworks.png → Article: Private networks
│       └── thinking-energytransition.png → Article: Energy transition
└── README.md           → This file
```

---

## How to Edit Content

All content is stored directly in each HTML file and in `components.js`.
Look for `<!-- EDIT ... BELOW -->` comment markers — they show exactly where to change things.

---

### 1. Change Your Name, Email, LinkedIn, or Location

Open `components.js` and find the `SITE` object near the top:

```javascript
const SITE = {
  name: "Chris Upstone",
  initials: "CU",
  tagline: "Operator-Investor",
  email: "chris.upstone@iinet.net.au",
  linkedin: "https://www.linkedin.com/in/chrisupstone",
  location: "Perth, Western Australia",
  copyright: "Chris Upstone. All rights reserved."
};
```

Edit any of these values. Changes apply to all pages automatically (header, footer, contact).

Also update the email address on the `contact.html` page itself in the `<a href="mailto:...">` tag.

---

### 2. Edit Homepage Copy

Open `index.html` and find the clearly marked sections:

- **Hero headline** → look for `<!-- EDIT MAIN HEADLINE BELOW -->`
- **Sub-copy paragraph** → look for `<!-- EDIT SUB-COPY BELOW -->`
- **Proof points** → look for `<!-- EDIT PROOF POINTS BELOW -->`
- **Board intent statement** → look for `<!-- EDIT BOARD INTENT STATEMENT BELOW -->`
- **Current roles** → look for `<!-- EDIT CURRENT ROLES BELOW -->`
- **Sector cards** → look for `<!-- EDIT SECTORS BELOW -->`

Each section has a comment directly above the content you need to change.

---

### 3. Edit Your Biography

Open `about.html` and find `<!-- EDIT BIOGRAPHY TEXT BELOW -->`.

The biography is in several `<p>` paragraph tags. Edit each one directly. Keep them in first person.

To add a new career role, copy one `<!-- EDIT CAREER ITEMS BELOW -->` block and paste it above or below an existing one. Update the years, company name, role title, and description.

---

### 4. Add a New Case Study (Track Record)

Open `track-record.html`. Find the `<!-- EDIT CASE STUDY 1 BELOW -->` section.

Copy an entire `<div class="case-card">` block and paste it below the last case card. Update:
- The title in `<h3 class="case-card__title">`
- The tags in `<span class="case-tag">` elements
- The four rows: **Context**, **My role**, **What changed**, **Board-relevant lessons**

To add an investing theme, find the investing lane and copy an `<div class="invest-theme">` block.

---

### 5. Add a New Article to the Thinking Page

Open `thinking.html`. Find the articles grid section.

Copy a complete `<article class="article-card">` block and paste it at the top of the grid (so newest articles appear first).

Update these fields inside your new block:
- `article-card__category` → e.g. "Digital Infrastructure"
- `article-card__title` → Your article headline
- `article-card__excerpt` → 2–3 sentence summary
- `article-card__date` → e.g. "June 2025"
- The `<img src="...">` to point to your article image
- Remove the `article-card--upcoming` class and the `<span class="upcoming-badge">` when the article is live

**To add a full article page:**
1. Create a new file, e.g. `articles/ai-data-centres.html`
2. Wrap the `.article-card` in: `<a href="articles/ai-data-centres.html" class="article-card">...</a>`

**To add an image for your article:**
1. Add the image file to `assets/images/`
2. Update the `src` attribute on the `<img>` tag inside your article card

---

### 6. Change Contact Details

Three places to update:

1. `components.js` → update the `SITE.email` and `SITE.linkedin` values
2. `contact.html` → update the `href="mailto:..."` and `href="https://..."` links
3. `contact.html` → update the visible email text in the `contact-channel__value` div

---

### 7. Change Navigation Links

Open `components.js` and find the `navLinks` array:

```javascript
const navLinks = [
  { label: "Home",             href: "index.html" },
  { label: "About",            href: "about.html" },
  ...
];
```

Edit labels or hrefs. Add or remove objects from the array to add or remove pages.

---

### 8. Change the Board & Governance Skills/Credentials

Open `board.html` and find:
- `<!-- EDIT THIS STATEMENT -->` for the board intent quote
- `<!-- EDIT CURRENT NED ROLES BELOW -->` for NED experience
- `<!-- EDIT CREDENTIALS BELOW -->` for AICD and other qualifications
- `<!-- EDIT SKILL CARDS BELOW -->` for the board competency cards
- `<!-- EDIT INDUSTRY PILLS BELOW -->` for the sector bubbles

---

## How to Deploy Updates

### Option A: Vercel (Recommended — Free, easiest)

1. Create a free account at [vercel.com](https://vercel.com)
2. Upload the entire `upstone-site/` folder
3. Vercel serves it instantly as a static site
4. Future updates: re-upload (or use Git auto-deploy for one-click updates)

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com) and create a free account
2. Drag and drop the `upstone-site/` folder onto the Netlify deploy panel
3. Done — live in seconds at a `xxx.netlify.app` URL
4. Add a custom domain in Netlify settings

### Option C: GitHub Pages

1. Create a GitHub account and a new repository
2. Upload all files in `upstone-site/` to the repository
3. Go to Settings → Pages → Source: Deploy from main branch
4. Site goes live at `yourusername.github.io/repo-name`

### After Any Edit:

If hosting on Netlify or Vercel via drag-and-drop: simply drag the updated folder again. It will overwrite the previous version.

If hosting via GitHub: commit and push your changes. Auto-deployment handles the rest.

---

## Adding a Custom Domain

On any of the above platforms, you can add your own domain (e.g. `chrisupstone.me`) through their domain settings. They will give you DNS instructions for your domain registrar. Typical setup takes under 30 minutes.

---

## SEO Notes

Each page has:
- A unique `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`)
- Structured data (JSON-LD Person schema on homepage)

To update SEO metadata for any page, edit the `<title>` and `<meta name="description">` tags in the `<head>` section of that page's HTML file.

---

## Questions

This site is entirely static HTML, CSS, and JavaScript. No server, no database, no login system. Every element is directly editable in a plain text editor. If you get stuck, the `<!-- EDIT ... BELOW -->` comments in each file are your guide.
