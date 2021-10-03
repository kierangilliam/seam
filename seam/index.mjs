import { transformer } from './transform.mjs';

/**
 * @param {import('svelte-preprocess').Options.Replace}
 * @returns {import('svelte-preprocess'.PreprocessorGroup)}
 */
export default () => ({
	async markup({ content, filename }) {
		return transformer({ content, filename })
	},
})