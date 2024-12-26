// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['src/renderer/src/**/*.{vue,js,ts}'],
//   important: true,
//   theme: {
//     extend: {}
//   },
//   plugins: []
// }

import type { Config } from 'tailwindcss'

export default {
  content: ['src/renderer/src/**/*.{vue,js,ts}'],
  important: true,
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
