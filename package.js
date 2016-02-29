Package.describe({
  name: "nickgermaine:ms-seo",
  summary: "Easily config SEO for your routes",
  git: "https://github.com/nickgermaine/ms-seo.git",
  version: "0.4.1"
});

Package.onUse(function(api){

  api.versionsFrom('1.0');

  api.use(['mongo', 'coffeescript', 'underscore']);

  api.use([
    'jquery',
    'deps',
    'kadira:flow-router@2.9.0'
  ], 'client');

  api.addFiles([
    'seo_collection.coffee'
  ]);

  // Client Files
  api.addFiles([
    'seo.coffee'
  ], 'client');

  api.addFiles([
    'seo_publications.coffee'
  ], 'server');
});
