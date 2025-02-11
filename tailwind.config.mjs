/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      fontFamily:{
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",



      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      
      
        transparent: 'transparent',
        
        
        'orange': 'FFF5EB',
        'white': '#ffffff',
        'purple': '#110808',
        'grey': '#d9d9d9',
        'red': '#920606',
        'tahiti': '#FCE2BB',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#dcae53',
        
      },
      backgroundImage: {
        adm: "url('../public/adm.png')",
                
        about: "url('../public/about.jpeg')",
        admit: "url('../public/admit.jpeg')",
     chess: "url('../public/chess.jpeg')",
        enroll: "url('../public/enroll.jpeg')",
        reason: "url('../public/reason.jpeg')",
    

      }
/*       backgroundImage: {
  
        
        youth: "url('../public/youthworship.png')",
        teen: "url('../public/teen.png')",
        family: "url('../public/family.png')",
        women: "url('../public/women.png')",
        stairs: "url('../public/stai.jpg')",
        free: "url('../public/free.jpg')",
        jez: "url('../public/Image.png')",



        bble: "url('../public/bble.png')",
        glss: "url('../public/glss.png')",
        nun: "url('../public/nun.png')",



  
  
  
      
      },*/
  
    },
  },
  plugins: [],
};
