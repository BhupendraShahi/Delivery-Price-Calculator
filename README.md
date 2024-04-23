# Food Delivery API
This repository contains the backend code for a food delivery app, including a dynamic pricing module built with Node.js, Express, and PostgreSQL.

## Features
- Dynamic Pricing Module: Calculate delivery costs based on distance and item type.
- RESTful API: Provides endpoints for calculating delivery costs and managing organizations, items, and pricing.
- PostgreSQL Database: Stores organizations, items, and pricing data.
- Swagger Documentation: API endpoints are documented using Swagger.

## Installation
1. Clone the repository:
https://github.com/BhupendraShahi/delivery-price-calculator.git

2. Install dependencies:
cd food-delivery-api
npm install

3. Set up PostgreSQL database and update config/dbConfig.js with your database configuration.

4. Start the server:
npm start

# API Documentation
The API endpoints are documented using Swagger. After starting the server, you can access the Swagger documentation at http://localhost:{PORT}/.

## Usage
# Calculate Delivery Cost
Send a POST request to /api/calculate-price with the following payload:
{
  "zone": "central", // two options central/suburban
  "organization_id": "03", // "01", "02","03"
  "total_distance": 12, // if <= 5 cost 10, if > 5 then cost + 1.5/km(if perishable) else 1/km(if non-perishable)
  "item_type": "perishable" //perishable/non-perishable
}

The response will include the total price for the delivery in cents. ($20 => 2000 cents)

## Manage Organizations, Items, and Pricing
Use the provided API endpoints to manage organizations, items, and pricing data.

# Contributing
Contributions are welcome! Please follow these steps:
Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new Pull Request.

License
This project is licensed under the MIT License.
