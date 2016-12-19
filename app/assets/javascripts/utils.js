function ns(dotscope, fn) {
  var scope = this;
  var a = dotscope.split('.');
  var part;

  while (part = a.shift()) {
    if (scope[part] === void 0) {
      scope[part] = {};
    }
    scope = scope[part];
  }

  fn.call(scope, scope);
}