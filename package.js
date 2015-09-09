Package.describe({
  name: 'anthonyastige:templatehelpers',
  version: '0.3.1',
  summary: 'Template helpers for Session, logical operations and debug',
  git: 'https://github.com/AnthonyAstige/Meteor-Template-helpers',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['templating', 'underscore', 'ostrio:jsextensions@0.0.4'], 'client');
  api.addFiles('ostrio:templatehelpers.js', 'client');
});
