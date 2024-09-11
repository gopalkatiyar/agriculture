import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
    },
  },
];
