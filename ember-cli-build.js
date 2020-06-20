'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    sourcemaps: {
      enabled: false
    },
    fingerprint: {
      extensions: ['js', 'css', 'map'],
    },
    // TODO: remove once https://github.com/ember-cli/ember-cli/issues/8448 is fixed
    'ember-prism': {
      theme: 'okaidia',

      components: [
        'apacheconf',
        'bash',
        'css',
        'handlebars',
        'http',
        'javascript',
        'json',
        'markup-templating',
        'ruby',
        'scss'
      ],

      plugins: ['line-numbers', 'normalize-whitespace']
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
