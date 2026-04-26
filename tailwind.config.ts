import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base:    "var(--bg)",
        surface: "var(--surface)",
        line:    "var(--border)",
        ink:     "var(--text)",
        muted:   "var(--muted)",
        faint:   "var(--faint)",
        accent: {
          DEFAULT: "var(--accent)",
          tint:    "var(--accent-bg)",
          dim:     "var(--accent-txt)",
        },
        chip: {
          DEFAULT: "var(--chip-bg)",
          ink:     "var(--chip-col)",
        },
        pos: "var(--pos)",
      },
      fontFamily: {
        sans: ["var(--sans)"],
        mono: ["var(--mono)"],
      },
    },
  },
};

export default config;
