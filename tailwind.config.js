/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F7EFE5',
        coffee: '#2E1F16',
        brown: '#8B5E3C',
        sand: '#C68642',
        gold: '#D4A373',
        olive: '#556B2F',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4A373 0%, #C68642 50%, #8B5E3C 100%)',
        'gradient-coffee': 'linear-gradient(135deg, #2E1F16 0%, #8B5E3C 100%)',
        'gradient-hero-overlay':
          'linear-gradient(180deg, rgba(46,31,22,0.55) 0%, rgba(46,31,22,0.75) 60%, rgba(46,31,22,0.95) 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(46, 31, 22, 0.25)',
        card: '0 20px 60px -15px rgba(46, 31, 22, 0.3)',
        glow: '0 0 40px rgba(212, 163, 115, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.6' },
          '50%': { transform: 'translateY(-40px) scaleX(1.4)', opacity: '0.35' },
          '100%': { transform: 'translateY(-90px) scaleX(1.8)', opacity: '0' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-30px, 20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        steam: 'steam 4s ease-in-out infinite',
        drift: 'drift 12s ease-in-out infinite alternate',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
