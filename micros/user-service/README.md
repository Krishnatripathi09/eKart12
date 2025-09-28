# eKart User Service

A microservice for user management in the eKart ecommerce platform, built with Express.js, TypeScript, Prisma, and PostgreSQL.

## 🚀 Features

- **Express.js** REST API for user management
- **TypeScript** for type safety and better developer experience
- **Prisma ORM** for database operations
- **PostgreSQL** database for data persistence
- **JWT Authentication** (planned)
- **Input validation** and error handling
- **Database migrations** with Prisma

## 🛠️ Technology Stack

- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **TypeScript 5.8.3** - Type safety
- **Prisma 6.16.2** - Database ORM
- **PostgreSQL** - Relational database
- **tsx 4.20.5** - TypeScript execution

## 📦 Installation

From the project root:

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database connection string

# Run database migrations
pnpm prisma migrate dev

# Start development server
pnpm dev
```

Or using the root workspace commands:

```bash
# From project root
pnpm --filter @ekart/users dev
```

## 🚀 Development

### Start Development Server

```bash
pnpm dev
```

The user service will be available at `http://localhost:3001` (default port).

### Available Scripts

```bash
pnpm dev            # Start development server with hot reload
pnpm build          # Build TypeScript to JavaScript
pnpm start          # Start production server
pnpm prisma migrate dev    # Run database migrations
pnpm prisma generate       # Generate Prisma client
pnpm prisma studio         # Open Prisma Studio
```

### Development Features

- **Hot Reload** - Automatic server restart on file changes
- **TypeScript** - Full type checking and IntelliSense
- **Prisma Studio** - Visual database management
- **Database Migrations** - Version-controlled schema changes

## 🏗️ Project Structure

```
micros/user-service/
├── src/
│   ├── app.ts              # Express application setup
│   ├── index.ts            # Server entry point
│   └── routes/
│       └── user.route.ts   # User API routes
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migration files
├── dist/                   # Compiled JavaScript output
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🗄️ Database Schema

### User Model

```prisma
model User {
  id        Int    @id @default(autoincrement())
  firstName String
  lastName  String
  email     String
}
```

### Database Setup

1. **Install PostgreSQL** on your system
2. **Create a database** for the user service
3. **Set environment variable**:
   ```bash
   USER_DATABASE="postgresql://username:password@localhost:5432/ekart_users"
   ```
4. **Run migrations**:
   ```bash
   pnpm prisma migrate dev
   ```

## 🌐 API Endpoints

### Base URL

```
http://localhost:3001
```

### User Endpoints

#### Get All Users

```http
GET /api/users
```

**Response:**

```json
[
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
]
```

#### Get User by ID

```http
GET /api/users/:id
```

**Response:**

```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

#### Create User

```http
POST /api/users
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com"
}
```

**Response:**

```json
{
  "id": 2,
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com"
}
```

#### Update User

```http
PUT /api/users/:id
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith.updated@example.com"
}
```

#### Delete User

```http
DELETE /api/users/:id
```

**Response:**

```json
{
  "message": "User deleted successfully"
}
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the user-service directory:

```bash
# Database
USER_DATABASE="postgresql://username:password@localhost:5432/ekart_users"

# Server
PORT=3001
NODE_ENV=development
```

### Prisma Configuration

The Prisma schema is configured with:

- **PostgreSQL** as the database provider
- **Prisma Client** generation
- **Migration** support

### TypeScript Configuration

TypeScript is configured with:

- **Strict mode** enabled
- **ES modules** support
- **Node.js** types included

## 🔧 Database Management

### Prisma Commands

```bash
# Generate Prisma client
pnpm prisma generate

# Create a new migration
pnpm prisma migrate dev --name add_user_fields

# Reset database (development only)
pnpm prisma migrate reset

# Open Prisma Studio
pnpm prisma studio

# Deploy migrations to production
pnpm prisma migrate deploy
```

### Adding New Fields

1. **Update schema** in `prisma/schema.prisma`
2. **Create migration**:
   ```bash
   pnpm prisma migrate dev --name add_new_field
   ```
3. **Update TypeScript types** (automatic with Prisma generate)

## 🚀 Building for Production

```bash
# Build TypeScript
pnpm build

# Start production server
pnpm start
```

### Production Considerations

- **Environment variables** must be set
- **Database migrations** should be run
- **Prisma client** must be generated
- **Error handling** and logging should be configured

## 🧪 Testing

### Manual Testing

Use tools like Postman or curl to test the API:

```bash
# Test GET all users
curl http://localhost:3001/api/users

# Test POST create user
curl -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com"}'
```

### Automated Testing

Consider adding:

- **Jest** for unit testing
- **Supertest** for API testing
- **Test database** for integration tests

## 🔒 Security Considerations

- **Input validation** for all endpoints
- **SQL injection** protection (Prisma handles this)
- **CORS** configuration for frontend integration
- **Rate limiting** for API protection
- **Authentication** and authorization (planned)

## 📚 Learn More

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new code
3. Update database schema with migrations
4. Test your changes thoroughly
5. Update API documentation

## 🔗 Related

- [eKart Main Repository](../../README.md)
- [Admin Dashboard](../../apps/admin/README.md)
- [Store Frontend](../../apps/store/README.md)
- [Product Service](../product-service/README.md)
