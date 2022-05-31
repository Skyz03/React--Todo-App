module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/bg-mobile-light.jpg')",
        "hero-pattern-lg": "url('/src/img/bg-desktop-light.jpg')",
      },
      screens: {
        sm: "375px",
      },
    },
    theme: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
