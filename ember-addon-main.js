'use strict';

var hbarsCompile = require('./index.js')

module.exports = {
  name: 'ember-cli-hbars',
  included: function (app) {
    var self = this;
    this._super.included.apply(this, arguments);
    app.registry.add('template', {
      name: 'ember-cli-htmlbars',
      ext: ['haml', 'hbars'],
      toTree: function(tree) {
        return hbarsCompile(tree);
      }
    })

  }
}
