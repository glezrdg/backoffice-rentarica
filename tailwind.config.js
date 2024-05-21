/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin'), require('flowbite/plugin')],
}
