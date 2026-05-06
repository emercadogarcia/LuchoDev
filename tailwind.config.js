/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Precision Minimalist Design System
        surface: {
          DEFAULT: '#faf8ff',
          dim: '#d9d9e5',
          bright: '#faf8ff',
          lowest: '#ffffff',
          low: '#f3f3fe',
          container: '#ededf9',
          high: '#e7e7f3',
          highest: '#e1e2ed',
        },
        primary: {
          DEFAULT: '#004ac6',
          on: '#ffffff',
          container: '#2563eb',
          onContainer: '#eeefff',
          fixed: '#dbe1ff',
          fixedDim: '#b4c5ff',
          onFixed: '#00174b',
          onFixedVariant: '#003ea8',
        },
        secondary: {
          DEFAULT: '#00687a',
          on: '#ffffff',
          container: '#57dffe',
          onContainer: '#006172',
          fixed: '#acedff',
          fixedDim: '#4cd7f6',
          onFixed: '#001f26',
          onFixedVariant: '#004e5c',
        },
        tertiary: {
          DEFAULT: '#943700',
          on: '#ffffff',
          container: '#bc4800',
          onContainer: '#ffede6',
          fixed: '#ffdbcd',
          fixedDim: '#ffb596',
          onFixed: '#360f00',
          onFixedVariant: '#7d2d00',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      maxWidth: {
        container: '1120px',
      },
    },
  },
  plugins: [],
}
