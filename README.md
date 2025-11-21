# 🚀 Astro Portfolio

Clean, modern portfolio converted from HTML to Astro framework.

## 🛠️ Quick Setup

```bash
# Install dependencies
npm install

# Start dev server  
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
## 📂 Project Structure

```bash
├── src/
│   ├── components/      # Astro components (Sidebar, ProjectCard, etc.)
│   ├── layouts/         # Page layouts
│   └── pages/           # Site pages (index.astro contains main content)
├── hf-gallery-assets/   # 🎨 HuggingFace Gallery Source Code
│   ├── index.html       # Main Gallery HTML (Static Site)
│   ├── README.md        # Space Configuration (YAML)
│   └── *.png            # Project Screenshots
├── public/              # Static assets (images, gifs)
├── ANIX_LYNCH_RESUME.md # 📄 Master Resume (Markdown)
└── astro.config.mjs     # Astro configuration
```

## 🚀 Deployment

### Portfolio Website (Vercel)
The main portfolio is built with **Astro** and deployed on **Vercel**.
- **Live URL:** [gozeroshot.dev](https://gozeroshot.dev)
- **Trigger:** Push to `main` branch triggers auto-deploy.

### HuggingFace Gallery (Spaces)
The AI project gallery is a **Static HTML** site hosted on **HuggingFace Spaces**.
- **Live URL:** [huggingface.co/spaces/anixlynch/anixlynch](https://huggingface.co/spaces/anixlynch/anixlynch)
- **Source:** `hf-gallery-assets/` folder.
- **Update:** To update the gallery, edit `hf-gallery-assets/index.html` and upload it to the Space.

## 🛠️ Tech Stack

## ✨ Features

- 🎨 Clean, responsive design
- 🧩 Modular component architecture
- 📱 Mobile-first responsive layout
- ⚡ Fast loading with Astro
- 🔧 Easy to customize

## 🎛️ Customization

Edit `src/pages/index.astro` to update:
- Personal info (name, tagline, skills)
- Social links
- Project data

## 🌐 Deployment

Ready for deployment to:
- Netlify: `npm run build` 
- Vercel: `npm run build`
- GitHub Pages: Update `astro.config.mjs` with your repo details

## 📝 Next Steps

1. Replace placeholder project images with real screenshots/GIFs
2. Update social links and contact info
3. Add your actual project URLs
4. Customize colors in `src/styles/global.css`
5. Add more pages (blog, contact, etc.)

Built with ❤️ using Astro