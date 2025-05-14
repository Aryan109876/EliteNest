/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6EAF4',
          100: '#C2D0E8',
          200: '#9BB1DC',
          300: '#7491D0',
          400: '#4D72C4',
          500: '#2653B8',
          600: '#1E3A8A', // Main primary
          700: '#193173',
          800: '#13285C',
          900: '#0E1F45',
        },
        secondary: {
          50: '#FFF8EB',
          100: '#FEF0D1',
          200: '#FDE6B0',
          300: '#FCDC8E',
          400: '#FBD26D',
          500: '#F9C84C',
          600: '#F59E0B', // Main secondary (gold)
          700: '#C47E08',
          800: '#935E06',
          900: '#624004',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: {
          50: '#ECFDF5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'property': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};