# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your projects, skills, and professional information.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and form handling
- **SEO Optimized**: Semantic HTML structure for better search engine visibility
- **Fast Loading**: Optimized code and assets for quick page loads
- **Accessibility**: Keyboard navigation and screen reader friendly

## 📁 File Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🛠️ Setup Instructions

### Option 1: Local Development (Recommended)

1. **Download the files**: All website files are already in the `website/` folder
2. **Open in browser**: Simply double-click on `index.html` or right-click and select "Open with" → your preferred browser
3. **Live server** (optional): For development with auto-refresh:
   ```bash
   # Install a simple HTTP server
   npm install -g live-server
   
   # Navigate to the website folder
   cd website
   
   # Start the server
   live-server
   ```

### Option 2: Deploy to GitHub Pages (Free Hosting)

1. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `yourusername.github.io` (replace with your GitHub username)

2. **Upload your files**:
   - Upload all files from the `website/` folder to your repository
   - Make sure `index.html` is in the root directory

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch" → "main" branch
   - Your site will be available at `https://yourusername.github.io`

### Option 3: Deploy to Netlify (Free Hosting)

1. **Drag and drop**: Go to [Netlify](https://netlify.com) and drag your `website` folder to the deploy area
2. **Custom domain**: You can add a custom domain in the site settings

## 🎨 Customization Guide

### 1. Personal Information

**Update the following in `index.html`:**

```html
<!-- Replace "Your Name" with your actual name -->
<title>Your Name - Portfolio</title>

<!-- In the navigation -->
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>

<!-- In the hero section -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">
    AI/ML Engineer | Data Scientist | Software Developer
</p>
```

### 2. Contact Information

**Update contact details in the contact section:**

```html
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-method">
    <i class="fab fa-linkedin"></i>
    <span>linkedin.com/in/yourprofile</span>
</div>
<div class="contact-method">
    <i class="fab fa-github"></i>
    <span>github.com/yourusername</span>
</div>
```

### 3. Add Your Photo

**Replace the placeholder icon with your actual photo:**

1. Add your photo to the website folder (recommended: `profile.jpg` or `profile.png`)
2. Update the profile image section in `index.html`:

```html
<div class="profile-image">
    <img src="profile.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

### 4. Update Projects

**Modify the projects section with your actual projects:**

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-x-ray"></i> <!-- Change icon as needed -->
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">TensorFlow</span>
            <!-- Add more technologies -->
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://yourproject.com" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### 5. Update Skills

**Modify the skills section with your actual skills:**

```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85%"></div>
    </div>
</div>
```

### 6. Color Scheme

**To change the color scheme, update these CSS variables in `styles.css`:**

```css
/* Primary colors */
:root {
    --primary-color: #2563eb;    /* Blue */
    --secondary-color: #7c3aed;  /* Purple */
    --accent-color: #fbbf24;     /* Yellow */
    --text-color: #1f2937;       /* Dark gray */
    --bg-color: #ffffff;         /* White */
}
```

### 7. Add More Sections

**You can easily add new sections by:**

1. Adding a new section in `index.html`:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <!-- Your content here -->
    </div>
</section>
```

2. Adding corresponding styles in `styles.css`
3. Adding navigation link in the navbar

## 📱 Responsive Breakpoints

The website is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 SEO Optimization

To improve search engine visibility:

1. **Update meta tags** in the `<head>` section:
```html
<meta name="description" content="Your professional description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
```

2. **Add Open Graph tags** for social media sharing:
```html
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your professional description">
<meta property="og:image" content="path/to/your/image.jpg">
```

## 🔧 Advanced Customization

### Adding Animations

The website includes several animation classes you can use:
- `.fade-in`: Fade in animation
- `.slide-in-left`: Slide in from left
- `.slide-in-right`: Slide in from right

### Custom Fonts

To use custom fonts, add them to the `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 🚀 Performance Tips

1. **Optimize images**: Compress images before adding them
2. **Minify files**: Use online tools to minify CSS and JS for production
3. **Use CDN**: Consider using a CDN for faster loading
4. **Enable compression**: Configure server compression for better performance

## 📞 Support

If you need help customizing your website:

1. **Check the code comments**: All files include helpful comments
2. **Use browser developer tools**: Right-click → Inspect to see how elements are styled
3. **Test on different devices**: Use browser dev tools to test responsive design

## 📄 License

This template is free to use for personal and commercial projects. Feel free to modify and distribute as needed.

---

**Happy coding! 🎉**

Your professional portfolio website is ready to showcase your skills and projects to the world!

