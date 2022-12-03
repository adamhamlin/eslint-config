# Easy ESLint & Prettier Config

Custom TypeScript project settings for ESLint and Prettier! A solid baseline ruleset that you can override as desired. Check out the specific settings in [.eslintrc.js](./.eslintrc.js) and [.prettierrc.js](./.prettierrc.js).

## Install

```bash
npm install --save-dev @adamhamlin/eslint-config
```

> **NOTE:** This package uses [peer dependencies](./package.json), so there's no need to explicitly install `eslint`, `prettier`, `@typescript-eslint/eslint-plugin`, etc. (_unless you're using NPM version 6.x or earlier_).

## Usage

Your `.eslintrc.js` file should look like:

```javascript
module.exports = {
    extends: ['@adamhamlin/eslint-config'],
    rules: {
        // overrides, if desired
    },
    // ...
};
```

Your `.prettierrc.js` file should look like:

```javascript
module.exports = {
    ...require('@adamhamlin/eslint-config/prettier'),
    // overrides, if desired
};
```

That's it.

## Lint/Prettier Enforcement

I like [husky+lint-staged](https://prettier.io/docs/en/install.html#git-hooks) to ensure all committed code is compliant, along with `npm run check` at some point during CI.

Add the following as desired to your `package.json` file:

```json
"scripts": {
    "_lint": "eslint --fix",
    "_lint:check": "eslint",
    "_format": " prettier --write --ignore-unknown",
    "_format:check": "prettier --check --ignore-unknown",
    "fix": "npm run _lint . && npm run _format .",
    "check": "npm run _lint:check . && npm run _format:check ."
},
"lint-staged": {
    "*.ts": "npm run _lint -- --cache",
    "*": "npm run _format"
},
```

## Jest Linting

This package also bundles [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest), but it does not configure it. If you're using `jest`, you probably want to include something like this in your `.eslintrc.js`:

```javascript
overrides: [{
    files: ['**/__tests__/**'],
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'],
    rules: {
        // more overrides...
    }
}],
```

## Notes/Miscellaneous

-   By default, `*.js` files will be ignored by eslint. You can override `ignorePatterns` as needed.
-   This package already bundles a `parser` and sets `parserOptions`.
-   By default, eslint and prettier are kept fully separated. If you would like eslint to also use rules from your prettier config, update the following in `.eslintrc.js`:
    ```javascript
    rules: {
        'prettier/prettier': ['error', require('./.prettierrc')]
    }
    ```
