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
                clockwork: {
                    50: '#fff0ed',
                    100: '#ffdcd6',
                    200: '#ffb8ad',
                    300: '#ff8f80',
                    400: '#ff634a', // Accent
                    500: '#e54830',
                    600: '#c2301c',
                    700: '#a12213',
                    800: '#851c10',
                    900: '#6e190f'
                },
                gray: {
                    50: '#f4f4f6', // Opaline White/Background
                    100: '#e7e7e7', // Opaline Light Gray
                    200: '#d2d2d4', // Opaline Medium Gray
                    300: '#b0b0b3',
                    400: '#8f8f93',
                    500: '#717176',
                    600: '#56565b',
                    700: '#3e3e42',
                    800: '#29292c',
                    900: '#161618'
                }
            }
        }
    },
    plugins: []
} satisfies Config
