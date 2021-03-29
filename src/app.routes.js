const angular = require('angular');

angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('bookDetail', {
        url: '/book-detail/{bookId}',
        component: 'bookDetail'
      })
      .state('bookList', {
        url: '/book-list',
        component: 'bookList'
      })
      .state('login', {
        url: '/login',
        component: 'login'
      })
      .state('signup', {
        url: '/signup'
      });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run(['$transitions',
  function ($transitions) {
    $transitions.onBefore({ from: 'home' }, transition => {
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });
  }
]);
