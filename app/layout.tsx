import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizCard — Business Profile Generator",
  description: "Generate a professional business profile page in seconds. Perfect for local businesses without a website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
