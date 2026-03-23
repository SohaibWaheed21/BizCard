"use client";
import { BusinessData } from "./types";

interface Props {
  data: BusinessData;
}

const CATEGORY_EMOJI: Record<string, string> = {
  "Restaurant / Cafe": "🍽️",
  "Salon & Beauty": "✂️",
  "Retail Shop": "🛍️",
  "Clinic / Health": "🏥",
  "Education / Academy": "📚",
  "Events & Wedding": "🎉",
  "Furniture & Decor": "🪑",
  "Auto / Workshop": "🔧",
  "Other": "🏢",
};

export default function BusinessPreview({ data }: Props) {
  const services = data.services
    ? data.services.split(",").map(s => s.trim()).filter(Boolean)
    : [];

  const isEmpty = !data.name;

  const whatsappLink = data.whatsapp
    ? `https://wa.me/${data.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <div className={`theme-${data.theme} h-full`}>
      <div
        className="rounded-2xl overflow-hidden h-full flex flex-col"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          color: "var(--card-text)",
          minHeight: "520px",
        }}
      >
        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-12 h-12 rounded-full border-2 border-dashed mb-4 flex items-center justify-center" style={{ borderColor: "var(--card-border)" }}>
              <span className="text-xl">🏢</span>
            </div>
            <p className="text-[13px] font-medium mb-1" style={{ color: "var(--card-muted)" }}>
              Your preview will appear here
            </p>
            <p className="text-[11px]" style={{ color: "var(--card-muted)" }}>
              Start filling in the form on the left
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-6 pb-5" style={{ borderBottom: "1px solid var(--card-border)" }}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {data.category && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-sm">{CATEGORY_EMOJI[data.category] || "🏢"}</span>
                      <span className="text-[10px] uppercase tracking-widest font-medium" style={{ color: "var(--card-muted)" }}>
                        {data.category}
                      </span>
                    </div>
                  )}
                  <h1 className="font-serif text-2xl leading-tight mb-1" style={{ color: "var(--card-text)" }}>
                    {data.name || "Business Name"}
                  </h1>
                  {data.tagline && (
                    <p className="text-[13px]" style={{ color: "var(--card-muted)" }}>
                      {data.tagline}
                    </p>
                  )}
                </div>
                {/* Initials badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ background: "var(--card-tag-bg)", color: "var(--card-accent)" }}
                >
                  {data.name ? data.name.charAt(0).toUpperCase() : "?"}
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-6 space-y-5 overflow-y-auto">

              {/* Description */}
              {data.description && (
                <div>
                  <p className="text-[11px] uppercase tracking-widest mb-2 font-medium" style={{ color: "var(--card-muted)" }}>About</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--card-text)" }}>
                    {data.description}
                  </p>
                </div>
              )}

              {/* Services */}
              {services.length > 0 && (
                <div>
                  <p className="text-[11px] uppercase tracking-widest mb-2 font-medium" style={{ color: "var(--card-muted)" }}>Services</p>
                  <div className="flex flex-wrap gap-1.5">
                    {services.map((s, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                        style={{ background: "var(--card-tag-bg)", color: "var(--card-accent)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Info */}
              <div>
                <p className="text-[11px] uppercase tracking-widest mb-2 font-medium" style={{ color: "var(--card-muted)" }}>Contact</p>
                <div className="space-y-1.5">
                  {data.phone && (
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm w-5">📞</span>
                      <span className="text-[13px]" style={{ color: "var(--card-text)" }}>{data.phone}</span>
                    </div>
                  )}
                  {data.whatsapp && (
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm w-5">💬</span>
                      <span className="text-[13px]" style={{ color: "var(--card-text)" }}>{data.whatsapp}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--card-tag-bg)", color: "var(--card-muted)" }}>WhatsApp</span>
                    </div>
                  )}
                  {data.email && (
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm w-5">✉️</span>
                      <span className="text-[13px]" style={{ color: "var(--card-text)" }}>{data.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Location */}
              {(data.address || data.city) && (
                <div>
                  <p className="text-[11px] uppercase tracking-widest mb-2 font-medium" style={{ color: "var(--card-muted)" }}>Location</p>
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm w-5 mt-0.5">📍</span>
                    <div>
                      {data.address && <p className="text-[13px]" style={{ color: "var(--card-text)" }}>{data.address}</p>}
                      {data.city && <p className="text-[13px]" style={{ color: "var(--card-text)" }}>{data.city}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Hours */}
              {data.hours && (
                <div>
                  <p className="text-[11px] uppercase tracking-widest mb-2 font-medium" style={{ color: "var(--card-muted)" }}>Hours</p>
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm w-5">🕐</span>
                    <span className="text-[13px]" style={{ color: "var(--card-text)" }}>{data.hours}</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA Footer */}
            {data.whatsapp && (
              <div className="p-4" style={{ borderTop: "1px solid var(--card-border)" }}>
                <a
                  href={whatsappLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-medium transition-opacity hover:opacity-90"
                  style={{ background: "var(--card-accent)", color: "var(--card-bg)" }}
                >
                  <span>💬</span>
                  Message on WhatsApp
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
