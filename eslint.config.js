const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
];
