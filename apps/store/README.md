# eKart Store Frontend

A modern ecommerce store frontend built with Next.js 15, React 19, and Tailwind CSS. This is the customer-facing store application for the eKart platform.

## 🚀 Features

- **Next.js 15** with App Router for modern React development
- **React 19** with latest features and optimizations
- **Tailwind CSS 4** for utility-first styling
- **TypeScript** for type safety and better developer experience
- **Turbopack** for ultra-fast development builds
- **ESLint** configuration for code quality
- **Responsive Design** optimized for all devices

## 🛠️ Technology Stack

- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - Latest React with new features
- **TypeScript 5** - Type safety and IntelliSense
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint 9** - Code linting and formatting
- **Turbopack** - Fast bundler for development

## 📦 Installation

From the project root:

```bash
# Install dependencies
pnpm install

# Start development server
cd apps/store
pnpm dev
```

Or using the root workspace commands:

```bash
# From project root
pnpm --filter store dev
```

## 🚀 Development

### Start Development Server

```bash
pnpm dev
```

The store will be available at `http://localhost:3000` (default Next.js port).

### Available Scripts

```bash
pnpm dev            # Start development server with Turbopack
pnpm build          # Build for production with Turbopack
pnpm start          # Start production server
pnpm lint           # Run ESLint for code quality
```

### Development Features

- **Turbopack** - Ultra-fast bundling and hot reloading
- **App Router** - File-based routing with layouts and loading states
- **TypeScript** - Full type checking and IntelliSense support
- **Tailwind CSS** - Utility-first styling with JIT compilation
- **Hot Reload** - Instant updates during development

## 🏗️ Project Structure

```
apps/store/
├── src/
│   └── app/                # App Router directory
│       ├── favicon.ico     # Site favicon
│       ├── globals.css     # Global styles with Tailwind
│       ├── layout.tsx      # Root layout component
│       └── page.tsx        # Home page component
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── eslint.config.mjs       # ESLint configuration
```

## ⚙️ Configuration

### Next.js

The project uses Next.js 15 with:

- **App Router** - Modern routing system
- **Turbopack** - Fast bundler for development
- **TypeScript** - Built-in TypeScript support

### Tailwind CSS

Tailwind CSS 4 is configured with:

- **PostCSS** integration
- **JIT compilation** for faster builds
- **Custom configuration** in `tailwind.config.js`

### TypeScript

TypeScript is configured with:

- **Strict mode** enabled
- **Next.js types** included
- **Node.js types** for server-side code

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS 4 for styling:

```tsx
// Example component with Tailwind classes
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to eKart Store
      </h1>
    </div>
  );
}
```

### Global Styles

Global styles are defined in `src/app/globals.css`:

- Tailwind CSS directives
- Custom CSS variables
- Base styles and resets

## 🚀 Building for Production

```bash
pnpm build
```

The build output will be in the `.next/` directory, optimized for production.

### Production Features

- **Static Generation** - Pre-rendered pages for better performance
- **Image Optimization** - Automatic image optimization with `next/image`
- **Code Splitting** - Automatic code splitting for smaller bundles
- **Tree Shaking** - Unused code elimination

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Connect your GitHub repository
2. Select the `apps/store` directory
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- **Railway** - Simple deployment
- **Docker** - Containerized deployment

## 🔧 Customization

### Adding New Pages

1. Create new files in `src/app/` directory
2. Use the App Router conventions
3. Export default components

### Styling Components

1. Use Tailwind CSS utility classes
2. Create custom components with TypeScript
3. Use CSS modules for complex styles

### API Routes

Create API routes in `src/app/api/` directory:

```typescript
// src/app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Hello from eKart Store!' });
}
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new code
3. Run `pnpm lint` before committing
4. Test your changes thoroughly
5. Use Tailwind CSS for styling

## 🔗 Related

- [eKart Main Repository](../README.md)
- [Admin Dashboard](../admin/README.md)
- [User Service](../../micros/user-service/README.md)
