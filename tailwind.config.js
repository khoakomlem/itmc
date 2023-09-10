import form from '@tailwindcss/forms'
import tailwindScrollbar from 'tailwind-scrollbar'

export const darkMode = 'class'
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  fontFamily: {
    default: 'var(--font-sans)',
  },
  extends: {
    boxShadow: {
      base: '0px 0px 64px rgba(132, 98, 254, 0.22)',
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
    colors: {
      primary: '#7F56D9',
      secondary: '#D0D5DD',
      'primary-800': '#53389E',
      muted: '#F1F5F9',
    },
  },
}
export const plugins = [tailwindScrollbar({ nocompatible: true }), form]
