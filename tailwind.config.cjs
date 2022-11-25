/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
        screens: {
            'sm': '320px',
            // => @media (min-width: 640px) { ... }

            'md': '425px',
            // => @media (min-width: 768px) { ... }

            'sg': '640px',


            'lg': '768px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1024px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1280px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                white: '#FEFDFD',
                black: '#1C1433',
                gray: '#B4C3C7',
                purple: '#4A3E5C',
                orange: '#F2C9B0',
                red: '#C45D59',
            }
        },
    },
    plugins: [],
}