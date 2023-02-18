/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sz-dark': '#0A0908',
        'sz-gray': '#22333B',
        'sz-brown-light': '#EAE0D5',
        'sz-brown': '#C6AC8F',
        'sz-brown-dark': '#5E503F',
      },
    },
    /*
    colors: {
      'sz-dark': '#0A0908',
      'sz-gray': '#22333B',
      'sz-brown-light': '#EAE0D5',
      'sz-brown': '#C6AC8F',
      'sz-brown-dark': '#5E503F',
    },
    */
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
