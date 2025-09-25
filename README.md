# quantifAI - Portfolio Optimizer

> AI-powered portfolio optimization platform for financial advisors

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Redesigned UI**: Clean, modern interface with improved user experience
- **Responsive Design**: Mobile-first approach with seamless cross-device compatibility  
- **Smooth Animations**: Framer Motion powered interactions and micro-animations
- **AI-Powered Insights**: Transparent portfolio analysis and optimization recommendations
- **Enterprise Security**: Built with security best practices for financial data
- **Performance Optimized**: Fast loading times and excellent Core Web Vitals

## What is quantifAI?

quantifAI transforms how financial advisors manage and optimize client portfolios. Our AI-powered platform provides:

- **Transparent Portfolio Analysis**: Every trade comes with clear rationale and market insights
- **Real-time Optimization**: AI-driven recommendations for better portfolio performance  
- **Client Communication Tools**: Easy-to-understand visualizations and reports
- **Alternative Asset Integration**: Comprehensive analysis including cryptocurrency and other alternatives
- **Risk Assessment**: Advanced risk modeling and tolerance alignment

## Quick Start

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saivedant169/frontend_quantifAI.git
   cd frontend_quantifAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
quantifai-portfolio-optimizer/
├── app/                        # Next.js 14 app directory
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout component  
│   └── page.tsx               # Homepage
├── components/                 # Reusable React components
│   ├── Header.tsx             # Navigation header
│   └── HeroSection.tsx        # Landing page hero
├── lib/                       # Utility functions and helpers
├── public/                    # Static assets
│   └── images/               # Image assets
├── styles/                    # Additional stylesheets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Design System

### Colors

- **Primary Yellow**: `#fbbf24` (Amber 400)
- **Secondary**: `#f59e0b` (Amber 500) 
- **Accent**: `#d97706` (Amber 600)
- **Background**: Gradient from white to yellow-50
- **Text**: Gray scale from 600-900

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-900) with tight tracking
- **Body**: Regular weight (400) with relaxed line height

### Components

- **Glass Effect**: Backdrop blur with subtle transparency
- **Gradient Text**: Amber gradient for emphasis
- **Hover States**: Smooth scale and shadow transitions
- **Animations**: Framer Motion with ease-out timing

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_NAME=quantifAI
NEXT_PUBLIC_APP_URL=https://quantifai.co
```

### Tailwind CSS

The project uses a custom Tailwind configuration with:
- Extended color palette matching quantifAI branding
- Custom animations and keyframes
- Container utilities with responsive padding
- Typography plugin for rich text content

## Roadmap

- [ ] **Portfolio Analysis Dashboard** - Interactive charts and insights
- [ ] **Authentication System** - Secure advisor login and management
- [ ] **Database Integration** - Portfolio and client data storage
- [ ] **AI API Integration** - Real portfolio analysis endpoints
- [ ] **Client Management** - Tools for advisor-client relationships
- [ ] **Reporting System** - Automated portfolio reports
- [ ] **Mobile App** - React Native companion app

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [quantifai.co](https://quantifai.co)
- **Email**: team@quantifai.co
- **GitHub**: [@saivedant169](https://github.com/saivedant169)

## Acknowledgments

- Design inspiration from modern fintech applications
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling
- Next.js team for the amazing framework

---

**Built by the quantifAI team**
