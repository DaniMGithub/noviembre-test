/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/style.css {html,js}"],
  theme: {
    fontFamily: {      
          'sans': ['ui-sans-serif', 'system-ui', ...],
          'serif': ['ui-serif', 'Georgia', ...],
          'mono': ['ui-monospace', 'SFMono-Regular', ...],
          'display': ['Oswald', ...],
          'body': ['"Open Sans"', ...],
          'rale': ['"Raleway"' , ...],
        }    
    },
    extend: {
      colors:{
        danger: '#ff5f40'
      }
    },
  },
  plugins: [],
}

