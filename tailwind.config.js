module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#16A34A",
          dark: "#14532D",
          light: "#DCFCE7",
          bg: "#F0FDF4",
        },
        ink: { DEFAULT: "#17251C", soft: "#647067" },
        line: "#E5EDE7",
      },
      boxShadow: { soft: "0 10px 30px -12px rgba(20,83,45,.18)" },
    },
  },
};
