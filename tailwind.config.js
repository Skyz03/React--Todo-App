module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/img/bg-mobile-dark.jpg')",
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
