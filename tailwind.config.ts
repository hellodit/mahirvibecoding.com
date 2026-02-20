import type { Config } from 'tailwindcss'

export default {
    content: [
        './app/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif']
            },
            colors: {
                text: '#050315',
                background: '#fbfbfe',
                primary: '#2E6B3B',
                secondary: '#dedcff',
                accent: '#433bff'
            }
        }
    },
    plugins: []
} satisfies Config
