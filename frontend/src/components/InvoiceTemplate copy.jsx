// InvoiceTemplate.jsx
import React, { forwardRef } from "react";

const InvoiceTemplate = forwardRef(({ order }, ref) => {
  const a = order.address;
  const p = order.platters[0];

  return (
    <div ref={ref} className="p-10 w-[700px] text-black">
      <h1 className="text-3xl font-bold mb-4">INVOICE</h1>

      <div className="flex felx-row justify-between">
        <div>
            <p><b>Invoice No:</b> {order.orderId}</p>
            <p><b>Date:</b> {new Date(order.createdAt).toLocaleString()}</p>
            <p><b>Payment:</b> {order.paymentType}</p>
            <p><b>Status:</b> {order.status}</p>
        </div>
        <div>
            <h2 className="text-xl font-semibold">Order Details</h2>
            <p><b>Platter:</b> {p.name}</p>
            <p><b>Guests:</b> {p.details.guests}</p>
            <p><b>Date:</b> {p.details.date}</p>
            <p><b>Time:</b> {p.details.time}</p>
            <p><b>Amount:</b> ₹{p.offerPrice}</p>
            {/* <p><b>Total Price:</b> ₹{p.totalPrice}</p> */}
        </div>
      </div>      
    <h2 className="text-xl font-semibold">Customer Details</h2>
            <p>{a.firstName} {a.lastName}</p>
            <p>{a.address}</p>
            <p>{a.city}, {a.state}</p>
            <p>{a.phone}</p>
            <p>{a.email}</p>
      
      <h2 className="text-xl font-semibold mt-6">Menu</h2>
      <ul className="list-disc ml-5">
        {p.menu.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Note</h2>
      <p>{order.note || "N/A"}</p>

      <p className="mt-10 text-center text-gray-700">
        Thank you for choosing BISPL Catering Services!
      </p>
    </div>
  );
});

export default InvoiceTemplate;
