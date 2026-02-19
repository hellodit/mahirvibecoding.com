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
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
            },
            colors: {
                clockwork: {
                    50: '#fff5eb',
                    100: '#ffe8d4',
                    200: '#FBA45C',
                    300: '#FBA45C',
                    400: '#E56515',
                    500: '#E56515',
                    600: '#cf5a12',
                    700: '#b04e10',
                    800: '#8a3d0d',
                    900: '#6b2f0a'
                },
                gray: {
                    50: '#fafafa',
                    100: '#F8F8F8',
                    200: '#e8e8e6',
                    300: '#CDCDCB',
                    400: '#a8a8a6',
                    500: '#919599',
                    600: '#6b6b6f',
                    700: '#4a4a4e',
                    800: '#2d2d2d',
                    900: '#1a1a1e'
                }
            }
        }
    },
    plugins: []
} satisfies Config
