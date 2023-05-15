/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'work-img': "url('/images/icon-work.svg')",
        'study-img': "url('/images/icon-study.svg')",
        'social-img': "url('/images/icon-social.svg')",
        'play-img': "url('/images/icon-play.svg')",
        'exercise-img': "url('/images/icon-exercise.svg')",
        'self care': "url('/images/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
}
