/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors:{

            },
            transitionProperty:{
                'myTransition': 'all 0.3s '
            }
        },
    },
    plugins: [],
};
