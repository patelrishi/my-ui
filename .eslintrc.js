module.exports = {
  extends: ["next", "next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/no-explicit-any": "warn", // or "off"
    // prefer-const is useful; prefer to fix code instead of turning off
  },
};
