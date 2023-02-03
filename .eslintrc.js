module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["node_modules", "dist", ".eslintrc.js", "src/gql/**/*"],
};
