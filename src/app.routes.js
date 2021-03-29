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
        url: '/signup',
        component: 'signup'
      });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run(['$transitions', 'localStorageService',
  function ($transitions, localStorageService) {
    $transitions.onBefore({ }, transition => {
      const accessToken = localStorageService.get('access-token');
      if (['login', 'signup'].includes(transition.to().name)) {
        return accessToken && transition.router.stateService.target('bookList');
      } else {
        if (!accessToken) {
          return transition.router.stateService.target('login');
        }
      }
    });
  }
]);
