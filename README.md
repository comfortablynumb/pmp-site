# PMP - Poor Man's Platform Website

Official website for PMP (Poor Man's Platform), an ecosystem of tools and applications that simplifies platform creation for teams of any size.

## 🌐 Live Site

Visit the live site at: [https://pmp.github.io](https://pmp.github.io)

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **jQuery** - DOM manipulation and AJAX (via CDN)
- **Marked.js** - Markdown parser (via CDN)
- **GitHub Pages** - Static site hosting

## 📁 Project Structure

```
pmp-site/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Custom styles
│   └── js/
│       └── main.js        # JavaScript for markdown loading
├── content/
│   ├── hero.md            # Hero section content
│   ├── overview.md        # Overview section content
│   ├── getting-started.md # Getting started guide
│   ├── applications.json  # Applications data
│   └── applications.md    # Applications fallback
└── .nojekyll              # GitHub Pages configuration

```

## ✏️ Editing Content

All content is stored in markdown files in the `content/` directory:

### Text Content
- `content/hero.md` - Main hero section
- `content/overview.md` - Platform overview
- `content/getting-started.md` - Getting started guide

### Applications
Edit `content/applications.json` to add/modify applications:

```json
{
    "name": "Application Name",
    "description": "Brief description of the application",
    "docs": "https://link-to-docs",
    "repo": "https://github.com/repo-url"
}
```

## 🚀 Local Development

Since this is a static site, you can serve it locally using any web server:

### Using Python
```bash
python -m http.server 8000
```

### Using Node.js (http-server)
```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 🚢 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
1. Ensure your changes are committed
2. Push to the repository
3. GitHub Pages will automatically build and deploy

### GitHub Pages Settings
- Source: Deploy from branch
- Branch: main / root

## 📝 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.