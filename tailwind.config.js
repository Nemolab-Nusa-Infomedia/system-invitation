import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "help-section":
                    "url('/public/asset-landing-page/bg-bantuan.png')",
            },
            width: {
                calc_4: "calc(100% / 4)",
                calc_3: "calc(100% / 3)",
                calc_2: "calc(100% / 2)",
            },
            keyframes: {
                upDown: {
                    "50%": { transform: "translateY(20px)" },
                },
            },
            animation: {
                upDown: "upDown 2s ease-in-out infinite",
            },
        },
    },

    plugins: [forms],
};
