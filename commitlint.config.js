module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Disable case enforcement - allow any case in subject and scope
    "subject-case": [0],
    "scope-case": [0],
    "type-case": [0],
    
    // Disable length restrictions
    "header-max-length": [0],
    "body-max-line-length": [0],
    "footer-max-line-length": [0],
    
    // Make body and footer optional
    "body-leading-blank": [1, "always"],
    "footer-leading-blank": [1, "always"],
    
    // Allow wide range of commit types (warning only, not error)
    "type-enum": [
      1,
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
        "build",
        "wip",
        "merge",
        "release",
        "hotfix",
        "config",
        "update",
        "add",
        "remove",
        "change",
        "improve",
        "cleanup",
      ],
    ],
    
    // Disable strict requirements
    "type-empty": [1, "never"],
    "subject-empty": [1, "never"],
    "scope-empty": [0],
  },
};
