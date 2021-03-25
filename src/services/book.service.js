import angular from 'angular';
import books from './data-books.json';

angular.module('app-bootstrap').factory('bookService', [
  function() {
    return {
      getBooks: () => books
    };
  }
]);
