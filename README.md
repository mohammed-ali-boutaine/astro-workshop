# Savory - Astro Sandwich Workshop

A modern, full-featured e-commerce website for artisan sandwich kits built with Astro. This project demonstrates advanced web development concepts including server-side rendering, state management, content collections, and interactive components.

## 🍞 About Savory

Savory is a premium sandwich kit delivery service that brings restaurant-quality ingredients and expert recipes directly to your kitchen. Our mission is to create exceptional sandwiches that bring people together, using the finest ingredients and time-honored techniques.

## ✨ Features

### 🛒 E-commerce Functionality
- **Product Catalog**: Browse premium sandwich kits with detailed descriptions
- **Shopping Cart**: Add/remove items with persistent localStorage storage
- **Interactive UI**: Smooth animations and responsive design
- **Product Search**: Find your perfect sandwich kit

### 📖 Content Management
- **Recipe Blog**: Expert-curated articles and cooking guides
- **Content Collections**: Structured content with TypeScript validation
- **Dynamic Routing**: SEO-friendly URLs for all content
- **Rich Media**: Images, videos, and interactive content

### 🎨 Modern Design
- **Responsive Layout**: Optimized for all device sizes
- **Custom Typography**: Beautiful DynaPuff font for headings
- **Smooth Animations**: Engaging user interactions
- **Professional Styling**: Clean, modern aesthetic

### 🚀 Performance
- **Static Site Generation**: Lightning-fast page loads
- **Image Optimization**: Lazy loading and responsive images
- **Code Splitting**: Optimized JavaScript bundles
- **SEO Optimized**: Meta tags, structured data, and sitemaps

## 🛠 Technology Stack

- **[Astro](https://astro.build/)** - Static Site Generator
- **[React](https://reactjs.org/)** - Interactive components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Nanostores](https://github.com/nanostores/nanostores)** - State management
- **[Zod](https://zod.dev/)** - Schema validation
- **[Vercel](https://vercel.com/)** - Deployment platform

## 📁 Project Structure

```
astro-workshop/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── AddToCartButton.tsx
│   │   ├── Cart.tsx
│   │   ├── Navigation.astro
│   │   └── ShopItems.astro
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts
│   │   └── config.ts     # Content schema
│   ├── layouts/          # Page layouts
│   │   └── default.astro
│   ├── pages/            # Route pages
│   │   ├── blog/
│   │   ├── index.astro
│   │   ├── shop.astro
│   │   └── about.astro
│   ├── stores/           # State management
│   │   └── cart.ts
│   └── types.ts          # Type definitions
├── public/               # Static assets
├── astro.config.mjs      # Astro configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohammed-ali-boutaine/astro-workshop.git
   cd astro-workshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Astro CLI
npm run astro
```

## 🌐 Deployment

The project is configured for deployment on Vercel:

1. **Connect repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy** automatically on push to main

## 🧩 Key Components

### Shopping Cart
- Persistent storage with localStorage
- Add/remove/update quantities
- Real-time total calculation
- Mobile-responsive slide-out panel

### Content Collections
- Type-safe blog posts with Zod validation
- Automatic routing for dynamic content
- Rich metadata support

### State Management
- Nanostores for lightweight state management
- React integration for interactive components
- SSR-compatible store persistence

## 🎯 Learning Objectives

This workshop project covers:

- **Astro Fundamentals**: Static site generation, component architecture
- **React Integration**: Hydration strategies, client-side interactivity
- **TypeScript**: Type safety, interface design
- **State Management**: Global state, persistence, reactivity
- **Content Management**: Collections, schemas, dynamic routing
- **Performance**: Code splitting, lazy loading, optimization
- **Deployment**: Modern hosting, CI/CD workflows

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is part of an educational workshop and is available under the MIT License.

## 🙋‍♂️ Support

For questions or issues:
- Check the [Issues](https://github.com/mohammed-ali-boutaine/astro-workshop/issues) page
- Review Astro [documentation](https://docs.astro.build/)
- Join the Astro [Discord community](https://astro.build/chat)

---

Built with ❤️ using Astro and modern web technologies