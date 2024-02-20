/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: { 
      colors: {
      utama: "#1DC29F", // Menambahkan warna primer dengan kode #1DC29F
    },},
  },
  plugins: [],
}

