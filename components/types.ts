export type Theme = "minimal" | "dark" | "warm" | "slate";

export type Category =
  | "Restaurant / Cafe"
  | "Salon & Beauty"
  | "Retail Shop"
  | "Clinic / Health"
  | "Education / Academy"
  | "Events & Wedding"
  | "Furniture & Decor"
  | "Auto / Workshop"
  | "Other";

export interface BusinessData {
  name: string;
  tagline: string;
  category: Category | "";
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  hours: string;
  description: string;
  services: string; // comma separated
  theme: Theme;
}
