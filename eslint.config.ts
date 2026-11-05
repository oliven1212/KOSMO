import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginCypress from 'eslint-plugin-cypress';
import pluginVitest from '@vitest/eslint-plugin';
import pluginOxlint from 'eslint-plugin-oxlint';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{vue,ts,mts,tsx}'],
    },

    // Lint kun src/: ignorér alt i roden undtagen src-mappen
    globalIgnores(['*', '!src/', 'src/components/icons/**','src/router/**', '**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    ...pluginVue.configs['flat/essential'],
    // Type-checked variant is required by @typescript-eslint/no-misused-promises
    vueTsConfigs.recommendedTypeChecked,

    {
        name: 'app/rules',
        plugins: {
            '@stylistic': pluginStylistic,
            'vuejs-accessibility': pluginVueA11y,
        },
        rules: {
            // ─── Core JS ───────────────────────────────────────────
            'indent': ['error', 4],            // 4 mellemrum indrykning
            'no-console': 'warn',              // Advar om console.log i production
            'no-unused-vars': 'error',         // Ubrugte variabler
            'no-var': 'error',                 // Forbyd var, brug let/const
            'prefer-const': 'warn',            // Brug const hvor muligt
            'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }], // Ingen duplicate imports (import type på egen linje er ok)
            'no-unreachable': 'error',         // Kode efter return/throw
            'curly': ['error', 'all'],         // Altid krøllede parenteser ved if/else/for/while

            // ─── TypeScript ────────────────────────────────────────
            '@typescript-eslint/array-type': ['error', { 'default': 'array' }],          // Brug T[] i stedet for Array<T>
            '@typescript-eslint/explicit-function-return-type': 'error',                // Funktioner skal have returtype
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],   // Brug interface i stedet for type
            '@typescript-eslint/consistent-type-imports': ['error', {                   // Brug import type til typer
                prefer: 'type-imports',
                fixStyle: 'separate-type-imports',   // import type { A } på egen linje
                disallowTypeAnnotations: true,       // Forbyd import('Foo').Foo i typer
            }],
            '@typescript-eslint/no-misused-promises': ['error', {                       // Fanger Promises de forkerte steder
                checksConditionals: true,            // Glemt await i if/ternary
                checksVoidReturn: true,              // Async callback som ingen venter på
                checksSpreads: true,                 // Spread af et Promise
            }],

            // ─── Vue ───────────────────────────────────────────────
            'vue/no-mutating-props': ['error', { shallowOnly: false }],   // Forbyd mutation af props (også nested)
            'vue/define-props-declaration': ['error', 'type-based'],      // Kræv defineProps<{...}>()
            'vue/define-emits-declaration': ['error', 'type-literal'],    // Kræv defineEmits<{ navn: [args] }>()
            'vue/no-unused-refs': 'error',                                // Ubrugte refs i template

            // ─── Accessibility ─────────────────────────────────────
            'vuejs-accessibility/alt-text': 'error',                      // Billeder skal have alt (alt="" ved dekorative)
            'vuejs-accessibility/form-control-has-label': 'error',        // Inputs skal have label

            // ─── Stylistic ─────────────────────────────────────────
            '@stylistic/object-curly-spacing': ['error', 'always'],       // Mellemrum i { a } objekter
            '@stylistic/space-infix-ops': 'error',                        // Mellemrum omkring operatorer (a + b)
            '@stylistic/type-annotation-spacing': 'error',                // Mellemrum ved typer (a: string)
            '@stylistic/padding-line-between-statements': [               // Tom linje efter variabelerklæringer
                'error',
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            ],
            '@stylistic/max-len': [                                       // Maks 200 tegn pr. linje
                'error',
                {
                    code: 200,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true,
                },
            ],
            '@stylistic/quotes': ['error', 'single'],                     // Enkelte anførselstegn
            '@stylistic/semi': 'error',                                   // Kræv semikolon
            '@stylistic/comma-dangle': ['error', 'always-multiline'],     // Komma efter sidste element ved flere linjer
        },
    },

    {
        ...pluginCypress.configs.recommended,
        files: [
            'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
            'cypress/support/**/*.{js,ts,jsx,tsx}',
        ],
    },

    {
        ...pluginVitest.configs.recommended,
        files: ['src/**/__tests__/*'],
    },

    ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
);
