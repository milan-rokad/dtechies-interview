/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['react'],
	ignorePatterns: ['build/*'],
	rules: {
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
	},
}
