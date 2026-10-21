# ShowCase: Gaming Hardware Vault (Steam Edition)
### MERN Stack Project (Activity 3-5)
**Student:** Marc Kristian Omangpang  
**Program:** BS Information Technology (BSIT)  
**Institution:** NU MOA - School of Information Technology  

---

## 🎮 Overview

This project is an advanced full-stack MERN application built in accordance with the **Activity 3-5 Laboratory Guide**. It has been custom-styled with Valve's iconic **Steam platform aesthetic** (deep space navy, steel slate panels, glowing cyan accents `#66c0f4`, and discount green badges `#a4d007`) and loaded with **high-end gaming hardware products** (consoles, custom PC rigs, mechanical keyboards, mice, and headsets).

---

## 🎨 Steam-Inspired Color Palette & Aesthetics

| Component | Color Hex | Steam Aesthetic Reference |
| :--- | :--- | :--- |
| **Canvas Background** | `#101822` / `#0e141b` | Steam deep dark canvas |
| **Cards & Panels** | `#1b2838` / `#212c3d` | Steam store carousel & card slate |
| **Borders & Dividers** | `#2a475e` / `#3d6788` | Steam subtle metallic border |
| **Primary Highlight** | `#66c0f4` | Steam signature cyan/neon blue |
| **Deep Blue Accent** | `#1999e3` / `#136aa2` | Steam store button gradient |
| **Price / Value Badge** | `#a4d007` / `#66c0f4` | Steam discount & price tag |
| **Danger / Delete** | `#d94141` / `#a32a2a` | Steam alert / warning crimson |
| **Primary Text** | `#f1f5f9` / `#ffffff` | High-contrast crisp off-white |
| **Secondary Text** | `#8f98a0` | Valve Motiva secondary label color |

---

## 🕹️ Gaming Hardware Catalog

The application comes pre-configured with 6 flagship gaming products (including self-contained vector graphics):

1. **Steam Deck OLED (1TB Edition)** — `₱38,990`  
   *Handheld Console with 7.4" 90Hz HDR OLED display, custom AMD 6nm Zen 2 APU, and etched glass.*
2. **CyberPower Valkyrie RTX 4090 Gaming Rig** — `₱189,500`  
   *Desktop PC with Intel Core i9-14900KF, ASUS ROG Strix RTX 4090 24GB, and 64GB DDR5 RGB RAM.*
3. **Keychron Q1 Pro Wireless Mechanical Keyboard** — `₱11,490`  
   *75% custom CNC aluminum mechanical keyboard with banana tactile switches and South-facing RGB.*
4. **Sony PlayStation 5 Pro Console (2TB)** — `₱46,990`  
   *Next-Gen Console with 4K 60FPS PSSR AI upscaling, 2TB SSD, and ray tracing.*
5. **Logitech G PRO X SUPERLIGHT 2 Mouse** — `₱8,795`  
   *Esports wireless mouse with 60g ultralight body, HERO 2 32K DPI sensor, and optical switches.*
6. **SteelSeries Arctis Nova Pro Wireless Headset** — `₱19,995`  
   *Audiophile gaming headset with active noise cancellation, high-res audio, and dual hot-swap batteries.*

---

## 📁 Repository Structure

```text
OmangpangAct3-5/
├── .gitignore                    # Git ignore rule (node_modules, .env, dist)
├── README.md                     # Comprehensive documentation & rubric checklist
├── client/                       # Frontend (React + Vite + Tailwind v4)
│   ├── .env                      # API endpoint configuration
│   ├── index.html                # Steam-branded HTML5 shell
│   ├── package.json              # Client dependencies
│   ├── vite.config.js            # Vite configuration with Tailwind v4 plugin
│   └── src/
│       ├── main.jsx              # React entry point
│       ├── App.jsx               # Main application controller (API + fallback)
│       ├── api.js                # Fetch API client (GET, POST, PUT, DELETE)
│       ├── defaultProducts.js    # Preloaded gaming hardware vault
│       ├── index.css             # Tailwind v4 setup + Steam color system
│       ├── components/
│       │   ├── Navbar.jsx        # Steam-styled navigation header & tab switcher
│       │   ├── ProductCard.jsx   # Gaming hardware card with price tag & actions
│       │   ├── ProductGrid.jsx   # Responsive grid layout with empty state
│       │   ├── ImageUpload.jsx   # Base64 file reader with 1MB validation check
│       │   └── ProductForm.jsx   # Add/Edit product form with validation
│       └── pages/
│           ├── GalleryPage.jsx   # Steam hero banner, category filters & search
│           └── ManagePage.jsx    # Split-view management console
└── server/                       # Backend (Node.js + Express + MongoDB Atlas)
    ├── .env                      # Server port & Mongo URI
    ├── .env.example              # Sample environment template
    ├── package.json              # Server dependencies & scripts
    ├── server.js                 # Express server with CORS & 5MB JSON limit
    ├── seed.js                   # 1-click MongoDB Atlas database seeder
    ├── config/
    │   └── db.js                 # Mongoose database connection handler
    ├── models/
    │   └── Product.js            # MongoDB Product schema with validation
    ├── controllers/
    │   └── productController.js  # CRUD controller (get, create, update, delete)
    └── routes/
        └── productRoutes.js      # RESTful API route definitions
```

---

## 🚀 Step-by-Step Running Instructions

### 1. Run the Frontend (Client)
Open your terminal in VS Code:
```bash
cd client
npm install
npm run dev
```
Open **`http://localhost:5173`** in your browser to view the live website.

### 2. Run the Backend (Server)
In a second terminal:
```bash
cd server
npm install
```
Edit `server/.env` to include your **MongoDB Atlas connection string** (see Activity 2 instructions below):
```env
PORT=5000
MONGO_URI=mongodb+srv://showcaseuser:YOUR_PASSWORD@cluster0.abcde.mongodb.net/showcase?retryWrites=true&w=majority
```
Then start the server:
```bash
npm start
```
*Tip: You can quickly populate your MongoDB Atlas database with the 6 gaming products by running:*
```bash
npm run seed
```

---

## 📋 Activity Rubrics & Submission Guide

### Activity 1: Frontend (Rubric: 100 pts)
*Screenshots to take (Page 17 in PDF):*
1. **Gallery page** with 3+ gaming products showing prices and descriptions.
2. **Manage page** while editing a product (form filled with existing data).
3. **VS Code sidebar** showing the `components` and `pages` folders.

### Activity 2: Backend (Rubric: 100 pts)
*Screenshots to take (Page 26 in PDF):*
1. **Atlas Network Access** showing `0.0.0.0/0` Active.
2. **Atlas Database Access** showing your `showcaseuser`.
3. **VS Code sidebar** showing all files in the `server` folder (`config`, `models`, `controllers`, `routes`, `server.js`).

### Activity 3: Hosting (Rubric: 100 pts)
*Screenshots to take (Page 38 in PDF):*
1. **GitHub repository page** showing `client` and `server` folders (no `.env` or `node_modules`).
2. **Render page** showing backend Web Service status as **Live**.
3. **Thunder Client (or Postman)** showing `POST` request returning status **201**.
4. **Live Vercel website** showing 5+ products loaded from Atlas.
5. **Photo of the live website** opened on your smartphone.

---

## 🌐 Deployment Settings Quick Reference

### Render (Backend API)
- **Root Directory:** `server`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Environment Variable:**  
  `MONGO_URI` = `mongodb+srv://showcaseuser:YOUR_PASSWORD@cluster0.abcde.mongodb.net/showcase?retryWrites=true&w=majority`

### Vercel (Frontend Website)
- **Root Directory:** `client`
- **Framework Preset:** `Vite`
- **Environment Variable:**  
  `VITE_API_URL` = `https://your-backend-service.onrender.com` (no trailing slash)
