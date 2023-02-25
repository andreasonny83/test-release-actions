const semver = require('semver');

const input = 'release-components_0.0.2-beta.1';
const version = input.split('_');
const parsedVersion = semver.parse(version[1]);

const out = {
  version: parsedVersion.version,
  major: parsedVersion.major,
  minor: parsedVersion.minor,
  patch: parsedVersion.patch,
  tag: parsedVersion.prerelease[0],
  tagVersion: parsedVersion.prerelease[1],
};

console.log(out);

return out;
