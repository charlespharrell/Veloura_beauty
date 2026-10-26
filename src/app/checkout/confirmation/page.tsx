"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const formatUSD = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price?: number;
}

interface Customer {
  fullName: string;
  phone: string;
  address: string;
}

export default function CheckoutConfirmationPage() {
  const [orderRef, setOrderRef] = useState("");
  const [items, setItems] = useState<OrderItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ref = sessionStorage.getItem("veloura_order_ref") || "";
    const itemsRaw = sessionStorage.getItem("veloura_order_items");
    const subtotalRaw = sessionStorage.getItem("veloura_order_subtotal");
    const customerRaw = sessionStorage.getItem("veloura_order_customer");

    setOrderRef(ref);
    if (itemsRaw) {
      try {
        setItems(JSON.parse(itemsRaw));
      } catch {
        setItems([]);
      }
    }
    if (subtotalRaw) {
      const parsed = parseFloat(subtotalRaw);
      setSubtotal(Number.isNaN(parsed) ? 0 : parsed);
    }
    if (customerRaw) {
      try {
        setCustomer(JSON.parse(customerRaw));
      } catch {
        setCustomer(null);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            Confirmation
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
            Thank You for Your Order
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#79685B]">
            This is an order confirmation from the website, not a payment receipt.
          </p>
        </div>
        <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-[#79685B]">Order reference</p>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-lg">{orderRef || "—"}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#79685B]">Total amount</p>
              <p className="mt-1 text-lg text-[#49372D]">{formatUSD(subtotal)}</p>
            </div>
          </div>
          {customer ? (
            <div className="mt-6 border-t border-[#D7BEA0]/60 pt-6">
              <h2 className="font-[family-name:var(--font-serif)] text-lg">Customer details</h2>
              <div className="mt-3 space-y-1 text-sm text-[#49372D]">
                <p>{customer.fullName}</p>
                <p>{customer.phone}</p>
                <p className="whitespace-pre-line">{customer.address}</p>
              </div>
            </div>
          ) : null}
          <div className="mt-6 border-t border-[#D7BEA0]/60 pt-6">
            <h2 className="font-[family-name:var(--font-serif)] text-lg">Order summary</h2>
            <div className="mt-3 space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-[#49372D]">{item.name}</p>
                    <p className="text-xs text-[#79685B]">Qty {item.quantity}</p>
                  </div>
                  <p className="text-[#49372D]">
                    {formatUSD((typeof item.price === "number" ? item.price : 0) * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-[#79685B]">Subtotal</span>
              <span className="text-[#49372D]">{formatUSD(subtotal)}</span>
            </div>
          </div>
          <p className="mt-6 text-xs text-[#79685B]">
            This confirmation exists only in the browser and is not transmitted to anyone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="border border-[#A47C4F] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="bg-[#A47C4F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
