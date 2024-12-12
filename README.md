# API for NextJs Ecommerce

NodeJS Express API for fetching products for NextJS commerce showcase

## Table of Contents

- Technologies Used
- Environment Variables
- Local Deploy
- API Endpoints
- Usage Examples
- License

## Technologies Used

- Prisma - ORM to handle database fetches and handling
- ExpressJS - For me, de facto NodeJS framework.
- Typescript

## Environment Variables

- `DATABASE_URL` (url to external database)

## Local Deploy

1. Install dependencies:
   npm install
2. Generate Prisma client:
   npx prisma generate
3. Start the development server:
   npm run dev

## API Endpoints

### GET /api/products

Fetch all products.

- **Response:**
  [
  {
  "id": 1,
  "name": "Product 1",
  "price": "100,00 €" ,
  "sku": "124242-2"
  },
  ...
  ]

## Usage Examples

### Fetch All Products

curl -X GET http://localhost:3000/api/products

## License

This project is licensed under the MIT License.
