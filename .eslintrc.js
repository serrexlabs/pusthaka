module.exports = {
    env: {
        browser: true,
        es6: true,
        mocha: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
        "plugin:import/typescript",
        "plugin:prettier/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2017,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react"],
    rules: {
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        /* we're handling code formatting using Prettier*/
        indent: 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/array-type": ["error", "generic"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
        "react/prefer-stateless-function": 0,
        "import/prefer-default-export": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "react/destructuring-assignment": [1, "never"],
        "class-methods-use-this": 0,
        "prefer-destructuring": [1, { object: false }],
        "no-trailing-spaces": "error",
        "no-console": "error",
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
};