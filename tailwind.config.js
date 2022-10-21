/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text)',
          surface: 'var(--color-text-surface)',
          'surface-primary': 'var(--color-text-surface-primary)',
          'surface-secondary': 'var(--color-text-surface-secondary)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          active: 'var(--color-text-active)',
          inactive: 'var(--color-text-inactive)',
          starting: 'var(--color-text-starting)',
          stopping: 'var(--color-text-stopping)',
          error: 'var(--color-text-error)',
          unknown: 'var(--color-text-unknown)',
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          surface: 'var(--color-surface)',
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          secondary: 'var(--color-secondary)',
          'secondary-hover': 'var(--color-secondary-hover)',
        }
      },
      borderColor: {
        skin: {
          base: 'var(--color-text)',
          surface: 'var(--color-text-surface)',
          primary: 'var(--color-text-surface-primary)',
          secondary: 'var(--color-text-surface-secondary)',
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
