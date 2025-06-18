module.exports = {
  // always use the repository that is currently cloned
  repositoryUrl: `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}.git`,
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits"
      }
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};