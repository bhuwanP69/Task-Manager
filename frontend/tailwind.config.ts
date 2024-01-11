import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      "logIn":'#93c0d9',
      "signUp":'#7aa184',
      "Text":'#313233',
      "hover":'#ba867b'
     },
    },
  },
  plugins: [],
}
export default config
