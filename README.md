# Audionyx Website

Modern, dark-themed company website for Audionyx - protecting digital voices with cutting-edge audio watermarking technology.

## 🚀 Features

- **Dark Theme Design** - Professional dark interface with purple accents
- **Responsive Layout** - Mobile-first design that works on all devices
- **React Router** - Single-page application with smooth navigation
- **TypeScript** - Full type safety for maintainable code
- **AWS Amplify Ready** - Pre-configured for easy deployment

## 🛠️ Technology Stack

- React 18.2
- TypeScript 4.9
- React Router 6
- CSS3 with custom properties
- Class-based components

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/audionyx-web.git
cd audionyx-web

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at http://localhost:3001

## 🏗️ Build

```bash
# Create production build
npm run build

# The build folder contains optimized production files
```

## 🚀 Deployment

This project is configured for AWS Amplify deployment:

1. Push code to GitHub
2. Connect repository to AWS Amplify
3. Deploy (amplify.yml is pre-configured)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📁 Project Structure

```
audionyx-web/
├── public/
│   ├── images/
│   │   ├── audionyx-logo-1.png
│   │   └── aowl-logo.003.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── TechnologyPage.tsx
│   ├── App.tsx
│   └── index.tsx
├── amplify.yml
├── package.json
└── tsconfig.json
```

## 🎨 Key Features

### Home Page
- Hero section with company mission
- Highlighted benefits for creators, consumers, and platforms
- Feature cards for watermarking technology
- Call-to-action buttons

### Technology Page
- Detailed technology features
- Key capabilities showcase
- How it works workflow

## 🔧 Configuration

### Environment Variables
Create `.env` file for local development:
```
PORT=3001
```

### Production Environment
`.env.production` is included for production builds.

## 📝 Scripts

- `npm start` - Start development server on port 3001
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 🌐 Links

- **Live Demo**: [Coming Soon]
- **AOWL App**: https://aowl.app
- **Contact**: info@audionyx.ai

## 📄 License

© 2025 Audionyx. All rights reserved.

---

Built with React and TypeScript