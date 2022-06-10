module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js}",
  ],
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["cupcake", "pastel"]
  },
}
