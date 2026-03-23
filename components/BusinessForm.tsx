"use client";
import { BusinessData, Category, Theme } from "./types";

const CATEGORIES: Category[] = [
  "Restaurant / Cafe",
  "Salon & Beauty",
  "Retail Shop",
  "Clinic / Health",
  "Education / Academy",
  "Events & Wedding",
  "Furniture & Decor",
  "Auto / Workshop",
  "Other",
];

const THEMES: { id: Theme; label: string; colors: string }[] = [
  { id: "minimal", label: "Minimal", colors: "bg-white border border-gray-200" },
  { id: "dark",    label: "Dark",    colors: "bg-zinc-900 border border-zinc-700" },
  { id: "warm",    label: "Warm",    colors: "bg-amber-50 border border-amber-200" },
  { id: "slate",   label: "Slate",   colors: "bg-slate-100 border border-slate-300" },
];

interface Props {
  data: BusinessData;
  onChange: (data: BusinessData) => void;
}

export default function BusinessForm({ data, onChange }: Props) {
  const set = (field: keyof BusinessData, value: string) =>
    onChange({ ...data, [field]: value });

  return (
    <div className="space-y-6">

      {/* Business Identity */}
      <section>
        <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">Identity</p>
        <div className="space-y-3">
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Business Name *</label>
            <input
              value={data.name}
              onChange={e => set("name", e.target.value)}
              placeholder="e.g. Ahmed's Cafe"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Tagline</label>
            <input
              value={data.tagline}
              onChange={e => set("tagline", e.target.value)}
              placeholder="e.g. Fresh food, fast service"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Category</label>
            <select
              value={data.category}
              onChange={e => set("category", e.target.value)}
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none"
            >
              <option value="">Select a category</option>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">Contact</p>
        <div className="space-y-3">
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Phone</label>
            <input
              value={data.phone}
              onChange={e => set("phone", e.target.value)}
              placeholder="e.g. 0300 1234567"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">WhatsApp</label>
            <input
              value={data.whatsapp}
              onChange={e => set("whatsapp", e.target.value)}
              placeholder="e.g. 0300 1234567"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Email</label>
            <input
              value={data.email}
              onChange={e => set("email", e.target.value)}
              placeholder="e.g. info@ahmedscafe.com"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section>
        <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">Location</p>
        <div className="space-y-3">
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Address</label>
            <input
              value={data.address}
              onChange={e => set("address", e.target.value)}
              placeholder="e.g. 12-B, Main Boulevard"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">City / Area</label>
            <input
              value={data.city}
              onChange={e => set("city", e.target.value)}
              placeholder="e.g. Gulberg, Lahore"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Working Hours</label>
            <input
              value={data.hours}
              onChange={e => set("hours", e.target.value)}
              placeholder="e.g. Mon–Sat, 10am – 10pm"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section>
        <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">About</p>
        <div className="space-y-3">
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Description</label>
            <textarea
              value={data.description}
              onChange={e => set("description", e.target.value)}
              placeholder="Tell customers what makes your business special..."
              rows={3}
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
            />
          </div>
          <div>
            <label className="block text-[11px] text-[var(--muted)] mb-1">Services / Products <span className="text-[var(--muted)]">(comma separated)</span></label>
            <input
              value={data.services}
              onChange={e => set("services", e.target.value)}
              placeholder="e.g. Dine-in, Takeaway, Catering, Home Delivery"
              className="w-full bg-white border border-[var(--border)] rounded-lg px-3 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Theme */}
      <section>
        <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3">Theme</p>
        <div className="grid grid-cols-4 gap-2">
          {THEMES.map(t => (
            <button
              key={t.id}
              onClick={() => set("theme", t.id)}
              className={`rounded-lg py-2.5 text-[11px] font-medium transition-all ${t.colors} ${
                data.theme === t.id ? "ring-2 ring-offset-1 ring-[var(--accent)]" : "opacity-70 hover:opacity-100"
              }`}
              style={{ color: t.id === "dark" ? "#f0ede8" : "#1a1a1a" }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
