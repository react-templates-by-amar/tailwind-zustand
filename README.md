# React + Tailwind CSS + Zustand Template

A modern, lightweight React starter template with Tailwind CSS for styling and Zustand for state management. This template provides a clean, organized structure to kickstart your React projects with best practices.

## Features

- ⚡️ **Vite** — Lightning fast development and build
- 🔄 **React 18** with TypeScript
- 🎨 **Tailwind CSS** — Utility-first CSS framework
- 🗃️ **Zustand** — Simple, fast state management
- 🌓 **Dark Mode** — Built-in dark mode support
- 📁 **Organized Structure** — Components, hooks, and store folders
- 🧩 **Component Library** — Basic UI components to build upon

## Quick Start

### Using degit (recommended)

```bash
# Clone the template
npx degit react-templates/tailwind-zustand my-app

# Navigate to the project
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Manual Clone

```bash
# Clone the repository
git clone https://github.com/react-templates/tailwind-zustand.git my-app

# Navigate to the project
cd my-app

# Remove git history
rm -rf .git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── store/           # Zustand store definitions
│   ├── styles/          # Global styles and Tailwind config
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

### Tailwind Configuration

Customize your design system by editing `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: { /* ... */ },
      },
    },
  },
  plugins: [],
}
```

### State Management

Zustand stores are located in the `src/store` directory. The template includes a basic counter store as an example.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## License

MIT

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
