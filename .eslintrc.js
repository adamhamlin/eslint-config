module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    ignorePatterns: ['**/*.js'],
    rules: {
        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            // Allow un unused vars if they start with underscore
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'import/no-named-as-default-member': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // Built-in imports (i.e. NodeJS native) go first
                    'external', // External imports
                    'internal', // Absolute imports
                    ['sibling', 'parent'], // Relative imports, the sibling and parent types they can be mingled together
                    'index', // Index imports
                    'unknown', // Unknown
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'prettier/prettier': 'off', // consumers may override with: ['error', require('./.prettierrc')]
        semi: ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
    },
};
