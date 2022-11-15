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
        ///////////////////////////////////////////////////////////////////////
        // 1. Important rules or rules that come up often
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }], // require explicit function return types
        '@typescript-eslint/explicit-module-boundary-types': 'off', // disable in favor of @typescript-eslint/explicit-function-return-type
        '@typescript-eslint/no-explicit-any': 'error', // no explicit use of type `any`
        '@typescript-eslint/no-unused-vars': [
            // allow unused vars if they start with underscore
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off', // disable to allow explicit types that could be inferred
        '@typescript-eslint/no-non-null-assertion': 'error', // disallow the non-nullable operator '!.'
        '@typescript-eslint/return-await': ['error', 'in-try-catch'], // disallow "return await", except require when needed in try/catch
        curly: ['error', 'all'], // require curly braces around conditionals
        eqeqeq: ['error', 'always'], // disallow '==' and '!='
        'import/no-named-as-default-member': 'off', // disable because too annoying. See https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
        'import/order': [
            // enforce ordering and formatting of imports
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
        'no-return-await': 'off', // disabling in favor of @typescript-eslint/return-await
        'prettier/prettier': 'off', // consumers may override with: ['error', require('./.prettierrc')]
        quotes: ['error', 'single', { allowTemplateLiterals: true }], // require quoted strings to use single quotes, excluding template literals
        semi: ['error', 'always'], // require the use of semicolons because america

        ///////////////////////////////////////////////////////////////////////
        // 2. Less important or common rules, but still good to have
        'no-eval': 'error', // disallow use of eval()
        'no-extend-native': 'error', // disallow adding to native types
        'no-extra-bind': 'error', // disallow unnecessary function binding
        'no-implied-eval': 'error', // disallow use of eval()-like methods
        'no-iterator': 'error', // disallow usage of __iterator__ property
        'no-labels': 'error', // disallow use of labeled statements
        'no-native-reassign': 'error', // disallow reassignments of native objects
        'no-new': 'error', // disallow use of new operator when not part of the assignment or comparison
        'no-new-func': 'error', // disallow use of new operator for Function object
        'no-new-wrappers': 'error', // disallows creating new instances of String, Number, and Boolean
        'no-octal-escape': 'error', // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \252";
        'no-proto': 'error', // disallow usage of __proto__ property
        'no-return-assign': 'error', // disallow use of assignment in return statement
        'no-script-url': 'error', // disallow use of javascript: urls.
        'no-sequences': 'error', // disallow use of comma operator
        radix: ['error', 'as-needed'], // requires 2nd arg to parseInt(), except disallows if the arg is 10
    },
};
