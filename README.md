# Pharma Medico Website — GitHub Pages Deployment Guide

## 📁 Project Structure

```
pharma-medico/
│
├── index.html          ← Main website file
├── style.css           ← All styles
├── script.js           ← All JavaScript
├── README.md           ← This file
│
└── assets/             ← ⚠️ CREATE THIS FOLDER
    ├── logo.png        ← Pharma Medico logo (PHARMA_MEDICO_LOGO.png)
    └── owner.jpg       ← Biltu Prasad Sah photo (cropped)
```

---

## 🖼️ Step 1 — Prepare Your Assets

Before deploying, create an `assets/` folder and add:

| File | Source | Notes |
|------|--------|-------|
| `assets/logo.png` | Your `PHARMA_MEDICO_LOGO.png` file | Rename it to `logo.png` |
| `assets/owner.jpg` | Biltu Prasad Sah's photo | Crop to focus on face/upper body |

> **Tip:** Keep logo.png under 200KB and owner.jpg under 500KB for fast loading.

---

## 🚀 Step 2 — Deploy to GitHub Pages

### Option A: Upload via GitHub Website (No coding needed)

1. Go to [https://github.com](https://github.com) and **sign in** (or create a free account)

2. Click the **+** button → **New repository**

3. Name it: `pharma-medico` (or `pharmamedico.github.io` for a cleaner URL)

4. Set it to **Public** → Click **Create repository**

5. Click **"uploading an existing file"** link on the next page

6. **Drag and drop** ALL files:
   - `index.html`
   - `style.css`
   - `script.js`
   - The entire `assets/` folder

7. Click **Commit changes**

8. Go to **Settings** → **Pages** (in the left sidebar)

9. Under **Source**, select **Deploy from a branch**

10. Select **main** branch → **/ (root)** folder → Click **Save**

11. Wait 1–2 minutes → Your site will be live at:
    `https://YOUR_USERNAME.github.io/pharma-medico/`

---

### Option B: Using Git (For developers)

```bash
# 1. Initialize git in your project folder
cd pharma-medico
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit — Pharma Medico website"

# 4. Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/pharma-medico.git

# 5. Push to GitHub
git branch -M main
git push -u origin main

# 6. Enable GitHub Pages in repository Settings > Pages
```

---

## 🌐 Step 3 — Custom Domain (Optional)

If you have a domain like `pharmamedico.com.np`:

1. In your GitHub repo, go to **Settings → Pages**
2. Enter your domain in the **Custom domain** field
3. Add these DNS records with your domain provider:

```
Type: A     Name: @     Value: 185.199.108.153
Type: A     Name: @     Value: 185.199.109.153
Type: A     Name: @     Value: 185.199.110.153
Type: A     Name: @     Value: 185.199.111.153
Type: CNAME Name: www   Value: YOUR_USERNAME.github.io
```

4. Check **Enforce HTTPS**
5. Wait up to 24 hours for DNS to propagate

---

## 📸 Step 4 — Add Gallery Photos Later

When you have real photos ready:
1. Add them to the `assets/` folder (e.g., `assets/gallery-office-1.jpg`)
2. In `index.html`, replace the placeholder `<div class="gallery-ph">` blocks with:

```html
<div class="gallery-item" data-cat="office" data-aos="fade-up">
  <img src="assets/gallery-office-1.jpg" alt="Pharma Medico Office" style="width:100%;height:100%;object-fit:cover;"/>
  <div class="gallery-overlay"><i class="fa-solid fa-expand"></i> Pharma Medico Office</div>
</div>
```

---

## 🗺️ Step 5 — Add Google Maps Embed

Replace the map placeholder in `index.html`:

```html
<!-- Find this in index.html and replace: -->
<div class="map-placeholder">...</div>

<!-- Replace with: -->
<div style="border-radius:14px;overflow:hidden;height:200px;">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
    width="100%" height="200" style="border:0;" allowfullscreen=""
    loading="lazy">
  </iframe>
</div>
```

To get the embed URL:
1. Go to Google Maps
2. Search "Campus Chowk, Janakpur Dham"
3. Click Share → Embed a map → Copy the `src="..."` URL

---

## ✅ Checklist Before Going Live

- [ ] `assets/logo.png` added
- [ ] `assets/owner.jpg` added (Biltu Prasad Sah photo)
- [ ] All 3 files uploaded to GitHub (`index.html`, `style.css`, `script.js`)
- [ ] GitHub Pages enabled in repository settings
- [ ] Site loads correctly at your GitHub Pages URL
- [ ] WhatsApp button works (links to 9844026763)
- [ ] All phone/email links work on mobile
- [ ] Gallery photos added (when available)
- [ ] Google Maps embed added (optional)

---

## 🆘 Need Help?

Contact: pharmamedico28@gmail.com
WhatsApp: 9844026763

---

*Website built for Pharma Medico — Trusted Medicine Distributors, Janakpur Dham, Nepal.*
