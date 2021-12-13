module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        mono: "'DM Mono', monospace",
      },
      colors: {
        terminalGreen: "#00ff41",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
