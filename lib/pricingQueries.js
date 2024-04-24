const client = require("../config/dbConfig");

async function fetchPricingDetails(organizationId, zone, itemType) {
  client.connect();
  console.log("Connected to the database");
  const query = `
    SELECT base_distance_in_km, km_price, fix_price
    FROM pricing
    WHERE organization_id = $1 AND zone = $2 AND item_id = (
      SELECT id FROM items 
      WHERE type = $3
    );
  `;

  try {
    const { rows } = await client.query(query, [
      organizationId,
      zone,
      itemType,
    ]);
    client.end();
    return rows;
  } catch (error) {
    throw error;
  } finally {
    client.end();
    console.log("Database connection closed");
  }
}

module.exports = { fetchPricingDetails };
