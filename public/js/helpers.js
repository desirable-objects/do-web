'use strict';

// Needed until 1.1.0
angular.resetForm = function (scope, formName, defaults) {
    $('form[name=' + formName + '], form[name=' + formName + '] .ng-dirty').removeClass('ng-dirty').addClass('ng-pristine');
    var form = scope[formName];
    form.$dirty = false;
    form.$pristine = true;
    for(var field in form) {
      if(form[field].$pristine === false) {
        form[field].$pristine = true;
      }
      if(form[field].$dirty === true) {
        form[field].$dirty = false;
      }
    }
    for(var d in defaults) {
      scope[d] = defaults[d];
    }
};