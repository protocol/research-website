module.exports = {
  theme: {
    extend: {
      fontFamily: {
        body: ['SourceSansPro'],
      },
      maxWidth: {
        'screen': '1146px',
        'none': 'none',
      },
      minWidth: {
        'site': '320px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1146px',
      },
      inset: {
        '100': '100%',
      },
      lineHeight: {
        cavernous: '3rem',
      },
      spacing: {
        72: '18rem',
      },
    },
    // Do not extend these
    colors: {
      'black': '#131316',
      'almost-black': '#34373F',
      'blue-200': '#C3E1FF',
      'blue-gray': '#839BC9',
      'blue': '#1982F4',
      'blue-500': '#3966FE',
      'dark-blue': '#3158A5',
      'gray-100': '#F8F7F3',
      'gray-200': '#F6F9FD',
      'gray-300': '#F6F6F6',
      'gray-500': '#7F818B',
      'gray-600': '#737680',
      'gray-700': '#4A5568',
      'gray-dark': '#34373F',
      'gray': '#8B8C97',
      'pink': '#E51A66',
      'white': '#ffffff',
      'transparent': 'transparent',
    },
    fontSize: {
      xl: '48px',
      larger: '40px',
      lg: '32px',
      md: '26px',
      bigger: '22px',
      big: '18px',
      base: '17px',
      sm: '15px',
    },
  },
  variants: [
    'active',
    'disabled',
    'even',
    'first',
    'focus-within',
    'focus',
    'group-hover',
    'hover',
    'last',
    'odd',
    'responsive',
    'visited',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  plugins: []
}
