module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      spacing: {
        720: '720px',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
