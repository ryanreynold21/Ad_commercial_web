/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"), // Import tailwindcss
    require("daisyui"),
    // require("flowbite/plugin"),
  ],
};

