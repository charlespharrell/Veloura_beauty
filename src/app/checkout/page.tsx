"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";

const formatUSD = (price?: number) => {
  if (typeof price !== "number" || Number.isNaN(price)) {
    return "$0.00";
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

interface FormData {
  fullName: string;
  phone: string;
  address: string;
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
  }, []);

  const orderRef = useMemo(() => {
    if (typeof window === "undefined") return "";
    const existing = sessionStorage.getItem("veloura_order_ref");
    if (existing) return existing;
    const ref = `VL-${Math.random().toString(36).slice(2, 8).toUpperCase()}-${Date.now().toString().slice(-4)}`;
    return ref;
  }, []);

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
              Checkout
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
              Your bag is empty
            </h1>
          </div>
          <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] px-6 py-10 text-center">
            <p className="text-sm text-[#79685B]">
              Add items to your bag before checking out.
            </p>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-block border border-[#A47C4F] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#A47C4F] transition hover:bg-[#A47C4F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const validate = () => {
    const nextErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.address.trim()) nextErrors.address = "Delivery address is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      if (typeof window !== "undefined") {
        const ref = `VL-${Math.random().toString(36).slice(2, 8).toUpperCase()}-${Date.now().toString().slice(-4)}`;
        sessionStorage.setItem("veloura_order_ref", ref);
        sessionStorage.setItem("veloura_order_items", JSON.stringify(items));
        sessionStorage.setItem("veloura_order_subtotal", subtotal.toString());
        sessionStorage.setItem("veloura_order_customer", JSON.stringify(form));
      }
      clearCart();
      window.location.href = "/checkout/confirmation";
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F1E9] text-[#49372D]">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A47C4F]">
            Checkout
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl">
            Complete your order
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#79685B]">
            This is a demonstration checkout. No payment is processed.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] p-6">
              <h2 className="font-[family-name:var(--font-serif)] text-xl">Delivery details</h2>
              <div className="mt-4 grid gap-4">
                <div>
                  <label htmlFor="fullName" className="text-sm text-[#49372D]">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="mt-2 w-full border border-[#D7BEA0]/70 bg-white px-4 py-2 text-sm text-[#49372D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                  />
                  {errors.fullName ? (
                    <p className="mt-1 text-xs text-[#A47C4F]">{errors.fullName}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm text-[#49372D]">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full border border-[#D7BEA0]/70 bg-white px-4 py-2 text-sm text-[#49372D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-[#A47C4F]">{errors.phone}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="address" className="text-sm text-[#49372D]">
                    Delivery address
                  </label>
                  <textarea
                    id="address"
                    rows={4}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="mt-2 w-full border border-[#D7BEA0]/70 bg-white px-4 py-2 text-sm text-[#49372D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
                  />
                  {errors.address ? (
                    <p className="mt-1 text-xs text-[#A47C4F]">{errors.address}</p>
                  ) : null}
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#A47C4F] px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#96744D] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A47C4F]/70"
            >
              {submitting ? "Placing order..." : "Place Order"}
            </button>
          </form>
          <div className="border border-[#D7BEA0]/70 bg-[#FCF8F3] p-6 h-fit">
            <h2 className="font-[family-name:var(--font-serif)] text-xl">Order summary</h2>
            <div className="mt-4 space-y-3">
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
            <div className="mt-4 border-t border-[#D7BEA0]/60 pt-4 flex items-center justify-between text-sm">
              <span className="text-[#79685B]">Subtotal</span>
              <span className="text-[#49372D]">{formatUSD(subtotal)}</span>
            </div>
            <p className="mt-4 text-xs text-[#79685B]">
              This confirmation exists only in your browser and is not transmitted to anyone.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
