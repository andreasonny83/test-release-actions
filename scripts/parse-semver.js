#!/usr/bin/env node

// eslint-disable-next-line
const semver = require('semver');
// eslint-disable-next-line
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2), {
  string: ['version'],
  boolean: ['semver', 'major', 'minor', 'patch', 'tag', 'tagVersion'],
});

const input = argv.version;
const version = input.split('_');
const parsedVersion = semver.parse(version[1]);

if (argv.semver) {
  console.log(parsedVersion.version);
  return;
}
if (argv.major) {
  console.log(parsedVersion.major);
  return;
}
if (argv.minor) {
  console.log(parsedVersion.minor);
  return;
}
if (argv.patch) {
  console.log(parsedVersion.patch);
  return;
}
if (argv.tag && parsedVersion.prerelease[0]) {
  console.log(parsedVersion.prerelease[0]);
  return;
}
if (argv.tagVersion && parsedVersion.prerelease[1]) {
  console.log(parsedVersion.prerelease[1]);
  return;
}

const out = {
  version: parsedVersion.version,
  major: parsedVersion.major,
  minor: parsedVersion.minor,
  patch: parsedVersion.patch,
  tag: parsedVersion.prerelease[0],
  tagVersion: parsedVersion.prerelease[1],
};

console.log(out);
