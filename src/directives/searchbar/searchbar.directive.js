import angular from 'angular';

angular.module('app-bootstrap').directive('searchbar', function() {
  return {
    template: require('./searchbar.html'),
    scope: {
      model: '=model'
    }
  };
});
