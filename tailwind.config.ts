import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '500px',
      md: [
        { min: '668px', max: '767px' },
        { min: '868px' },
      ],
      lg: '1100px',
      xl: '1400px',
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['19px', '25px'],
      xl: ['24px', '32px'],
    

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        ebGaramond: ['EB Garamond', 'serif'],
        protestGuerrilla: ['Protest Guerrilla', 'sans-serif'],
        sevillana: ['Sevillana', 'serif'],
      },
      colors: {
        customBackground: '#3b3b3b',
        navText: '#ffffff',
        bookNowButton: '#212e21',
        stone600: '#4b5563',  // Tailwind CSS color for bg-stone-600
        black: '#000000',
        white: '#ffffff',
        section2Bg: '#d9d4d4',
      },
      width: {
        'btn-wide': '150px',  // Custom button width
      },
      spacing: {  // Changed from 'space' to 'spacing'
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
      },
      borderRadius: {
        custom: '50px',  // Custom border radius value
      },
    },
  },
  plugins: [],
};

export default config;
