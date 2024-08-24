import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgCoin: "#0098EA",
        bgButton: "#148bf9",
        bgBtNav: "#131315",
        bgBtButton: "#848485",
        bgMidd: "#032a57",
        bgMain: "#0B0B0C",
        topShadow: "#152d6e",
      },
    },
  },
  plugins: [],
};
export default config;
