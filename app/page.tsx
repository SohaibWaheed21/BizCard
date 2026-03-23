"use client";
import { useState, useCallback } from "react";
import BusinessForm from "@/components/BusinessForm";
import BusinessPreview from "@/components/BusinessPreview";
import { BusinessData } from "@/components/types";

const DEFAULT: BusinessData = {
  name: "",
  tagline: "",
  category: "",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  city: "",
  hours: "",
  description: "",
  services: "",
  theme: "minimal",
};

export default function Home() {
  const [data, setData] = useState<BusinessData>(DEFAULT);
  const [copied, setCopied] = useState(false);

  const handleChange = useCallback((next: BusinessData) => setData(next), []);

  const handleReset = () => setData(DEFAULT);

  const handleCopyLink = () => {
    // Encode the business data as a URL param for sharing
    const encoded = btoa(encodeURIComponent(JSON.stringify(data)));
    const url = `${window.location.origin}/preview?d=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isReady = data.name.trim().length > 0;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>

      {/* Top nav */}
      <header className="border-b sticky top-0 z-10 backdrop-blur-sm" style={{ borderColor: "var(--border)", background: "rgba(248,247,244,0.9)" }}>
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
              <span className="text-white text-xs font-bold">B</span>
            </div>
            <span className="text-[14px] font-medium tracking-tight" style={{ color: "var(--text)" }}>BizCard</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full border text-[var(--muted)] border-[var(--border)] hidden sm:inline">
              Free Business Profile Generator
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isReady && (
              <>
                <button
                  onClick={handleCopyLink}
                  className="text-[12px] px-3 py-1.5 rounded-lg border transition-all hover:bg-white"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  {copied ? "✓ Copied!" : "Share Link"}
                </button>
                <button
                  onClick={handleReset}
                  className="text-[12px] px-3 py-1.5 rounded-lg border transition-all hover:bg-white"
                  style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                >
                  Reset
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-5 pt-10 pb-6">
        <div className="max-w-xl">
          <h1 className="font-serif text-3xl sm:text-4xl leading-tight mb-2" style={{ color: "var(--text)" }}>
            Create your business profile<br />
            <span style={{ color: "var(--muted)" }}>in under a minute.</span>
          </h1>
          <p className="text-[13px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Fill in your details on the left. Your professional profile updates live on the right.
            No account needed — completely free.
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-5 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Form panel */}
          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "var(--muted)" }}>
                Business Details
              </h2>
              <span className="text-[11px]" style={{ color: "var(--muted)" }}>
                * required
              </span>
            </div>
            <BusinessForm data={data} onChange={handleChange} />
          </div>

          {/* Preview panel */}
          <div className="lg:sticky lg:top-20">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[11px] uppercase tracking-widest font-medium" style={{ color: "var(--muted)" }}>
                Live Preview
              </h2>
              {isReady && (
                <span
                  className="text-[11px] px-2 py-0.5 rounded-full"
                  style={{ background: "#dcfce7", color: "#166534" }}
                >
                  ● Live
                </span>
              )}
            </div>
            <BusinessPreview data={data} />

            {isReady && (
              <div
                className="mt-4 rounded-xl p-4 text-center"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <p className="text-[12px] mb-3" style={{ color: "var(--muted)" }}>
                  Want a full website like this for your business?
                </p>
                <a
                  href="mailto:sohaibwaheed06@gmail.com?subject=I want a website for my business"
                  className="inline-block text-[12px] font-medium px-4 py-2 rounded-lg transition-opacity hover:opacity-80"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  Get a Real Website →
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-6" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px]" style={{ color: "var(--muted)" }}>
            Built by <a href="https://www.linkedin.com/in/sohaib-waheed-650343369/" target="_blank" className="underline underline-offset-2">Sohaib Waheed</a> — Web Developer
          </p>
          <p className="text-[11px]" style={{ color: "var(--muted)" }}>
            Free tool for local businesses
          </p>
        </div>
      </footer>

    </div>
  );
}
