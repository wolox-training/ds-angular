import angular from 'angular';

angular.module('app-bootstrap').directive('formInput', function() {
  return {
    template: require('./formInput.html'),
    scope: {
      formref: '=formref',
      name: '@name',
      label: '@label',
      maxlength: '@maxlength',
      minlength: '@minlength',
      model: '=model',
      pattern: '=pattern',
      required: '@required',
      type: '@type'
    }
  };
});
