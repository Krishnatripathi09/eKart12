# eKart Product Service

A microservice for product catalog management in the eKart ecommerce platform. This service will handle product information, inventory, categories, and related operations.

## 🚀 Planned Features

- **Product Management** - CRUD operations for products
- **Category Management** - Product categorization and filtering
- **Inventory Tracking** - Stock levels and availability
- **Search & Filtering** - Advanced product search capabilities
- **Image Management** - Product image handling and optimization
- **Pricing Management** - Dynamic pricing and discounts
- **Product Reviews** - Customer reviews and ratings

## 🛠️ Technology Stack (Planned)

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Prisma** - Database ORM
- **PostgreSQL** - Relational database
- **Redis** - Caching layer (optional)
- **AWS S3** - Image storage (optional)

## 📋 Development Roadmap

### Phase 1: Basic Product Management

- [ ] Set up Express.js server with TypeScript
- [ ] Configure Prisma with PostgreSQL
- [ ] Create Product model and database schema
- [ ] Implement basic CRUD operations
- [ ] Add input validation and error handling

### Phase 2: Advanced Features

- [ ] Category management system
- [ ] Product search and filtering
- [ ] Image upload and management
- [ ] Inventory tracking
- [ ] API documentation with Swagger

### Phase 3: Performance & Scalability

- [ ] Implement caching with Redis
- [ ] Add database indexing
- [ ] Implement pagination
- [ ] Add rate limiting
- [ ] Performance monitoring

### Phase 4: Integration

- [ ] Connect with User Service
- [ ] Integrate with Admin Dashboard
- [ ] Connect with Store Frontend
- [ ] Add authentication middleware

## 🗄️ Planned Database Schema

### Product Model

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Decimal
  sku         String   @unique
  categoryId  Int
  category    Category @relation(fields: [categoryId], references: [id])
  images      String[]
  inStock     Boolean  @default(true)
  stockCount  Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Category Model

```prisma
model Category {
  id          Int       @id @default(autoincrement())
  name        String
  description String?
  parentId    Int?
  parent      Category? @relation("CategoryHierarchy", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryHierarchy")
  products    Product[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

## 🌐 Planned API Endpoints

### Products

- `GET /api/products` - Get all products with pagination
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/search` - Search products
- `GET /api/products/category/:categoryId` - Get products by category

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `POST /api/categories` - Create new category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

## 🚀 Getting Started (When Implemented)

### Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm package manager

### Installation

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

## 🔧 Development Setup

### Project Structure (Planned)

```
micros/product-service/
├── src/
│   ├── app.ts              # Express application setup
│   ├── index.ts            # Server entry point
│   ├── routes/
│   │   ├── product.route.ts
│   │   └── category.route.ts
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   └── utils/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migration files
├── tests/                  # Test files
├── docs/                   # API documentation
└── package.json
```

## 🧪 Testing Strategy

- **Unit Tests** - Individual function testing
- **Integration Tests** - API endpoint testing
- **Database Tests** - Prisma operations testing
- **Performance Tests** - Load and stress testing

## 🔒 Security Considerations

- **Input Validation** - Sanitize all user inputs
- **SQL Injection** - Use Prisma ORM for protection
- **Authentication** - JWT token validation
- **Authorization** - Role-based access control
- **Rate Limiting** - Prevent API abuse
- **CORS** - Configure for frontend integration

## 📚 Learn More

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🤝 Contributing

This service is currently in planning phase. When development begins:

1. Follow the existing code style and patterns
2. Use TypeScript for all new code
3. Update database schema with migrations
4. Write comprehensive tests
5. Update API documentation

## 🔗 Related

- [eKart Main Repository](../../README.md)
- [User Service](../user-service/README.md)
- [Admin Dashboard](../../apps/admin/README.md)
- [Store Frontend](../../apps/store/README.md)

## 📝 Notes

This service is planned for future development. The current focus is on completing the User Service and establishing the overall architecture. Once the foundation is solid, development of the Product Service will begin.

For questions or suggestions about the Product Service design, please open an issue in the main repository.
