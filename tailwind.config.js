module.exports = {
  mode: "jit",
  content: [
    "./nekozono/**/*.{html,js}",
  ],
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["cupcake", "pastel"]
  },
}
