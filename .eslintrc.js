// .eslintrc.js
module.exports = {
  // ...
  overrides: [
    {
      // ...
      extends: [
        // ...
        'plugin:prettier/recommended', // Prettier plugin
      ],
      rules: {
        // ...
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
      },
    },
  ],
}