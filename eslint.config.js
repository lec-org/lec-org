import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier,
	eslintPluginPrettier
]
