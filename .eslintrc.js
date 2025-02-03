module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    // eslint
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    // next
    "@next/next/no-img-element": "off",

    // simple-import-sort
    "simple-import-sort/imports": "off", // temporarily disabled
    "simple-import-sort/exports": "error"
  }
};
