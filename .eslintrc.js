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
        indent: ['warn', 4]
    }
}
