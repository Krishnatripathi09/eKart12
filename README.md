# eKart 🛒

A modern microservice-based ecommerce application built with TypeScript, featuring a monorepo architecture with separate frontend applications and backend microservices.

## 🏗️ Architecture

eKart follows a microservices architecture with the following components:

### Frontend Applications

- **Admin Dashboard** (`apps/admin`) - React + TypeScript + Vite admin interface
- **Store Frontend** (`apps/store`) - Next.js 15 ecommerce store with Tailwind CSS

### Backend Microservices

- **User Service** (`micros/user-service`) - Express.js + Prisma + PostgreSQL user management
- **Product Service** (`micros/product-service`) - Product catalog management (planned)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/msboffl/eKart.git
cd eKart
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
# Copy environment files and configure
cp micros/user-service/.env.example micros/user-service/.env
# Edit the .env file with your database connection string
```

4. Set up the database:

```bash
# Run Prisma migrations
pnpm --filter @ekart/users prisma migrate dev
```

### Development

Start all services in development mode:

```bash
# Start user service
pnpm users:dev

# Start admin dashboard (in separate terminal)
cd apps/admin
pnpm dev

# Start store frontend (in separate terminal)
cd apps/store
pnpm dev
```

## 📁 Project Structure

```
eKart/
├── apps/                    # Frontend applications
│   ├── admin/              # React admin dashboard
│   └── store/              # Next.js ecommerce store
├── micros/                 # Backend microservices
│   ├── user-service/       # User management service
│   └── product-service/    # Product service (planned)
├── packages/               # Shared packages
└── pnpm-workspace.yaml     # Monorepo configuration
```

## 🛠️ Technology Stack

### Frontend

- **React 19** with TypeScript
- **Next.js 15** with App Router
- **Vite** for admin dashboard
- **Tailwind CSS** for styling
- **ESLint** for code quality

### Backend

- **Node.js** with Express.js
- **TypeScript** for type safety
- **Prisma** as ORM
- **PostgreSQL** as database
- **tsx** for development

### DevOps & Tools

- **pnpm** for package management
- **Monorepo** architecture
- **TypeScript** across all services
- **Prisma** for database management

## 📚 Available Scripts

### Root Level

```bash
pnpm generate:tree    # Generate project structure tree
pnpm users:dev       # Start user service in development
pnpm users:build     # Build user service
```

### Admin App

```bash
cd apps/admin
pnpm dev            # Start development server
pnpm build          # Build for production
pnpm preview        # Preview production build
pnpm lint           # Run ESLint
```

### Store App

```bash
cd apps/store
pnpm dev            # Start development server with Turbopack
pnpm build          # Build for production
pnpm start          # Start production server
pnpm lint           # Run ESLint
```

### User Service

```bash
cd micros/user-service
pnpm dev            # Start development server
pnpm build          # Build TypeScript
pnpm start          # Start production server
```

## 🗄️ Database

The user service uses PostgreSQL with Prisma ORM. The database schema includes:

- **User** model with id, firstName, lastName, and email fields

To set up the database:

1. Install PostgreSQL
2. Create a database
3. Set the `USER_DATABASE` environment variable
4. Run `pnpm --filter @ekart/users prisma migrate dev`

## 🌐 API Endpoints

### User Service

- Base URL: `http://localhost:3001` (default)
- Endpoints: See `micros/user-service/README.md` for detailed API documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mareedu Saibabu**

- GitHub: [@msboffl](https://github.com/msboffl)

## 🔗 Links

- [Repository](https://github.com/msboffl/eKart)
- [Issues](https://github.com/msboffl/eKart/issues)
