// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
        allowedHosts: [
            'ferioli.com.ar',
            'ferioli.com.br',
        ],
    }
});
