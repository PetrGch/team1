module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },

  "plugins": [
    "react"
  ],

  "extends": [
    "standard-jsx"
  ],

  "rules": {
    "react/jsx-no-bind": ["error", {
      "allowArrowFunctions": true,
      "allowBind": false,
      "ignoreRefs": true
    }],
    "react/no-did-update-set-state": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "error",
    "react/jsx-indent": 0,
    "react/self-closing-comp": "off",
    "react/jsx-space-before-closing": "off",
    "react/jsx-indent-props": "off"
  }
};
