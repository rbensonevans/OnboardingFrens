/** @type {import('tailwindcss').Config} */

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7752DF",
          secondary: "#9EE8FA",
          accent: "#F247BA",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
