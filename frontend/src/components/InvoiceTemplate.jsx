// components/InvoiceTemplate.tsx
import React, { forwardRef } from "react";
import { saleProducts } from '../assets/assets';

const InvoiceTemplate = forwardRef(({ order }, ref) => {
  const invoiceDate = order?.createdAt
    ? new Date(order.createdAt).toLocaleDateString('en-GB')
    : "";

  const address = order?.address;

  // Calculate totals and pricing breakdown
  const plattersTotal = Number(order?.platters?.reduce((sum, p) => sum + Number(p?.offerPrice ?? 0), 0) ?? 0);
  const storeItemsTotal = Number(order?.storeamount ?? 0);
  const currentGrandTotal = plattersTotal + storeItemsTotal;

  // Determine delivery charges: 52.5 if no platters (store only), 105 otherwise
  const hasPlatters = order?.platters?.length > 0;
  const deliveryCharges = hasPlatters ? 105 : 52.5;

  // Calculate subtotal (before GST and delivery) by reverse calculation
  const foodSubtotal = (currentGrandTotal - deliveryCharges) / 1.05;
  const gstAmount = foodSubtotal * 0.05;
  
  // Final grand total should remain the same
  const finalGrandTotal = foodSubtotal + gstAmount + deliveryCharges;

  return (
    <div
      ref={ref}
      id="invoice-template"
      style={{
        all: "initial",
        display: "block",
        width: "210mm",
        maxHeight: "297mm",
        padding: "8mm",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ===== HEADER ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
          paddingBottom: 6,
          borderBottom: "2px solid #333",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 14, lineHeight: "1.3" }}>Baron Integrated Services Pvt Ltd</h2>
          <div style={{ fontSize: 10, lineHeight: "1.4" }}>Nagpur Maharashtra - 441108</div>
          <div style={{ fontSize: 10, lineHeight: "1.4" }}>India</div>
          <div style={{ fontSize: 10, lineHeight: "1.4" }}>GSTIN 27AAECB1220E1ZD | Phone: +91 9096201044</div>
        </div>

        <div style={{ textAlign: "right", fontSize: 11, lineHeight: "1.4" }}>
          <div style={{ fontWeight: 700, fontSize: 12 }}>INVOICE</div>
          <div>#{order?.orderId ?? "—"}</div>
          <div style={{ fontSize: 10 }}>{invoiceDate}</div>
        </div>
      </div>

      {/* ===== BILLING + META ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          marginTop: 6,
          fontSize: 10,
        }}
      >
        <div>
          <h4 style={{ margin: "4px 0 2px 0", fontSize: 11 }}>Bill To</h4>

          {address && typeof address === "object" ? (
            <div>
              <div><strong>{address.firstName} {address.lastName}</strong></div>
              <div>{address.address}</div>
              <div>{address.city}, {address.state}</div>
              <div>Phone: {address.phone}</div>
              <div>Email: {address.email}</div>
            </div>
          ) : (
            <div>{address ?? "—"}</div>
          )}
        </div>

        <div style={{ textAlign: "left", fontSize: 10 }}>
          <div><strong>Payment:</strong> {order?.paymentType ?? "—"}</div>
          <div><strong>Status:</strong> {order?.status ?? "Order Placed"}</div>
        </div>
      </div>

      {/* <hr style={{ margin: "4px 0" }} /> */}

      {/* ===== ITEMS TABLE ===== */}
      <div style={{ marginTop: 18 }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0",
            fontSize: 10,
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Item Name</th>
              <th style={thStyle}>Details</th>
              <th style={thStyle}>Description</th>
              {/* <th style={thStyle}>Rate</th> */}
            </tr>
          </thead>
          <tbody>
            {/* ===== RENDER PLATTERS ===== */}
            {order?.platters?.map((p, idx) => (
              <tr key={p?._id ?? idx}>
                <td style={tdStyle}>{idx + 1}</td>
                <td style={tdStyle}>
                  <strong>{p?.name}</strong>
                </td>
                <td style={tdStyle}>
                  <div style={{ lineHeight: "1.5", marginBottom: "2px" }}>Occasion: {p?.details?.occasion || "Not Selected"}</div>
                  <div style={{ lineHeight: "1.5", marginBottom: "2px" }}>Date: {p?.details?.date || "—"}</div>
                  <div style={{ lineHeight: "1.5", marginBottom: "2px" }}>Guests: {p?.details?.guests || "1"}</div>
                  {/* <div style={{ lineHeight: "1.5" }}>Price/Platter: ₹{p?.details?.totalPrice || "NA"}</div> */}
                  <div style={{ lineHeight: "1.5" }}>Rate: ₹{p?.details?.totalPrice || "NA"}</div>
                </td>
                <td style={tdStyle}>
                  {/* Bulk Delivery Items */}
                  {p?.category === "bulk-delivery" &&
                    p?.productDetails &&
                    Object.entries(p.productDetails).map(([name, detail], idx) => (
                      <div key={idx} style={{ lineHeight: "1.5", marginBottom: "2px" }}>
                        {name} ⟶ {detail.qty} {detail.unit}
                      </div>
                    ))}

                  {/* Non-Bulk items (Catering, Snack Box, etc.) */}
                  {p?.category !== "bulk-delivery" && (
                    <div>
                      {/* Snack Box Special Message */}
                      {(p?.name === 'Snack Box A' || p?.name === 'Snack Box B') && (
                        <div style={{ lineHeight: "1.5", marginBottom: "2px" }}>
                          Tissue paper and Sauce Pouches
                        </div>
                      )}

                      {/* Selected Options */}
                      {p?.selectedOptions && typeof p.selectedOptions === "object" ? (
                        Object.entries(p.selectedOptions)
                          .filter(([_, value]) => {
                            if (value === null || value === undefined) return false;
                            if (Array.isArray(value)) {
                              return value.some(v => v !== null && v !== "" && (typeof v !== "object" || Object.values(v).some(x => x)));
                            }
                            if (typeof value === "object") {
                              return Object.values(value).some(v => v !== null && v !== "");
                            }
                            return value !== "";
                          })
                          .map(([key, value], idx) => {
                            let displayValue = "";

                            if (Array.isArray(value)) {
                              displayValue = value
                                .filter(v => v !== null && v !== "")
                                .map(v => {
                                  if (typeof v === "object" && v !== null) {
                                    const objVal = Object.values(v).filter(x => x !== null && x !== "").join(", ");
                                    return objVal || null;
                                  }
                                  return v;
                                })
                                .filter(Boolean)
                                .join(", ");
                            } else if (typeof value === "object" && value !== null) {
                              displayValue = Object.values(value)
                                .filter(v => v !== null && v !== "")
                                .join(", ");
                            } else {
                              displayValue = String(value);
                            }

                            if (!displayValue) return null;
                            return (
                              <div key={idx} style={{ lineHeight: "1.5", marginBottom: "2px" }}>
                                {key} ⟶ {displayValue}
                              </div>
                            );
                          })
                      ) : typeof p.selectedOptions === "string" && p.selectedOptions.trim() !== "" ? (
                        <div style={{ lineHeight: "1.5", marginBottom: "2px" }}>{p.selectedOptions}</div>
                      ) : null}

                      {/* Menu Fallback - show if no selectedOptions */}
                      {(!p.selectedOptions || Object.keys(p.selectedOptions).length === 0) &&
                        p?.menu?.length > 0 &&
                        p.menu.map((menuItem, idx) => (
                          <div key={idx} style={{ lineHeight: "1.5", marginBottom: "2px" }}>{menuItem}</div>
                        ))}
                    </div>
                  )}
                </td>
                {/* <td style={tdStyle}>₹{Number(p?.offerPrice ?? 0).toFixed(2)}</td> */}
              </tr>
            ))}

            {/* ===== RENDER STORE ITEMS ===== */}
            {order?.items?.map((it, idx) => {
              const matchedProduct = saleProducts.find(p => p._id === it.product);
              return (
                <tr key={`item-${idx}`}>
                  <td style={tdStyle}>{(order?.platters?.length ?? 0) + idx + 1}</td>
                  <td style={tdStyle}>
                    <strong>{matchedProduct?.name || it?.name}</strong>
                  </td>
                  <td style={tdStyle}>Qty: {it?.quantity}</td>
                  <td style={tdStyle}>—</td>
                  {/* <td style={tdStyle}>₹{(Number(it?.price ?? 0) * (it?.quantity || 1)).toFixed(2)}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ===== TOTAL ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 6,
          borderTop: "1px solid #333",
          paddingTop: "8px",
        }}
      >
        <div style={{ width: 220, fontSize: 10 }}>
          {/* Food Subtotal */}
          <div style={rowStyle}>
            <div>Subtotal:</div>
            <div>₹{foodSubtotal.toFixed(2)}</div>
          </div>

          {/* GST 5% */}
          <div style={rowStyle}>
            <div>GST (5% on food):</div>
            <div>₹{gstAmount.toFixed(2)}</div>
          </div>

          {/* Delivery Charges */}
          <div style={rowStyle}>
            <div>Delivery Charges:</div>
            <div>₹{deliveryCharges.toFixed(2)}</div>
          </div>

          {/* Store Items (if any) */}
          {storeItemsTotal > 0 && (
            <div style={rowStyle}>
              <div>Store Items:</div>
              <div>₹{storeItemsTotal.toFixed(2)}</div>
            </div>
          )}

          {/* Grand Total */}
          <div style={{ ...rowStyle, fontWeight: 700, fontSize: 11, borderTop: "1px solid #666", paddingTop: "2px", marginTop: "8px" }}>
            <div>Grand Total</div>
            <div>₹{finalGrandTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* ===== NOTE ===== */}
      {order?.note && order.note !== "none" && (
        <div style={{ marginTop: 6, fontSize: 10, padding: "6px 8px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "3px", lineHeight: "1.4" }}>
          <strong>Additional Note:</strong> {order.note}
        </div>
      )}

      {order?.note === "none" && (
        <div style={{ marginTop: 6, fontSize: 10, padding: "6px 8px", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "3px", lineHeight: "1.4" }}>
          <strong>Additional Note:</strong> Not Mentioned
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <div
        style={{
          position: "absolute",
          bottom: 6,
          left: 8,
          right: 8,
          textAlign: "center",
          fontSize: 8,
          borderTop: "1px dashed #ccc",
          paddingTop: 3,
        }}
      >
        Thank you for your order! | +91 9096201044
      </div>
    </div>
  );
});

export default InvoiceTemplate;

/* ===== STYLES ===== */
const thStyle = {
  textAlign: "left",
  padding: "6px 8px",
  borderBottom: "2px solid #333",
  fontSize: 9,
  fontWeight: "bold",
  backgroundColor: "#f5f5f5",
  lineHeight: "1.4",
};

const tdStyle = {
  padding: "6px 8px",
  borderBottom: "1px solid #ccc",
  verticalAlign: "top",
  fontSize: 9,
  lineHeight: "1.4",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "3px 0",
};
