Aquí tienes un `README.md` actualizado y organizado con instrucciones detalladas sobre cómo desplegar el proyecto después de clonar el repositorio:

```markdown
# ProductManagerAPI

A RESTful API built with Node.js and Express for managing product data. This project uses Sequelize for database interaction and supports PostgreSQL, along with TypeScript for type safety and modularity. The API provides endpoints for creating, reading, updating, and deleting products.


## Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for Node.js
- **TypeScript** - Superset of JavaScript that adds type definitions
- **Sequelize** - Promise-based ORM for Node.js
- **PostgreSQL** - Open-source relational database
- **Nodemon** - Tool for automatically restarting the application when file changes are detected
- **dotenv** - Module to manage environment variables

## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/ProductManagerAPI.git
cd ProductManagerAPI
```

### 2. Install Dependencies

Once inside the project directory, install all required dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project with your environment variables:

```bash
touch .env
```

Add the following variables to the `.env` file:

```bash
DATABASE_URL=your_database_url_here
PORT=4000
```

Replace `your_database_url_here` with the actual URL of your PostgreSQL database.

### 5. Database Setup

This project uses Sequelize for database management. You'll need to install both Sequelize and the PostgreSQL driver:

```bash
npm install sequelize 
```

Postgres DB

```bash
$ npm install --save pg pg-hstore # Postgres
```

## Project Setup

### 1. Compile TypeScript

The project uses TypeScript, so compile the `.ts` files before running:

```bash
npx tsc
```

This will output JavaScript files in the `dist/` folder.

### 2. Running in Development Mode

To run the project in development mode with Nodemon, use the following command:

```bash
nodemon src --exec 'npx tsx src/index.ts'
```

Nodemon will watch for changes and automatically restart the server when files are modified.

## Running the Project

To start the API server, run the following command:

```bash
npx tsx src/index.ts
```

For development, use:

```bash
npm run dev
```

Make sure your PostgreSQL database is running and that the `DATABASE_URL` in your `.env` file is correct.

## API Endpoints

The API runs on port `4000` and supports the following endpoints:

### `/api/v1/products`

- **GET** `/api/v1/products` - Retrieve all products.
- **GET** `/api/v1/products/:id` - Retrieve a single product by its ID.
- **POST** `/api/v1/products` - Create a new product.
- **PUT** `/api/v1/products/:id` - Update a product by its ID.
- **PATCH** `/api/v1/products/:id` - Partially update a product by its ID.
- **DELETE** `/api/v1/products/:id` - Delete a product by its ID.

## Sequelize Documentation

For more details about Sequelize, visit the [official documentation](https://sequelize.org/docs/v6/getting-started/).
