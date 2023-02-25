GITHUB_REF="release-package-alpha_0.0.2-beta.1"
VERSION=$(echo "${GITHUB_REF}" | cut -d "_" -f2)
echo "$VERSION"