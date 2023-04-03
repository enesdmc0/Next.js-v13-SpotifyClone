/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
        colors: {
            sb: "#000000",
            nb: "#101010",
            hbg: "#1d1d1d",
            hd: "#60605D",
            headerCircle: "#313130",
            headerButton: "#1D1D1C",
            headerDrop: "#282828",
            headerDropOpen: "#3E3E3E",
            playMusicBg: "#181818"
        },
        width: {
            240: "240px",
            middle: "calc(100vw - 240px)"
        },
        height: {
            90: "90px",
          
        }
    },
  },
  plugins: [],
}

