var Filter = require('broccoli-filter');
var compile = require('hbars/compiler').compile;

function TemplateCompiler (inputTree, options) {
  if (!(this instanceof TemplateCompiler)) {
    return new TemplateCompiler(inputTree, options);
  }
  Filter.call(this, inputTree, options); // this._super()
  this.options = options || {};
  this.inputTree = inputTree;
}

TemplateCompiler.prototype = Object.create(Filter.prototype);
TemplateCompiler.prototype.constructor = TemplateCompiler;
TemplateCompiler.prototype.extensions = ['hbars', 'haml'];
TemplateCompiler.prototype.targetExtension = 'hbs';
TemplateCompiler.prototype.processString = function (string, relativePath) {
  return compile(string);
}

module.exports = TemplateCompiler;
