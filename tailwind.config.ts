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
        bgMidd: "#001f3f",
        bgMain: "#0B0B0C",
        topShadow: "#152d6e",
      },
      boxShadow: {
        'neon-blue': '0 0 50px #00f, 0 0 100px #00f, 0 0 150px #00f, 0 0 200px #00f, 0 0 300px #00f',
      }
    },
  },
  plugins: [],
};
export default config;
