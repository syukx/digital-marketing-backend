# DigiBoost - Digital Marketing Website

A modern, responsive digital marketing website built with React, featuring SEO optimization, interactive chatbot, contact forms, and portfolio showcase.

![DigiBoost Banner](public/images/og-image.png)

## 🚀 Features

- **Responsive Design**: Seamlessly adapts to mobile, tablet, and desktop devices
- **SEO Optimized**: Built with best SEO practices for maximum visibility
- **AI-Powered Chatbot**: Interactive assistant to help visitors
- **Contact Forms**: Easy inquiry forms with validation
- **Interactive Maps**: Google Maps integration for location finding
- **Portfolio Showcase**: Real-time analytics and project results
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🛠️ Technologies Used

- **Frontend**: React 18, React Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Maps**: Google Maps API
- **Backend** (Optional): Node.js, Express, MySQL/SQLite
- **SEO**: React Helmet Async

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn
- Git
- Google Maps API key (for map feature)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/digital-marketing-website.git
cd digital-marketing-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_API_URL=http://localhost:5000
```

4. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📦 Building for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 📁 Project Structure



## 🎨 Customization

### Colors
Edit `src/index.css` to change the color scheme:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #9333ea;
}
```

### Content
- **Services**: Edit `src/assets/data/services.js`
- **Portfolio**: Edit `src/assets/data/portfolio.js`
- **Company Info**: Edit `src/utils/constants.js`

## 🔌 Backend Setup (Optional)

If you want to store form submissions in a database:

1. Navigate to backend folder:
```bash
cd backend
npm install
```

2. Configure database in `config/database.js`

3. Start the server:
```bash
npm start
```

## 🧪 Testing
```bash
npm test
```

## 📈 SEO Features

- Meta tags optimization
- Semantic HTML structure
- Schema.org structured data
- Sitemap generation
- robots.txt configuration
- Open Graph tags
- Twitter Card tags

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Your Name**
- GitHub: [@syukx](https://github.com/syukx)
- Instagram: [@syukx](https://www.instagram.com/syukx0?igsh=Nmx3MnJ6b3J5aTRl)
- Email: anselmgomes023@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern digital marketing agencies
- Icons by Lucide React
- Built as a major web development project

## 📞 Support

For support, email your.email@example.com or open an issue on GitHub.

---

⭐ Star this repo if you find it helpful!