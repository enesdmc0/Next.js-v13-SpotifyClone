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
            hbg: "#121212",
            hd: "#60605D",
            headerCircle: "#313130",
            headerButton: "#1D1D1C",
            headerDrop: "#282828",
            headerDropOpen: "#3E3E3E",
            playMusicBg: "#181818",
            playMusicHover: "#474141",
            goodMorningBg: "#4F4F4D",
            yourShowHover: "#282828",
            yesil: "#1ed760",
            headerBg: "#070707",
            font: "#e8f2fe",
            font2: "#6a6a6a",
            inputBg: "#E8F0FE"

        },
        width: {
            240: "240px",
            middle: "calc(100vw - 240px)",
            31: "32%",
            450: "450px"
        },
        height: {
            90: "90px",
            vh: "200vh"
        },
        rotate: {
          25: "25deg"
        },
        fontSize: {
            11: "11px"
        }
    },
  },
  plugins: [],
}

