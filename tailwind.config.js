// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f3f2ef', // Light beige/cream color similar to LinkedIn
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        loadingBar: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out forwards',
        loadingBar: 'loadingBar 2s linear infinite',
      },
      colors: {
        blue: "#296CF2",
        yellow: "#FFEB01",
        purple: "#5C40EC",
        white: "#FFFFFF",
        orange: "#FF6F0F",
        green: "#94E95D",
        black: "#1F1F1F",
        lightblue: "#5C40EC",
        pastelBlue: "#90A8ED",
        custom: '#D9D9D9',
      },
      fontFamily: {
        "Space-Grotesk": ["Space Grotesk", "sans-serif"],
        "Plus-Jakarta": ["Plus Jakarta Sans", "sans-serif"],
        "Red-Hat-Display": ["Red Hat Display", "sans-serif"],
        "Minecraft": ["Minecraft", "Minecrafter", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "2xl": "3px 3px black",
        "3xl": "5px 5px black",
        "5xl": "10px 10px 0px 0px white",
        "4xl": "8px 8px black",
        "bordered-blue": "8px 8px 0 -2px #296cf2, 8px 8px black",
        "bordered-black": "8px 8px 0 -2px black, 8px 8px white",
        "bordered-orange": "8px 8px 0 -2px #FF6F0F, 8px 8px black",
        "bordered-yellow": "0px 0px 0 5px #FFEB01",
        hack: "0px 0px 0 8px #D0A4FF",
      },
      // backgroundImage: {
      //   'tshirt': "url('./public/t-shirt_mockup_red_bg.jpg')",
      // }
    },
  },
  variants: {},
  plugins: [],
};
