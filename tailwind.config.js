function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Noto Sans Bengali', 'Open Sans', 'sans-serif'],
      display: ['Noto Sans Bengali', 'Open Sans', 'sans-serif'],
      body: ['Noto Sans Bengali', 'Open Sans', 'sans-serif'],
    },
    extend: {
      colors:{
        skin: {
          "th-main": "var(--bg-main)",
        },
      },
      textColor: {
        skin: {
          main: "var( --text-main)",
          muted: "var(--color-text-muted)",
          "col-text": "var(--color-text)",
        },
      },
      backgroundColor: {
        skin: {
         "main": "var(--bg-main)",
         "second": "var(--bg-second)",
         "other": "var(--bg-other)"
        },
      },
    },
  },
  plugins: [],
};
