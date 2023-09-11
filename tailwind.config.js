/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        beginner: ["var(--font-edu-sa-beginner)"],
      },
      textColor: {
        "code-blue-1": "theme('colors.blue.300')",
        "code-blue-2": "theme('colors.blue.400')",
        "code-gray": "theme('colors.gray.500')",
        "code-green": "theme('colors.green.500')",
        "code-purple": "theme('colors.purple.400')",
        "code-red": "theme('colors.red.500')",
      },
      margin: {
        "code-left-sm": "40px",
        "code-left-md": "80px",
        "code-left-lg": "120px",
        "code-left-xl": "160px",
        "code-left-2xl": "200px",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: ["light", "night"],
  },
};
