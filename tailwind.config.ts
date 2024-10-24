import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "custom-yellow": "0px 10px 20px 0px rgba(255, 216, 141, 0.50)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "10": "#7E7997",
          "20": "#27223E",
          "50": "#1A1531",
          "60": "#353147",
          "100": "#0A061E",
        },
        secondary: {
          "100": "#FFD88D",
        },
        white: {
          "100": "#DBD8E9",
        },
        yellow: {
          "10": "#FEE7BA",
          "100": "#B57700",
        },
        purple: {
          start: "#977FFF",
          end: "#6F4FFF",
          "100": "#CABDFF",
        },
        danger: "#FF5555",
        success: "#51EC96",
        blue: "#BDEBFF",
      },
    },
  },
  plugins: [],
};
export default config;
