import angular from 'angular';
import bookCover from '../../assets/images/book-cover.png';
import badge from '../../assets/images/badge.png';

angular.module('app-bootstrap').component('bookDetail', {
  template: require('./book-detail.html'),
  controller: ['bookService', '$stateParams', function (bookService, $stateParams) {
    this.bookCover = bookCover;
    this.badge = badge;
    this.book = bookService.getBook($stateParams.bookId);
  }]
});
