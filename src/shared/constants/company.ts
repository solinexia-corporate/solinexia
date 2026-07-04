export const COMPANY = {
  name: "Solinexia",
  fullName: "Solinexia Corporate",
  tagline: "Solutions · Innovation · Excellence · Intelligence",
  phone: import.meta.env.VITE_WHATSAPP_NUMBER
    ? `+${import.meta.env.VITE_WHATSAPP_NUMBER}`
    : "+221 78 429 63 13",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "221784296313",
  email: import.meta.env.VITE_ADMIN_EMAIL || "solinexiacorporate@gmail.com",
  location: "Dakar, Sénégal",
  hours: "Lun – Sam : 8h – 20h",
  description:
    "Solinexia Corporate est un collectif de développeurs et techniciens passionnés, concevant des solutions numériques fiables, innovantes et utiles.",
} as const;
