//Para generar este archivo se ejecuto npx tailwind init -p

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], //Indica dónde se quieren aplicar los estilos
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem",
      }
    }
  },
  plugins: [],
}

