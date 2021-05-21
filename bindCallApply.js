Function.prototype.myCall = function(context, ...parameter) {
  if (typeof context === 'object') {
    context = context || window;
  } else {
    context = Object.create(null);
  }
  let fn = Symbol();
  context[fn] = this;
  context[fn](...parameter);
  delete context[fn];
}

Function.prototype.myApply = function(context, parameter) {
  if (typeof context === 'object') {
    context = context || window;
  } else {
    context = Object.create(null);
  }
  let fn = Symbol();
  context[fn] = this;
  context[fn](...parameter);
  delete context[fn];
}

Function.prototype.myBind = function (context, ...innerArgs) {
  let me = this
  return function (...finnalyArgs) {
    return me.call(context, ...innerArgs, ...finnalyArgs)
  }
}

sayHi.myApply(person, [25, 男]); // Abiel 25 男

let person = {
  name: 'Abiel'
}
function sayHi(age, sex) {
  console.log(this.name, age, sex);
}
sayHi.myCall(person, 25, 男); // Abiel 25 男


// vue bind手写

function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;
