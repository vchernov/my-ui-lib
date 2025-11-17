import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {resolve} from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            formats: ["es"],
            fileName: "my-ui-lib.es",
        },
        rollupOptions: {
            external: ["react", "react-dom", "@mui/material", "@emotion/react", "@emotion/styled"],
        },
    },
});
