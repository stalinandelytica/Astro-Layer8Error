const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    colors: {
      'woodsmoke': {
        '50': '#f7f7f8',
        '100': '#ededf1',
        '200': '#d7d8e0',
        '300': '#b5b6c4',
        '400': '#8c8ea4',
        '500': '#6e7189',
        '600': '#595a70',
        '700': '#48495c',
        '800': '#3e3e4e',
        '900': '#373843',
        '950': '#0e0e11',
      },
      'carnation': {
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fdcbcb',
        '300': '#fba7a6',
        '400': '#f67170',
        '500': '#ed4746',
        '600': '#da2928',
        '700': '#b71f1e',
        '800': '#971e1d',
        '900': '#7e1f1e',
        '950': '#440b0b',

      }
    },
    fontFamily: {
      'poppins': ['Poppins', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}
