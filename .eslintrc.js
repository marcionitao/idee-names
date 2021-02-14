module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [	
		'plugin:vue/essential',
		'eslint:recommended',
  
	],
	rules: {
		'quotes': [2, 'single', { 'avoidEscape': true }],
		'vue/script-indent': ['error', 2, { 'baseIndent': 0 }],
		'semi': ['error', 'always']
		//'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		//'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};