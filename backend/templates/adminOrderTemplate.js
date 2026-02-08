 const adminOrderTemplate = (order, user) => {
  const items = order.platters.map(
    (p, i) => `
      <li>
        ${p.name} | Guests: ${p.guests} | ₹${p.price * p.guests}
      </li>
    `
  ).join("");

  return `
    <h2>🛎️ New Order Received</h2>

    <p><strong>Order ID:</strong> ${order.orderId}</p>
    <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleString()}</p>

    <h3>Customer Details</h3>
    <p>
      Name: ${user.name || "N/A"} <br/>
      Email: ${user.email} <br/>
      Phone: ${user.mobile || "N/A"}
    </p>

    <h3>Delivery Address</h3>
    <p>${order.address.fullAddress}</p>

    <h3>Order Items</h3>
    <ul>${items}</ul>

    <p><strong>Payment:</strong> COD</p>
    <p><strong>Note:</strong> ${order.note || "-"}</p>
  `;
};

export default adminOrderTemplate;
