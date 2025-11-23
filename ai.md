# Project Context for AI Assistants

This document is meant for *all* AI coding tools (Claude Code, GitHub Copilot, and any others).
Follow the guidelines below regardless of which system reads it.

## Project Overview

This is a React component library built with Vite, TypeScript, React 19, and Material UI (MUI).
The library is configured to be published as an ES module package that other projects can consume.
Storybook is used for component development and documentation.

## Build Configuration

The project uses a **dual-build system**:
1. **Vite** bundles the JavaScript/JSX code into `dist/my-ui-lib.es.js` (ES module format only)
2. **TypeScript** generates type declarations in `dist/types/` directory

The build output is configured through:
- `vite.config.ts`: Library mode configuration with React, React-DOM, MUI, and Emotion as external peer dependencies
- `tsconfig.build.json`: Extends `tsconfig.app.json` with declaration-only output for type generation
- Package exports in `package.json` point to both the JS bundle and type definitions

## Common Commands

```bash
# Run Storybook for component development and testing
npm run storybook

# Build the library (runs both Vite and TypeScript)
npm run build

# Build Storybook for deployment
npm run build-storybook

# Lint the codebase
npm run lint

# Development server (Vite dev server, not typically used)
npm run dev

# Preview the built library
npm run preview
```

## Project Structure

- `src/index.ts`: Main entry point that exports all public components
- `src/components/`: React components with their `.stories.tsx` files
- `.storybook/`: Storybook configuration
  - `main.ts`: Storybook core config (stories location, addons, framework)
  - `preview.tsx`: Global decorators and parameters (includes MUI ThemeProvider setup)
- `dist/`: Build output directory (generated, not in source control)
  - `my-ui-lib.es.js`: Bundled library code
  - `types/`: TypeScript declaration files
- `storybook-static/`: Built Storybook output (generated, not in source control)

## Key Architecture Points

- **Peer dependencies**: React, React-DOM (>=19), Material UI, and Emotion are peer dependencies, not bundled with the library. Consuming projects must install these themselves.
- **Module format**: ES modules only (no CommonJS support)
- **TypeScript configuration**: Strict mode enabled with comprehensive linting rules. Uses project references with separate configs for app (`tsconfig.app.json`), node tools (`tsconfig.node.json`), and Storybook (`tsconfig.storybook.json`).
- **React compiler**: Uses SWC for fast compilation via `@vitejs/plugin-react-swc`
- **UI framework**: Components are built on top of Material UI (MUI) v7 with Emotion styling
- **Storybook setup**: Configured with React-Vite framework. The `.storybook/preview.tsx` wraps all stories with MUI's ThemeProvider and CssBaseline so components render correctly. Uses `addon-docs` for automatic documentation generation.

## Adding New Components

When adding new components:
1. Create the component file in `src/components/` using **named exports** (e.g., `export const MyComponent = () => {}`)
2. Create a corresponding `.stories.tsx` file in the same directory for Storybook documentation
   - Import types from `@storybook/react-vite` (not `@storybook/react`) to satisfy ESLint rules
3. Export the component from `src/index.ts` to make it part of the public API using the pattern: `export {ComponentName} from './components/ComponentName'`
4. Run `npm run build` to ensure both JS and type definitions are generated correctly
