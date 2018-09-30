var exec = require('cordova/exec');

var getPromisedCordovaExec = function (command, success, fail) {
    var toReturn, deferred, injector, $q;
    if (success === undefined) {
        if (window.jQuery) {
            deferred = jQuery.Deferred();
            success = deferred.resolve;
            fail = deferred.reject;
            toReturn = deferred;
        } else if (window.angular) {
            injector = angular.injector(["ng"]);
            $q = injector.get("$q");
            deferred = $q.defer();
            success = deferred.resolve;
            fail = deferred.reject;
            toReturn = deferred.promise;
        } else if (window.when && window.when.promise) {
            deferred = when.defer();
            success = deferred.resolve;
            fail = deferred.reject;
            toReturn = deferred.promise;
        } else if (window.Promise) {
            toReturn = new Promise(function(c, e) {
                success = c;
                fail = e;
            });
        } else if (window.WinJS && window.WinJS.Promise) {
            toReturn = new WinJS.Promise(function(c, e) {
                success = c;
                fail = e;
            });
        } else {
            return console.error('PgyerPlugin either needs a success callback, or jQuery/AngularJS/Promise/WinJS.Promise defined for using promises');
        }
    }
    // 5th param is NOT optional. must be at least empty array
    cordova.exec(success, fail, "PgyerPlugin", command, []);
    return toReturn;
};

var pgyer = function (success, fail) {
    return getPromisedCordovaExec('PgyerPlugin', success, fail);
};

pgyer.showFeedback= function (success, fail) {
    return getPromisedCordovaExec('showFeedback', success, fail);
    // exec(success, error, 'PgyerPlugin', 'showFeedback', [arg0]);
};

pgyer.crashRegister= function (success, fail) {
    return getPromisedCordovaExec('crashRegister', success, fail);
    // exec(success, error, 'PgyerPlugin', 'crashRegister', [arg0]);
};

pgyer.checkUpdate= function (success, fail) {
    return getPromisedCordovaExec('checkUpdate', success, fail);
    // exec(success, error, 'PgyerPlugin', 'checkUpdate', [arg0]);
};


module.exports = pgyer;
