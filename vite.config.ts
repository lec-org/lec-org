import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, 'src')
			},
			{
				find: '@/pages',
				replacement: resolve(__dirname, 'src/pages')
			}
		]
	}
});
