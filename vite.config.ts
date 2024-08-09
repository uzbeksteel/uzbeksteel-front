import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    envPrefix: 'APP_',
    resolve: {
        // eslint-disable-next-line no-undef
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
        ViteImageOptimizer(),
        eslint(),
    ],
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.ts': 'tsx',
            },
        },
    },
    build: {
        outDir: 'build',
        minify: 'terser',
        chunkSizeWarningLimit: 1600,
        manifest: true,
        sourcemap: false,
        reportCompressedSize: true,
        rollupOptions: {
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
});
