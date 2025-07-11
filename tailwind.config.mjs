/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}", // caso você use pasta src
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--color-primary)',
          neutral: 'var(--color-neutral)',
          solid: 'var(--color-solid)',
        },
        fontSize: {
          paragraph: ['var(--font-paragraph-size)', { lineHeight: 'var(--font-paragraph-line)' }],
          title: ['var(--font-title-size)', { lineHeight: 'var(--font-title-line)' }],
        },
      },
    },
    plugins: [],
  };