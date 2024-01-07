import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [adapter(), sveltekit()],
    preview: {
        port: 3000
    },
    server: {
        port: 3000
    }
};

export default config;
