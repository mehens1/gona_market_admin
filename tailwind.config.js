export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#307401",
        secondary: "#f38604",
        "light-primary": "#98ba80",
        "light-secondary": "#f9c382",
        "lighter-primary": "#eaf1e6",
        "lighter-secondary": "#fef3e6",
        "dark-primary": "#183a01",
        "dark-secondary": "#7a4302",
        "darker-primary": "#0a1700",
        "darker-secondary": "#180d00",
        grey: "#727272",
        "light-grey": "#b9b9b9",
        "lighter-grey": "#f1f1f1",
        "dark-grey": "#393939",
        "darker-grey": "#0b0b0b",
      },
      boxShadow: {
        card: "0 6px 18px rgba(17,24,39,0.06)",
        panel: "0 10px 30px rgba(16,24,40,0.06)",
      },
      borderRadius: {
        "xl-2": "18px",
      },
    },
  },
  plugins: [],
};
