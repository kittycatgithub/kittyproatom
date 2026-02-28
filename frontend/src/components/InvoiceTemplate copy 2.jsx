// components/InvoiceTemplate.tsx
import React, { forwardRef } from "react";

const InvoiceTemplate = forwardRef(({ order }, ref) => {
  const invoiceDate = order?.createdAt
    ? new Date(order.createdAt).toLocaleString()
    : "";

  const address = order?.address;

  const renderDetails = (details, category) => {
    if (!details) return null;

    return (
      <div style={{ fontSize: 12, marginTop: 4 }}>
        {details.occasion && (
          <div>
            <strong>Occasion:</strong> {details.occasion}
          </div>
        )}

        {details.date && (
          <div>
            <strong>Date:</strong> {details.date}
          </div>
        )}

        {details.time && (
          <div>
            <strong>Time:</strong> {details.time}
          </div>
        )}

        {/* ❌ Hide guests ONLY for bulk-delivery */}
        {category !== "bulk-delivery" && details.guests != null && (
          <div>
            <strong>Guests:</strong> {details.guests}
          </div>
        )}
      </div>
    );
  };

  const renderProductDetails = (productDetails) => {
    if (!productDetails || typeof productDetails !== "object") return "—";

    return Object.entries(productDetails).map(([name, info], idx) => (
      <div key={idx} style={{ fontSize: 12 }}>
        {name.replace(":", ": ")} – {info.qty} {info.unit}
      </div>
    ));
  };

  const renderSelectedOptions = (options) => {
    if (!options || typeof options !== "object") return "—";

    const validEntries = Object.entries(options).filter(
      ([_, value]) =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        !(Array.isArray(value) && value.length === 0),
    );

    if (validEntries.length === 0) return "—";

    return validEntries.map(([key, value], idx) => (
      <div key={idx} style={{ fontSize: 12 }}>
        <strong>{key}:</strong>{" "}
        {Array.isArray(value) ? value.join(", ") : String(value)}
      </div>
    ));
  };

  const grandTotal =
    order?.platters?.reduce((sum, p) => sum + Number(p?.offerPrice ?? 0), 0) ||
    0;

  return (
    <div
      ref={ref}
      id="invoice-template"
      style={{
        all: "initial", // 🔥 BLOCK Tailwind / oklch completely
        display: "block",
        width: "210mm",
        minHeight: "297mm",
        padding: "16mm",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        color: "#000000",
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
      }}
    >
      {/* ===== HEADER ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Baron Integrated Services Pvt Ltd</h2>
          <div style={{ fontSize: 12 }}>Nagpur Maharashtra 441108</div>
          <div style={{ fontSize: 12 }}>India</div>
          <div style={{ fontSize: 12 }}>GSTIN 27AAECB1220E1ZD</div>

          {/* <div style={{ fontSize: 12 }}>Chandra Nagar Lane Number 2,</div>
          <div style={{ fontSize: 12 }}>Bhagwan Nagar, Chandranagar,</div>
          <div style={{ fontSize: 12 }}>
            Rameshwari, Nagpur, Maharashtra - 440027, India
          </div> */}
          <div style={{ fontSize: 12 }}>Phone: +91 9096201044</div>
          {/* <div style={{ fontSize: 12 }}>GSTIN: XXXXXXXXXX</div> */}
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 700 }}>INVOICE</div>
          <div style={{ fontSize: 12 }}>#{order?.orderId ?? "—"}</div>
          {/* <div style={{ fontSize: 12 }}>{invoiceDate}</div> */}
        </div>
      </div>

      <hr />

      {/* ===== BILLING + META ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <div>
          <h4 style={{ margin: "6px 0" }}>Bill To</h4>

          {address && typeof address === "object" ? (
            <div style={{ fontSize: 13 }}>
              <div>
                <strong>
                  {address.firstName} {address.lastName}
                </strong>
              </div>
              <div>{address.address}</div>
              <div>
                {address.city}, {address.state}
              </div>
              <div>Phone: {address.phone}</div>
              <div>Email: {address.email}</div>
            </div>
          ) : (
            <div style={{ fontSize: 13 }}>{address ?? "—"}</div>
          )}
        </div>

        <div style={{ textAlign: "left", fontSize: 13 }}>
          <div>
            <strong>Payment:</strong> {order?.paymentType ?? "—"}
          </div>
          {/* <div>
              <strong>Status:</strong>{" "}
              {order?.isPaid ? "Paid" : "Unpaid"}
            </div> */}
          <div>
            <strong>Order:</strong> {order?.status ?? "—"}
          </div>
        </div>
      </div>

      {/* ===== ITEMS TABLE ===== */}
      <div style={{ marginTop: 16 }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>#</th>
              <th style={thStyle}>Details</th>
              <th style={thStyle}>Platter / Item</th>
              {/* <th style={thStyle}>
                {order?.platters?.some((p) => p.category === "bulk-delivery")
                  ? "Product Details"
                  : "Menu"}
              </th> */}
              <th style={thStyle}>Rate</th>
            </tr>
          </thead>
          <tbody>
            {order?.platters?.map((p, idx) => (
              <tr key={p?._id ?? idx}>
                <td style={tdStyle}>{idx + 1}</td>
                <td style={tdStyle}>
                  <div style={{ fontWeight: 600 }}>{p?.name}</div>

                  {/* DETAILS FOR ALL CATEGORIES */}
                  {renderDetails(p?.details, p?.category)}
                </td>

                {/* ===== NAME + DETAILS ===== */}
                <td style={tdStyle}>
                  {p?.category === "bulk-delivery" &&
                    renderProductDetails(p?.productDetails)}

                  {p?.category === "catering" &&
                    renderSelectedOptions(p?.selectedOptions)}

                  {p?.category !== "bulk-delivery" &&
                    p?.category !== "catering" &&
                    Array.isArray(p?.menu) &&
                    p.menu.join(", ")}
                </td>

                {/* CATEGORY */}
                {/* <td style={tdStyle}>{p?.category ?? "—"}</td> */}

                {/* TOTAL (offerPrice only) */}
                <td style={tdStyle}>
                  ₹{Number(p?.offerPrice ?? 0).toFixed(2)}
                </td>
              </tr>
            ))}

            {order?.items?.map((it, idx) => (
              <tr key={`item-${idx}`}>
                <td style={tdStyle}>
                  {(order?.platters?.length ?? 0) + idx + 1}
                </td>
                <td style={tdStyle}>{it?.name}</td>
                <td style={tdStyle}>—</td>
                <td style={tdStyle}>
                  {it?.options ? JSON.stringify(it.options) : "—"}
                </td>
                <td style={tdStyle}>₹{Number(it?.price ?? 0).toFixed(2)}</td>
                <td style={tdStyle}>
                  ₹{Number((it?.price ?? 0) * (it?.qty ?? 1)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== TOTAL ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 12,
        }}
      >
        <div style={{ width: 260 }}>
          {/* <div style={rowStyle}>
              <div>Subtotal</div>
              <div>
                ₹{Number(order?.storeamount ?? 0).toFixed(2)}
              </div>
            </div> */}
          <div style={{ ...rowStyle, fontWeight: 700 }}>
            <div>Grand Total</div>
            <div>₹{grandTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* ===== NOTE ===== */}
      {order?.note && order.note !== "none" && (
        <div style={{ marginTop: 18, fontSize: 13 }}>
          <strong>Note:</strong>
          <div>{order.note}</div>
        </div>
      )}

      {/* ===== FOOTER ===== */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          textAlign: "center",
          fontSize: 11,
        }}
      >
        Thank you for your order • support@example.com
      </div>
    </div>
  );
});

export default InvoiceTemplate;

/* ===== STYLES ===== */

const thStyle = {
  textAlign: "left",
  padding: "8px 6px",
  borderBottom: "1px solid #dddddd",
  fontSize: 12,
};

const tdStyle = {
  padding: "8px 6px",
  borderBottom: "1px dashed #eeeeee",
  verticalAlign: "top",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "6px 0",
};
