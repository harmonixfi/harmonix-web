import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(109deg, #97FCE4 -1.94%, #E2F6A1 101.26%)",
        "gradient-earn":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 2.63%, #FFF 50.29%, rgba(255, 255, 255, 0.00) 97.01%)",
        "gradient-earn2":
          "linear-gradient(180deg, #FFF -25.7%, rgba(255, 255, 255, 0.00) 100%)",
        "gradient-text":
          "linear-gradient(180deg, #173132 -81.11%, rgba(70, 149, 152, 0.00) 100%)",
      },
      colors: {
        "off-white": {
          DEFAULT: "#F1F1EB",
        },
        "sub-title": {
          DEFAULT: "#84889A",
        },
        "sub-title-2": {
          DEFAULT: "#666D80",
        },
        "light-yellow": {
          DEFAULT: "#E2F6A1",
        },
        "bg-grey": {
          DEFAULT: "#F7F8FB",
        },
        "dark-green": {
          DEFAULT: "#171918",
        },
        green: {
          DEFAULT: "#0ECB81",
        },
        "main-green": {
          DEFAULT: "#173132",
        },
        "yellow-y20": {
          DEFAULT: "#F8FEDA",
        },
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#173132",
            },
            secondary: {
              DEFAULT: "#E2F6A1",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
