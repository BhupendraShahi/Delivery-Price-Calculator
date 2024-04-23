const { fetchPricingDetails } = require("../lib/pricingQueries");

async function calculatePrice(req, res) {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;

    // Fetch pricing details from the database based on organization, item, and zone
    const rows = await fetchPricingDetails(organization_id, zone, item_type);

    if (rows.length == 0) {
      return res
        .status(404)
        .json({ error: "not fount in DB please input correct values" });
    }
    // Calculate total price
    let totalPrice = 0;
    const { base_distance_in_km, km_price, fix_price } = rows[0];
    if (total_distance <= base_distance_in_km) {
      totalPrice = parseInt(fix_price);
    } else {
      totalPrice =
        parseFloat(fix_price) +
        (total_distance - base_distance_in_km) * parseFloat(km_price);
    }

    // Send response
    res.json({ total_price: totalPrice * 100 }); // Convert to cents to avoid decimal issues
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { calculatePrice };
