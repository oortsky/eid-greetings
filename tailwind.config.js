/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Great Vibes", "cursive"],
        body: ["Poppins", "sans"]
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C9A84C",
          "primary-content": "#1A1209",
          secondary: "#2D6A4F",
          "secondary-content": "#D4E0D9",
          accent: "#E8C96B",
          "accent-content": "#1A1209",
          neutral: "#2C2416",
          "neutral-content": "#EDE8DC",
          "base-100": "#FDF6E3",
          "base-200": "#F0E8CE",
          "base-300": "#DDD4B8",
          "base-content": "#1A1209",
          info: "#4A90A4",
          "info-content": "#EAF4F7",
          success: "#40916C",
          "success-content": "#E6F4EE",
          warning: "#F4A261",
          "warning-content": "#1A1209",
          error: "#E63946",
          "error-content": "#FDE8EA"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
