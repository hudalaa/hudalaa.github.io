/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./docs/**/*.html", // Adjust this path to match your HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors can be defined here
        primary: "#1E3A8A", // Example color

        Plviolet: "#ebcfff",
        Pbviolet: "#a278ce",

        Plbleu: "#ccebff",
        Pbbleu: "#21a5dd",

        Plgreen: "#eaffdc",
        Pbgreen: "#4baa7a",

        Plorange: "#ffdca8",
        Pborange: "#f5c379",

        Plyellow: "#fff4c0",
        Pbyellow: "#e8cb12",

        Plpeach: "#ffd4c4",
        Pbpeach: "#f48c54",

        Plred: "#ff9d98",
        Pbred: "#da434f",

        Plpink: "#ffe3ef",
        Pbpink: "#e95a87",

        Pllavander: "#f0e6ff", 
        Pblavander: "#b197db",

        Plmoss: "#e0f5e4", 
        Pbmoss: "#5b9a77",

        Plbeige:"#fceee5", 
        Pbbeige:"#e3c5aa", 
      
        Plslate:"#dde2eb", 
        Pbslate:"#6c7a89",


      },
    
    },
  },
  plugins: [],
}
