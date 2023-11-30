import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    })
  },
  preprocess: vitePreprocess({
    postcss: true,
    defaults: {
        style: 'postcss',
    },
}),
  // preprocess: vitePreprocess(),
};
export default config;