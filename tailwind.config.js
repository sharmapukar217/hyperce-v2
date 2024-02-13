/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", `[data-mode="dark"]`],
  theme: {
    extend: {
      screens: () => ({
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      }),
      colors: () => ({
        border: "hsl(var(--color-border))",
        foreground: "hsl(var(--color-foreground))",
        background: "hsl(var(--color-background))",

        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--color-info))",
          foreground: "hsl(var(--color-info-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
      }),
      fontFamily: () => ({
        primary: "var(--font-primary)",
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: "hsl(var(--color-border))",
      }),
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.04s ease-out",
      "accordion-up": "accordion-up 0.04s ease-out",
    },
  },
  plugins: [],
};
