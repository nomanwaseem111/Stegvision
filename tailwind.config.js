/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-border': 'rgba(253, 253, 253, 0.85)', 
        'custom-background': 'rgba(255, 255, 255, 0.20)',
       
          primary: '#FFF', 
          secondary: '#CCC', 
          cyan: '#65DBFF',
          secondaryLight: '#B3B3B3',
          lightWhite: '#EFEFEF',
         
        
      },
      backdropFilter: {
        '40': 'blur(40px)', 
      },
      borderWidth: {
        '1.25': '1.25px',
      },
    },
  },
  plugins: [],
}