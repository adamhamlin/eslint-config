module.exports = {
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    bracketSameLine: true,
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
