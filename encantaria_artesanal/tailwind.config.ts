import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Encantaria Artesanal
        "rosa-queimado": "#B65B61",
        "rosa-claro": "#E8B7B7",
        vinho: "#6F2638",
        creme: "#F4E8D7",
        dourado: "#C99A4A",
        cobre: "#B86B38",
        marrom: "#3A241F",
        "ameixa-profundo": "#1B1016",
        "verde-erva": "#7A7B52",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(58, 36, 31, 0.25)",
        glow: "0 0 60px -12px rgba(201, 154, 74, 0.45)",
      },
      backgroundImage: {
        "pergaminho":
          "radial-gradient(circle at 20% 20%, rgba(232,183,183,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(201,154,74,0.14), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
