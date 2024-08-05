/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-chill': {
          '50': '#f2f9f9',
          '100': '#ddeff0',
          '200': '#bfe0e2',
          '300': '#92cace',
          '400': '#5faab1',
          '500': '#438e96',
          '600': '#3b757f',
          '700': '#356169',
          '800': '#325158',
          '900': '#2d464c',
          '950': '#1a2c32',
        },
      },
      screens: {
        'small-smartphone': '320px',
        'medium-smartphone': '390px',
        'big-smartphone': '414px',
        'small-tablet': '768px',
        'medium-tablet': '820px',
        'big-tablet': '1024px',
        'small-pc': '1280px',
        // 'medium-pc': '1440px',
        // 'big-pc': '1536px'
      },
    },
  },
  plugins: [animations],
}

