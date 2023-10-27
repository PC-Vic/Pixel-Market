# Pixel-Market

Welcome to Pixel Market! Pixel Market is a robust and modern e-commerce backend API built with Express.js, Sequelize, and MySQL. This backend system provides essential functionality for managing categories, products, and tags to power your online retail business.

## Table of Contents
- [Pixel-Market](#pixel-market)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Endpoints](#endpoints)
    - [Category](#category)
    - [Products](#products)
    - [Tags](#tags)
  - [License](#license)
  - [Contact](#contact)

## Installation 

1. Clone the repository:

   ```bash
   git clone https://github.com/PC-Vic/Pixel-Market.git

2. Open project directory and do an "npm install"
3. Seed the database with "npm run seed"
4. Start the server with "npm run watch"

## Endpoints

Pixel Market provides various endpoints to manage your e-commerce data. Below are the available API endpoints with their respective actions:

### Category

- GET /api/categories: Retrieve all categories in JSON format.
- GET /api/categories/:id: Retrieve a specific category by its ID in JSON format.
 -POST /api/categories: Create a new category.
- PUT /api/categories/:id: Update a category.
- DELETE /api/categories/:id: Delete a category.

### Products

- GET /api/products: Retrieve all products in JSON format.
- GET /api/products/:id: Retrieve a specific product by its ID in JSON format.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update a product.
- DELETE /api/products/:id: Delete a product.

### Tags

- GET /api/tags: Retrieve all tags in JSON format.
- GET /api/tags/:id: Retrieve a specific tag by its ID in JSON format.
- POST /api/tags: Create a new tag.
- PUT /api/tags/:id: Update a tag.
- DELETE /api/tags/:id: Delete a tag.

## License

This project is licensed under the MIT License

## Contact

If you have any questions, suggestions, or need assistance with Pixel Market, feel free to contact me:

- GitHub: [PC-Vic](https://github.com/PC-Vic/Pixel-Market)
- Email: nievesvic86@gmail.com

I welcome your feedback and collaboration!
