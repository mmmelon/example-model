/*
Some basic meteor stubs. Will be separated in a package soon
*/

_original = Meteor.call;

stubMeteorMethod = function(methodName, error, success) {
  var s, spy;
  if (error == null) {
    error = null;
  }
  if (success == null) {
    success = null;
  }
  s = Meteor.call;
  spy = sinon.spy();
  Meteor.call = (function(_this) {
    return function() {
      var lastArg;
      if (arguments[0] === methodName) {
        lastArg = _.last(arguments);
		var methodArguments = [];
		if (typeof lastArg === 'function') {
			for(var i=1;i<arguments.length - 1;i++){
				methodArguments.push(arguments[i]);
			}
		}else{
			for(var i=1;i<arguments.length;i++){
				methodArguments.push(arguments[i]);
			}
		}
		spy.apply(this,methodArguments);
        if (typeof lastArg === 'function') {
          return lastArg(error, success);
        }
      } else {
        return s.apply(_this, arguments);
      }
    };
  })(this);
  return spy;
};

restoreMethodStubs = function() {
  return Meteor.call = _original;
};

_restoreAll = stubs.restoreAll;

stubs.restoreAll = function() {
  _restoreAll.apply(this);
  return restoreMethodStubs();
};
