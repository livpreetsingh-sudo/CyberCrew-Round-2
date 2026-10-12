# Endeavour International School — Live Deployment & Google Availability Guide

To make this website live on **Google Search** and accessible worldwide across the web, follow any of these quick free hosting options:

---

### Option 1: Vercel (Instant 30-Second Live URL)
1. Install Vercel CLI (optional) or upload via web:
   ```bash
   npx vercel
   ```
2. Or go to [vercel.com](https://vercel.com) -> "Add New Project" -> Drag & drop this folder.
3. Your site gets a live HTTPS URL like `endeavour-school.vercel.app`.

---

### Option 2: GitHub Pages (Free Permanent Hosting)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Launch Endeavour International School Website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/endeavour-school.git
   git push -u origin main
   ```
2. In GitHub repository settings -> **Pages** -> Source: `main` branch `/ (root)`.
3. Your site is live at `https://<your-username>.github.io/endeavour-school/`.

---

### Option 3: Netlify (Drag & Drop in 10 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `scientific-calculator` folder.
3. Site is live instantly with free SSL certificate.

---

### How to Get Indexed on Google Search:
1. **Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Enter your deployed live domain (e.g. `https://endeavourschool.edu` or your vercel/github link).
   - Submit your sitemap: `https://your-domain.com/sitemap.xml`.
   - Click **"Request Indexing"** on the URL inspection tool.
2. **Schema.org Rich Snippets**:
   - The site already has pre-configured JSON-LD structured data for `EducationalOrganization` and `School`.
   - Test it instantly on [Google Rich Results Test](https://search.google.com/test/rich-results).
3. **Open Graph & Social Cards**:
   - Complete tags for WhatsApp, Twitter/X, and Facebook are embedded in `index.html`.
