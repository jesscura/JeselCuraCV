# Jesel Cura - Resume Website

A modern, responsive resume website built with HTML, CSS, and JavaScript, optimized for deployment on Cloudflare Pages.

## 🚀 Deployment

This site is ready for deployment on [Cloudflare Pages](https://pages.cloudflare.com/).

### Deployment Steps:

1. **Connect Repository**
   - Log in to your Cloudflare account
   - Navigate to Pages
   - Click "Create a project"
   - Connect your GitHub account
   - Select the `jesscura/JeselCuraCV` repository

2. **Configure Build Settings**
   - **Framework preset**: None (static HTML)
   - **Build command**: (leave empty)
   - **Build output directory**: `/` (root directory)
   - **Root directory**: `/` (root directory)

3. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare Pages will automatically build and deploy your site
   - Your site will be available at `https://[your-project].pages.dev`

4. **Custom Domain** (Optional)
   - Go to your project settings
   - Navigate to "Custom domains"
   - Add your custom domain (e.g., `jesscura.com`)
   - Follow DNS configuration instructions

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── _headers            # Security and caching headers
├── _redirects          # URL redirects configuration
├── robots.txt          # SEO configuration
└── README.md           # This file
```

## ✨ Features

- **Responsive Design**: Works on all devices
- **Print-Friendly**: Optimized for PDF generation
- **SEO Optimized**: Includes structured data and meta tags
- **Secure**: Security headers configured via `_headers` file
- **Fast**: Optimized for Cloudflare Pages CDN

## 🛠️ Local Development

To run locally:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080

# Then open http://localhost:8080 in your browser
```

## 📝 Customization

To customize the resume:

1. Edit `index.html` to update content
2. Modify `styles.css` to change styling
3. Update `script.js` for functionality changes

## 🔒 Security

The site includes security headers configured in the `_headers` file:
- X-Frame-Options
- X-Content-Type-Options
- Content Security Policy
- Referrer Policy
- And more...

## 📄 License

© 2025 Jesel Cura. All rights reserved.
