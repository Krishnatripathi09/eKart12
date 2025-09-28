# eKart Admin Dashboard

A modern React-based admin dashboard for the eKart ecommerce platform, built with TypeScript, Vite, and React 19.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **React Compiler** enabled for automatic optimizations
- **ESLint** configuration for code quality
- **Hot Module Replacement (HMR)** for instant updates during development

## 🛠️ Technology Stack

- **React 19.1.1** - Latest React with new features
- **TypeScript 5.8.3** - Type safety and better developer experience
- **Vite 7.1.7** - Fast build tool and dev server
- **ESLint 9.36.0** - Code linting and formatting
- **React Compiler** - Automatic React optimizations

## 📦 Installation

From the project root:

```bash
# Install dependencies
pnpm install

# Start development server
cd apps/admin
pnpm dev
```

Or using the root workspace commands:

```bash
# From project root
pnpm --filter admin dev
```

## 🚀 Development

### Start Development Server

```bash
pnpm dev
```

The admin dashboard will be available at `http://localhost:5173` (default Vite port).

### Available Scripts

```bash
pnpm dev          # Start development server with HMR
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint for code quality
```

### Development Features

- **Hot Module Replacement** - Changes reflect instantly without page reload
- **TypeScript** - Full type checking and IntelliSense support
- **React Compiler** - Automatic memoization and optimization
- **ESLint** - Real-time code quality feedback

## 🏗️ Project Structure

```
apps/admin/
├── src/
│   ├── App.tsx           # Main application component
│   ├── App.css           # Global styles
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Base styles
│   └── assets/           # Static assets
├── public/               # Public assets
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── eslint.config.js      # ESLint configuration
```

## ⚙️ Configuration

### TypeScript

The project uses TypeScript with strict configuration:

- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node.js/Vite configuration

### ESLint

ESLint is configured with:

- TypeScript support
- React-specific rules
- Modern JavaScript/TypeScript best practices

### Vite

Vite configuration includes:

- React plugin for JSX support
- TypeScript support
- Development server configuration
- Build optimization

## 🔧 Customization

### Adding New Components

1. Create component files in `src/components/`
2. Use TypeScript interfaces for props
3. Export components for use in other files

### Styling

- Global styles in `src/index.css`
- Component-specific styles in `src/App.css`
- CSS modules or styled-components can be added as needed

### State Management

Currently using React's built-in state management. For complex state:

- Consider adding Redux Toolkit or Zustand
- Use React Context for shared state
- Implement custom hooks for reusable logic

## 🚀 Building for Production

```bash
pnpm build
```

The build output will be in the `dist/` directory, ready for deployment.

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Compiler](https://react.dev/learn/react-compiler)

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new code
3. Run `pnpm lint` before committing
4. Test your changes thoroughly

## 🔗 Related

- [eKart Main Repository](../README.md)
- [Store Frontend](../store/README.md)
- [User Service](../../micros/user-service/README.md)
