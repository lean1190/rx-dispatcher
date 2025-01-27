import pluginJs from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: ['dist/*']
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}']
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort
        },
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            'no-extra-parens': ['error', 'all', {
                ignoreJSX: 'all',
                enforceForArrowConditionals: false
            }],

            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',

            indent: ['error', 4, {
                flatTernaryExpressions: true
            }],

            'no-dupe-keys': 'error',
            'no-duplicate-imports': 'error',

            'no-irregular-whitespace': ['error', {
                skipComments: true
            }],

            'no-template-curly-in-string': 'error',
            'no-unexpected-multiline': 'error',
            'no-unreachable': 'error',
            'no-unsafe-negation': 'error',
            'no-unused-private-class-members': 'error',
            'no-use-before-define': 'error',
            'require-atomic-updates': 'error',
            'valid-typeof': 'error',
            'use-isnan': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'arrow-spacing': 'error',

            'no-confusing-arrow': ['error', {
                allowParens: true
            }],

            'block-scoped-var': 'error',
            'class-methods-use-this': 'error',
            'max-depth': ['error', 3],
            curly: 'error',
            eqeqeq: 'error',
            'dot-notation': 'error',
            'no-alert': 'error',
            'no-array-constructor': 'error',
            'no-bitwise': 'error',
            'no-case-declarations': 'error',

            'no-else-return': 'error',
            'no-empty-static-block': 'error',
            'no-empty-function': 'error',
            'no-eval': 'error',
            'no-extra-bind': 'error',
            'no-extra-boolean-cast': 'error',
            'no-extra-semi': 'error',
            'no-lone-blocks': 'error',
            'no-loop-func': 'error',
            'no-redeclare': 'error',
            'no-multi-assign': 'error',
            'no-return-await': 'error',
            'no-sequences': 'error',
            'no-shadow-restricted-names': 'error',
            'no-underscore-dangle': 'error',
            'no-unneeded-ternary': 'error',
            'no-unused-expressions': 'error',
            'no-useless-catch': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-with': 'error',
            'object-shorthand': 'error',
            'one-var': ['error', 'never'],
            'one-var-declaration-per-line': ['error', 'always'],
            'prefer-const': 'error',
            'prefer-object-spread': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'quote-props': ['error', 'as-needed'],
            'vars-on-top': 'error',
            yoda: 'error',
            'array-bracket-newline': ['error', 'consistent'],
            'array-bracket-spacing': ['error', 'never'],
            'array-element-newline': ['error', 'consistent'],
            'arrow-parens': ['error', 'always'],
            'block-spacing': 'error',
            'brace-style': 'error',
            'comma-dangle': ['error', 'never'],

            'comma-spacing': ['error', {
                before: false,
                after: true
            }],

            'comma-style': ['error', 'last'],
            'computed-property-spacing': ['error', 'never'],
            'dot-location': ['error', 'property'],
            'eol-last': ['error', 'always'],
            'func-call-spacing': ['error', 'never'],
            'function-call-argument-newline': ['error', 'consistent'],
            'function-paren-newline': ['error', 'consistent'],
            'implicit-arrow-linebreak': ['error', 'beside'],
            'jsx-quotes': ['error', 'prefer-double'],

            'key-spacing': ['error', {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }],

            'keyword-spacing': ['error', {
                before: true,
                after: true
            }],

            'linebreak-style': ['error', 'unix'],
            'lines-between-class-members': ['error', 'always'],

            'max-statements-per-line': ['error', {
                max: 1
            }],

            'newline-per-chained-call': ['off'],
            'no-mixed-spaces-and-tabs': 'error',
            'no-multi-spaces': 'error',
            'no-multiple-empty-lines': 'error',
            'no-trailing-spaces': 'error',
            'no-whitespace-before-property': 'error',
            'nonblock-statement-body-position': ['error', 'beside'],

            'object-curly-newline': ['error', {
                consistent: true
            }],

            'object-curly-spacing': ['error', 'always'],

            'object-property-newline': ['error', {
                allowAllPropertiesOnSameLine: true
            }],

            'operator-linebreak': ['error', 'after'],
            'padded-blocks': ['error', 'never'],

            'padding-line-between-statements': ['error', {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            }],

            quotes: ['error', 'single'],
            'rest-spread-spacing': ['error', 'never'],
            semi: 'error',
            'semi-spacing': 'error',
            'semi-style': ['error', 'last'],
            'space-before-blocks': 'error',

            'space-before-function-paren': ['error', {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }],

            'space-in-parens': ['error', 'never'],
            'space-infix-ops': 'error',
            'space-unary-ops': 'error',
            'switch-colon-spacing': 'error',
            'template-curly-spacing': ['error', 'never'],
            'template-tag-spacing': ['error', 'always'],
            'wrap-iife': ['error', 'outside'],
            'wrap-regex': 'error'
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended
];
