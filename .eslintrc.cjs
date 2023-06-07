module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: 'standard-with-typescript',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    rules: {
        indent: ['warn', 4],
        'no-unused-vars': 'warn',
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/triple-slash-reference': 'off'
    }
}
