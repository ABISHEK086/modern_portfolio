module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB"
        },
        secondary: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          dark: "#6D28D9"
        },
        // Define your custom colors here
        light: {
          text: "#1E293B",
          bg: "#F8FAFC",
          card: "#FFFFFF"
        },
        dark: {
          text: "#F1F5F9",
          bg: "#020617",
          card: "#0F172A"
        }
      }
    },
  },
  plugins: [],
}