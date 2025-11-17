# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React component library built with Vite, TypeScript, React 19, and Material UI (MUI).
The library is configured to be published as an ES module package that other projects can consume.

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
# Development server (if needed for testing)
npm run dev

# Build the library (runs both Vite and TypeScript)
npm run build

# Lint the codebase
npm run lint

# Preview the built library
npm run preview
```

## Project Structure

- `src/index.ts`: Main entry point that exports all public components
- `src/components/`: React components
- `dist/`: Build output directory (generated, not in source control)
  - `my-ui-lib.es.js`: Bundled library code
  - `types/`: TypeScript declaration files

## Key Architecture Points

- **Peer dependencies**: React, React-DOM (>=19), Material UI, and Emotion are peer dependencies, not bundled with the library. Consuming projects must install these themselves.
- **Module format**: ES modules only (no CommonJS support)
- **TypeScript configuration**: Strict mode enabled with comprehensive linting rules
- **React compiler**: Uses SWC for fast compilation via `@vitejs/plugin-react-swc`
- **UI framework**: Components are built on top of Material UI (MUI) v7 with Emotion styling

## Adding New Components

When adding new components:
1. Create the component file in `src/components/`
2. Export the component from `src/index.ts` to make it part of the public API
3. Run `npm run build` to ensure both JS and type definitions are generated correctly
