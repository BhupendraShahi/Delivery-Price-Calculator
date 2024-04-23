const client = require("../config/dbCongif");

async function fetchPricingDetails(organizationId, zone, itemType) {
  const query = `
    SELECT base_distance_in_km, km_price, fix_price
    FROM pricing
    WHERE organization_id = $1 AND zone = $2 AND item_id = (
      SELECT id FROM items 
      WHERE type = $3
    );
  `;
  
  try {
    const { rows } = await client.query(query, [organizationId, zone, itemType]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchPricingDetails };