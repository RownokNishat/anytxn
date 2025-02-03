/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      container: {
        center: true,
        screens: {
          sm: "480px",  // Override small screen width
          md: "768px",  // Override medium screen width
          lg: "976px",  // Override large screen width
          xl: "1024px", // Override extra large screen width
          "2xl": "1136px", // Override extra large screen width
        },
      },

      colors: {
      },
      fontFamily: {
        monts: ['var(--font-monts)'],
      },
    },
  },
  plugins: [],
};
