import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.BASE_PATH || ''
		}
	},
	preprocess: preprocess({
		less: {
			prependData: "@import 'src/lib/styles/variables.less';"
		}
	})
};

export default config;
