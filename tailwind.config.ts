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
