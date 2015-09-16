Package.describe({
  name: 'zhenya:moment-precise-range',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'codebox precise-range plugin for momentjs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zhenyasav/moment-precise-range',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('momentjs:moment');
  api.addFiles('moment-precise-range/readable-range.js');
});
