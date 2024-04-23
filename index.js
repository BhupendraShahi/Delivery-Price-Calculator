const express = require("express");
const bodyParser = require("body-parser");
const YAML = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("./swagger.yaml");
const client = require("./config/dbCongif");
const pricingRoutes = require("./routes/pricingRoutes");
const { configDotenv } = require("dotenv");

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

configDotenv();
client.connect();

// Use bodyParser middleware for parsing JSON bodies
app.use(bodyParser.json());

// Define routes
app.use("/api", pricingRoutes);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
