module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        // "quotes": [
        //     "error",
        //     "double"
        // ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "no-unused-vars": 0,
        "space-before-function-paren": 0,
        "space-before-blocks": 1,
       "keyword-spacing": 1,
       "arrow-spacing": 1,
       "comma-spacing": 1,
       "space-infix-ops": 1,
    }
};