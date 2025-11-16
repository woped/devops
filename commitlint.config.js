module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Allow uppercase and any alphanumeric in subject and scope
    // (disable case enforcement on these parts)
    "subject-case": [0],
    "scope-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "feature",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "ci",
        "revert",
      ],
    ],
  },
};
