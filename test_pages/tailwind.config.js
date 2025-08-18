/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // blue
        "primary-foreground": "#ffffff", // text on primary
        secondary: "#10b981",
        "secondary-foreground": "#ffffff",
        destructive: "#ef4444",
        accent: "#f59e0b",
        "accent-foreground": "#000000",
        input: "#d1d5db",
        background: "#ffffff",
        ring: "#3b82f6",
      },
    },
  },
  plugins: [],
};
