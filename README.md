# Ahmed Baflah - Personal Portfolio Website

A modern, responsive portfolio website showcasing my software engineering journey, projects, and technical skills. Built with vanilla HTML, CSS, and JavaScript, featuring smooth animations and an interactive design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Animated Background**: Dynamic canvas-based background with moving cyan lines
- **Interactive Navigation**: Smooth scrolling navigation with hamburger menu for mobile
- **Project Showcase**: Interactive project carousel with clickable images and external links
- **Modern UI/UX**: Clean, professional design with hover effects and smooth transitions
- **Optimized Performance**: Lightweight vanilla JavaScript implementation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Canvas API**: Dynamic background animations
- **Font Awesome**: Icon library for social media and UI elements
- **Google Fonts**: Poppins font family for typography

## 📁 Project Structure

```
Portfolio-1/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript functionality
├── images/             # Project images and assets
│   ├── Portfolio.gif
│   ├── pots-proj.gif
│   ├── ML-Drawer.gif
│   └── favicon.ico
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rx-crxsh3r/Portfolio.git
   cd Portfolio-1
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   ```

3. **View the website**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## 🎨 Customization

### Adding New Projects

1. Open `script.js`
2. Add a new project object to the `projects` array:

```javascript
{
    title: "Your Project Title",
    description: "Detailed description of your project...",
    image: "images/your-project.gif",
    link: "https://github.com/yourusername/your-project"
}
```

3. Add your project image to the `images/` folder

### Modifying Styles

- **Colors**: Update the CSS custom properties in `styles.css`
- **Fonts**: Change the Google Fonts import and font-family declarations
- **Layout**: Modify the Flexbox and Grid properties for different layouts

### Updating Content

- **Personal Information**: Edit the content in `index.html`
- **Skills**: Update the skills section with your technologies
- **Social Links**: Replace placeholder links with your profiles

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px  
- **Mobile**: 767px and below

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📊 Performance Features

- **Optimized Animations**: RequestAnimationFrame for smooth 60fps animations
- **Lazy Loading**: Images load as needed
- **Efficient DOM Manipulation**: Minimal reflows and repaints
- **Mobile-First Approach**: Optimized for mobile performance

## 🔧 Key JavaScript Features

- **Canvas Animation**: Dynamic background with collision detection
- **Smooth Scrolling**: Native CSS smooth scrolling with JavaScript fallback
- **Project Navigation**: Circular navigation through project portfolio
- **Mobile Menu**: Responsive hamburger menu implementation
- **Scroll Effects**: Opacity changes based on scroll position

## 📈 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Project filtering by technology
- [ ] Contact form integration
- [ ] Blog section
- [ ] Performance analytics
- [ ] PWA capabilities

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Contact

- Email: ahmed.ab2824@gmail.com

## 📄 License

This project is open source and available under the MIT License.
