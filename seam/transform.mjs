import { join } from "path";
import { build, outDir } from './build.mjs';

const MOD_REGEX = /from [\'"](.*)\.gleam[\'"]/gim

/**
 * Modified from svelte-preprocess/replace
 * @type {import('svelte-preprocess').Transformer}
 */
export const transformer = async ({ content, filename }) => {
	let new_content = content

	if (new_content.match(MOD_REGEX)) {
		const name = new_content.match(MOD_REGEX)[0].replace(MOD_REGEX, '$1')
		
		try {
			await build(name)
		} catch (err) {
			console.error(err)
			return {}
		}

		// TODO unsure why but gleam will put something in /src/routes/filename.gleam
		// into /target/lib/filename/routes/filename.js
		// So, we have to take everything between /src/.../filename.gleam and add it to the entry path
		const parts = filename.split('/src')[1].split('/')
		const path_prefix = parts.slice(0, parts.length - 1).join('/')
		const js_entry = join(outDir(name), path_prefix, `${name}.js`)

		console.log({ name, js_entry })

		new_content = new_content.replace(MOD_REGEX, `from '${js_entry}'`)
	}

	return {
		code: new_content,
	}
}