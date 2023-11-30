const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'kumiko' : "url('/img/Kumiko.png')",
        'taki'   : "url('/img/Taki.png')",
        'website': "url('/img/Website.png')"
      },
      fontFamily: {
        sans: ['General Sans', ...fontFamily.sans],
        mono: ['Jetbrains Mono', ...fontFamily.mono],
      }
    }
  },
  plugins: []
};