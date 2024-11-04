import sortImports from '@ianvs/prettier-plugin-sort-imports';

export default {
    plugins: [sortImports],
    singleQuote: true,
    printWidth: 150,
    bracketSpacing: true,
    endOfLine: 'lf',
    tabWidth: 4,
    semi: true,
    trailingComma: 'all',
    importOrder: [
        '',
        '<TYPES>^(node:)',
        '',
        '<TYPES>',
        '',
        '<TYPES>^[.]',
        '',
        '<BUILTIN_MODULES>',
        '',
        '<THIRD_PARTY_MODULES>',
        '',
        '^zigbee',
        '',
        '^[.]',
    ],
};
