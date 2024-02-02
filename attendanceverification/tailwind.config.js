/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,vue}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,vue}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,vue}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        singleDay: ["Single Day", "cursive"],
        poorStory: ["Poor Story", "system-ui"],
        protestRevolution: ["Protest Revolution", "sans-serif"],
        kalam: ["Kalam", "cursive"],
        philosopher: ["Philosopher", "sans-serif"],
        elMessiri: ["El Messiri", "sans-serif"],
        merriWeather: ["Merriweather", "serif"],
        acme: ["Acme", "sans-serif"],
      },
    },
    screens: {
      xxxl: "1400px",
      xxl: "1200px",
      xl: "992px",
      lg: "840px",
      md: "768px",
      sm: "640px",
      ssm: "576px",
      vsm: "400px",
      vvsm: "330px",
    },
  },
  plugins: [],
};

