import angular from 'angular';
import bookCover from '../../assets/images/book-cover.png';

angular.module('app-bootstrap').component('bookList', {
  template: require('./book-list.html'),
  controller: [function () {
    this.bookCover = bookCover;
  }]
});
