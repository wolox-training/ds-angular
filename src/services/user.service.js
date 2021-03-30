import angular from 'angular';

angular.module('app-bootstrap').factory('userService', [
  '$http', function($http) {
    return {
      signin: (credentials) => $http.post(`${process.env.API_URL}/users/sign_in`, credentials),
      signup: (user) => $http.post(`${process.env.API_URL}/users`, user)
    };
  }
]);
