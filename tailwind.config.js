// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Use 'class' strategy for manual theme control
  theme: {
    extend: {
      colors: {
        primary: "#ef4444",     // red-500
        secondary: "#f97316",   // orange-500
        muted: "#f3f4f6",       // gray-100 (light text/bg)

        // Dark theme palette (Coverr style)
        dark: {
          background: "#121212",
          surface: "#1f1f1f",
          text: "#d4d4d4",
          muted: "#888888",
          border: "#2a2a2a",
        },

        // Optional shorthand
        darkBg: "#121212",
      },

      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      keyframes: {
        'ambient-glow': {
          '0%, 100%': { boxShadow: '0 0 0px #00ffa000' },
          '50%': { boxShadow: '0 0 15px #00ffa080' },
        },
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },

      animation: {
        'ambient-glow': 'ambient-glow 4s ease-in-out infinite',
        gradient: 'gradient 5s ease infinite',
      },
    },
  },
  plugins: [],
};








// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   darkMode: 'class', // Use 'class' strategy for manual theme control
//   theme: {
//     extend: {
//       colors: {
//         primary: "#ef4444",     // red-500
//         secondary: "#f97316",   // orange-500
//         muted: "#f3f4f6",       // gray-100 (light text/bg)

//         // Dark theme palette (Coverr style)
//         dark: {
//           background: "#121212", // Main dark background
//           surface: "#1f1f1f",    // Cards/Sections
//           text: "#d4d4d4",       // Primary readable text
//           muted: "#888888",      // Secondary text
//           border: "#2a2a2a",     // Divider lines
//         },

//         // Optional shorthand if you want global classes like bg-dark-bg
//         darkBg: "#121212",
//       },
//       fontFamily: {
//         heading: ['Poppins', 'sans-serif'],
//         body: ['Inter', 'sans-serif'],
//       },

//       keyframes: {
//         'ambient-glow': {
//           '0%, 100%': { boxShadow: '0 0 0px #00ffa000' },
//           '50%': { boxShadow: '0 0 15px #00ffa080' },
//         },
//       },
//       animation: {
//         'ambient-glow': 'ambient-glow 4s ease-in-out infinite',
//       },

//       animation: {
//         gradient: "gradient 5s ease infinite",
//       },
//       keyframes: {
//         gradient: {
//           "0%, 100%": {
//             backgroundPosition: "0% 50%",
//           },
//           "50%": {
//             backgroundPosition: "100% 50%",
//           },
//         },
//       },

//     },
//   },
//   plugins: [],
// };