const invoiceTemplate = (order, userName = "Customer") => {

  const itemsHTML = order.platters.map(item => `
    <tr>
      <td style="padding:10px 8px;border-bottom:1px solid #eaeaea;">
        ${item.name}
      </td>
      <td align="center" style="border-bottom:1px solid #eaeaea;">
        1
      </td>
      <td align="right" style="border-bottom:1px solid #eaeaea;">
        ₹${item.offerPrice}
      </td>
    </tr>
  `).join("");

  const subTotal = order.platters.reduce(
    (sum, i) => sum + (i.offerPrice || 0),
    0
  );

  const orderDate = new Date(order.createdAt || Date.now())
    .toLocaleString("en-IN");

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Invoice</title>
</head>

<body style="margin:0;background:#f2f6f8;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:20px 0;">

<table width="650" cellpadding="0" cellspacing="0"
  style="background:#ffffff;border-radius:6px;overflow:hidden;">

<!-- HEADER -->
<tr>
<td style="background:#0b5fa5;padding:18px;">
<img src="https://baronkitchen.com/baronfinalLogo.jpg" height="38" alt="BISPL Catering" />
</td>
</tr>

<!-- GREETING -->
<tr>
<td style="background:#0b5fa5;color:#ffffff;padding:16px 18px;">
<p style="margin:0;font-size:15px;">
Hi <strong>${userName}</strong>
</p>
<p style="margin:6px 0 0;font-size:13px;line-height:1.5;">
Thank you for choosing BISPL Catering. This email contains important information about your order.
</p>
</td>
</tr>

<!-- ORDER CONFIRMED -->
<tr>
<td style="background:#0b5fa5;padding:22px;color:#ffffff;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td width="56" valign="top">
<img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" width="46" />
</td>
<td>
<h2 style="margin:0;font-size:20px;">Order Confirmed</h2>
<p style="margin:6px 0 0;font-size:13px;opacity:0.9;">
Order No. ${order.orderId}<br/>
${orderDate}
</p>
</td>
</tr>
</table>
</td>
</tr>

<!-- SUMMARY -->
<tr>
<td style="background:#e9f4fb;padding:16px 18px;">
<table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
<tr>
<td style="padding-bottom:10px;">
<strong>Order Total</strong><br/>
₹${subTotal}
</td>
</tr>
<tr>
<td style="padding-bottom:10px;">
<strong>Payment Mode</strong><br/>
${order.paymentType}
</td>
</tr>
<tr>
<td>
<strong>Order Status</strong><br/>
Order Placed
</td>
</tr>
</table>
</td>
</tr>


<!-- ITEMS -->
<tr>
<td style="padding:18px;">
<table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
<tr style="background:#f5f5f5;color:#333;">
<th align="left" style="padding:10px 8px;">Items</th>
<th align="center" width="60" style="white-space:nowrap;">Qty</th>
<th align="right" width="90" style="padding-right:8px;white-space:nowrap;">
Price
</th>
</tr>
${itemsHTML}
</table>
</td>
</tr>


<!-- TOTAL -->
<tr>
<td style="padding:18px;">
<table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
<tr>
<td align="left">
<p style="margin:4px 0;color:#555;">
Sub Total : ₹${subTotal}
</p>
<p style="margin:6px 0;font-size:15px;">
<strong>Grand Total : ₹${subTotal}</strong>
</p>
</td>
</tr>
</table>
</td>
</tr>


<!-- FOOTER -->
<tr>
<td style="background:#f8f8f8;padding:16px 18px;
font-size:12px;color:#666;line-height:1.5;">
<strong>BISPL Catering</strong><br/>
This is a system generated invoice. Please save it for future reference.
</td>
</tr>

</table>

</td>
</tr>
</table>
</body>
</html>
`;
};

export default invoiceTemplate;
