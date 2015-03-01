'use strict';

var hbarsCompile = require('./index.js')
var checker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-cli-hbars',

  shouldSetupRegistryInIncluded: function() {
    return !checker.isAbove(this, '0.2.0');
  },

  setupPreprocessorRegistry: function(type, registry) {
    var self = this;

    registry.add('template', {
      name: 'ember-cli-hbars',
      ext: ['haml', 'hbars'],
      toTree: function(tree) {
        return hbarsCompile(tree);
      }
    });
  },

  included: function (app) {
    var self = this;
    this._super.included.apply(this, arguments);

    if (this.shouldSetupRegistryInIncluded()) {
      this.setupPreprocessorRegistry('parent', app.registry);
    }
  }
}
