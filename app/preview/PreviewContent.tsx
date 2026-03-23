"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BusinessPreview from "@/components/BusinessPreview";
import { BusinessData } from "@/components/types";
import Link from "next/link";

const EMPTY: BusinessData = {
  name: "", tagline: "", category: "", phone: "", whatsapp: "",
  email: "", address: "", city: "", hours: "", description: "", services: "", theme: "minimal",
};

function PreviewContent() {
  const params = useSearchParams();
  const [data, setData] = useState<BusinessData>(EMPTY);
  const [error, setError] = useState(false);

  useEffect(() => {
    const d = params.get("d");
    if (!d) { setError(true); return; }
    try {
      const parsed = JSON.parse(decodeURIComponent(atob(d)));
      setData(parsed);
    } catch {
      setError(true);
    }
  }, [params]);

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: "var(--bg)" }}>
        <p className="text-[14px]" style={{ color: "var(--muted)" }}>Invalid or expired link.</p>
        <Link href="/" className="text-[13px] underline underline-offset-2" style={{ color: "var(--text)" }}>
          Create your own profile →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-5" style={{ background: "var(--bg)" }}>
      <div className="max-w-md mx-auto">
        <div className="mb-6 text-center">
          <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Business Profile</p>
          <h1 className="font-serif text-2xl" style={{ color: "var(--text)" }}>{data.name || "..."}</h1>
        </div>

        <BusinessPreview data={data} />

        <div className="mt-6 text-center">
          <p className="text-[12px] mb-2" style={{ color: "var(--muted)" }}>Want a full website for your business?</p>
          <Link
            href="/"
            className="inline-block text-[12px] font-medium px-4 py-2 rounded-lg"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Create yours free →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PreviewPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PreviewContent />
    </Suspense>
  );
}
