import angular from 'angular';

angular.module('app-bootstrap').factory('bookService', ['$http', 'localStorageService',
  function($http, localStorageService) {
    const accessToken = localStorageService.get('access-token');
    const client = localStorageService.get('client');
    const uid = localStorageService.get('uid');
    const headers = {
      'access-token': accessToken,
      client,
      uid
    };
    return {
      getBooks: () => $http.get(`${process.env.API_URL}/books`, { headers }),
      getBook: (id) => $http.get(`${process.env.API_URL}/books/${id}`, { headers })
    };
  }
]);
