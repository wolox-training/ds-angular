import angular from 'angular';
import bookCover from '../../assets/images/book-cover.png';
import badge from '../../assets/images/badge.png';

angular.module('app-bootstrap').component('bookDetail', {
  template: require('./book-detail.html'),
  controller: [function () {
    this.bookCover = bookCover;
    this.badge = badge;
  }]
});
