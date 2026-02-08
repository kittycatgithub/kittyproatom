import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import InvoiceTemplate from "./InvoiceTemplate";
import { Link } from "react-router-dom";

const DownloadInvoiceButton = ({ order, fileName }) => {
  const invoiceRef = useRef(null); // ✅ single ref

  const handleDownload = async () => {
    if (!invoiceRef.current) {
      console.error("Invoice ref not found");
      return;
    }

    try {
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(fileName || `Invoice_${order?.orderId || Date.now()}.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to generate invoice PDF");
    }
  };

  return (
    <>
      {/* Hidden but renderable invoice */}
      <div
        style={{
          position: "fixed",
          left: "-10000px",
          top: 0,
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            position: "fixed",
            left: "-10000px",
            top: 0,
            backgroundColor: "#ffffff",
          }}
        >
          <InvoiceTemplate ref={invoiceRef} order={order} />
        </div>
      </div>
      <Link
        onClick={handleDownload}
        className="relative px-4 py-1 rounded-full overflow-hidden group border-2 border-primary text-primary-dull hover:text-white inline-block"
      >
        <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
        <span className="relative z-10 group-hover:text-white">
          Generate Invoice
        </span>
      </Link>

      {/* <button
        type="button"
        
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Generate Invoice
      </button> */}
    </>
  );
};

export default DownloadInvoiceButton;
